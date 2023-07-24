// The Aleo library is free software: you can redistribute it and/or modify it under the terms of
// the GNU General Public License as published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.

// The Aleo library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
// without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along with the Aleo library. If
// not, see <https://www.gnu.org/licenses/>.

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// This file specifies the grammar of Aleo instructions in the ABNF notation, which is defined in: -
// RFC 5234 (https://www.rfc-editor.org/rfc/rfc5234) - RFC 7405
// (https://www.rfc-editor.org/rfc/rfc7405)

// Aleo instructions files are written in Unicode, encoded in UTF-8. The grammar in this file
// applies to the Unicode scalar values that result from the UTF-8 decoding of the files.

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// This grammar is derived from the current implementation of the nom parser of Aleo instructions in
// snarkVM.

// The grammar should recognize exactly the same language as the parser. The formulation of the
// rules for some constructs may not correspond to the parser implementation exactly; this is to
// highlight more structure to facilitate future changes, or because of inherent differences between
// the declarative nature of the grammar and the operational nature of the parser.

// This grammar currently consists of one level, as opposed to two levels (lexical and syntactic).
// While two levels are typical for higher-level languages like Leo, one level is workable for
// lower-level languages like Aleo instructions. By not throwing away whitespace and comment when
// moving between the two levels, we can (as the current rules do) enforce requirements on where
// comments and whitespace may occur. The parser also is written according to a single level. All of
// this may be revisited in the future, if needed.

// The grammar should be unambiguous if we take into account the extra-grammatical requirement that
// the longest match is used, which is a common extra-grammatical requirement, at least in lexical
// grammars of two-level grammars, but should also work for this one-level grammar. We plan to
// formally prove this eventually.

// The rules below are separated into sections delimited by 40 semicolons. The sections do not have
// a very deep significance, but are meant to group related rules. For instance, the first section
// gives names to characters that could not be otherwise denoted in ABNF strings; the second section
// categorizes the allowed characters; and so on.

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
grammar Aleo;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// excludes bidi embeddings/overrides/isolates (i.e. %x202A-202E and %x2066-2069) and excludes
// high/low surrogates (i.e. %xD800-DFFF )

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// anything but * (%x2A) and / (%x2F)

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

DIGIT: DecimalDigit; // 0-9

Addressliteral: 'aleo1' Identifier;
ADDRESS_TYPE: 'address';

FIELD_TYPE: 'field';

GROUP_TYPE: 'group';

SCALAR_TYPE: 'scalar';

BRANCH_OP: 'branch.eq' | 'branch.neq';
UNSIGNED_TYPE: 'u8' | 'u16' | 'u32' | 'u64' | 'u128';

SIGNED_TYPE: 'i8' | 'i16' | 'i32' | 'i64' | 'i128';

BOOLEAN_TYPE: 'boolean';

STRING_TYPE: 'string';

unarp_op: (
		'abs'
		| 'abs.w'
		| 'double'
		| 'inv'
		| 'neg'
		| 'not'
		| 'square'
		| 'sqrt'
	);

// BINARY_OP:
binary_op:
	(
		'add'
		| 'add.w'
		| 'sub'
		| 'sub.w'
		| 'mul'
		| 'mul.w'
		| 'div'
		| 'div.w'
		| 'rem'
		| 'rem.w'
		| 'mod'
		| 'pow'
		| 'pow.w'
		| 'shl'
		| 'shl.w'
		| 'shr'
		| 'shr.w'
		| 'and'
		| 'or'
		| 'xor'
		| 'nand'
		| 'nor'
		| 'gt'
		| 'gte'
		| 'lt'
		| 'lte'
	);

Ternary_op: 'ternary';

is_op: ('is.eq' | 'is.neq');

assert_op: ('assert.eq' | 'assert.neq');

Commit_op: (
		'commit.bhp' (
			('2' '5' '6')
			| ('5' '1' '2')
			| ('7' '6' '8')
			| ('1' '0' '2' '4')
		)
	)
	| ('commit.ped' ( ('6' '4') | ('1' '2' '8')));

Hash_op: (
		'hash.bhp' (
			('2' '5' '6')
			| ('5' '1' '2')
			| ('7' '6' '8')
			| ('1' '0' '2' '4')
		)
	)
	| ('hash.ped' ( ('6' '4') | ('1' '2' '8')))
	| ('hash.psd' ( '2' | '4' | '8'))
	| ('hash_many.psd' ( '2' | '4' | '8'));

CAST_OP: 'cast';
Identifier: IdentifierStart IdentifierPart*;

fragment IdentifierStart: [a-zA-Z$_];
fragment IdentifierPart: [a-zA-Z0-9$_];
fragment DecimalDigit: [0-9]+;

// UPPERCASE_LETTER: '\u0041' ..'\u005A'; // A-Z

fragment LOWERCASE_LETTER: [a-z]+; // a-z

letter: Identifier;
register: Identifier;
register_access: register ( '.' ('owner' | identifier))*;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

identifier: letter ( letter | DIGIT | '_')*;

program_name: identifier;

program_domain: identifier;

program_id: program_name '.' program_domain;

locator: program_id '/' identifier;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

Signed_literal: ('-'? ( DecimalDigit '_'*)+ SIGNED_TYPE);

Unsigned_literal: ('-'? ( DIGIT '_'*)+ UNSIGNED_TYPE);
Field_literal: ('-'? ( DecimalDigit '_'*)+ FIELD_TYPE);

Group_literal: ( '-'? ( DecimalDigit '_'*)+ GROUP_TYPE);

Scalar_literal: ( '-')? ( DecimalDigit '_'*)+ SCALAR_TYPE;
integer_literal: Signed_literal | Unsigned_literal;

arithmetic_literal:
	integer_literal
	| Field_literal
	| Group_literal
	| Scalar_literal;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

BOOLEAN_LITERAL: 'true' | 'false';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

literal: arithmetic_literal | Addressliteral | BOOLEAN_LITERAL;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

operand:
	literal
	| register_access
	| program_id
	| 'group::GEN'
	| 'self.caller'
	| 'block.height';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;Ï

integer_type: UNSIGNED_TYPE | SIGNED_TYPE;

arithmetic_type:
	integer_type
	| FIELD_TYPE
	| GROUP_TYPE
	| SCALAR_TYPE;

literal_type:
	arithmetic_type
	| ADDRESS_TYPE
	| BOOLEAN_TYPE
	| STRING_TYPE;

plaintext_type: literal_type | identifier;

value_type: (plaintext_type '.constant')
	| (plaintext_type '.public')
	| (plaintext_type '.private')
	| (identifier '.record')
	| (locator '.record');

finalize_type: (plaintext_type '.public')
	| (identifier '.record')
	| (locator '.record');

entry_type:
	plaintext_type ('.constant' | '.public' | '.private');

register_type: (locator '.record')
	| (identifier '.record')
	| plaintext_type;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

import_1: 'import' program_id ';';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

mapping: 'mapping' identifier ':' mapping_key mapping_value;

mapping_key: 'key' identifier 'as' finalize_type ';';

mapping_value: 'value' identifier 'as' finalize_type ';';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

struct_1: 'struct' identifier ':' tuple+;

tuple: identifier 'as' plaintext_type ';';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

record:
	'record' identifier ':' 'owner' 'as' ADDRESS_TYPE (
		'.public'
		| '.private'
	) ';' ('gates' 'as' ('u64.public' | 'u64.private') ';')* entry+;

entry: identifier 'as' entry_type ';';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

cast_destination: register_type | 'group.x' | 'group.y';

unary: unarp_op ( operand) 'into' register;

binary: binary_op (( operand) (operand)) 'into' register;

ternary:
	Ternary_op (( operand) (operand) (operand)) 'into' register;

is_1: is_op operand operand 'into' register;

assert_1: assert_op operand operand;

commit:
	Commit_op operand operand 'into' register 'as' (
		ADDRESS_TYPE
		| FIELD_TYPE
		| GROUP_TYPE
	);

hash:
	Hash_op operand 'into' register 'as' (
		arithmetic_type
		| ADDRESS_TYPE
	);

cast: CAST_OP operand+ 'into' register 'as' cast_destination;

call:
	'call' (locator | identifier) (operand)* 'into' (register)+;

instruction:
	(
		unary
		| binary
		| ternary
		| is_1
		| assert_1
		| commit
		| hash
		| cast
		| call
	) ';';

contains:
	'contains' identifier '[' operand ']' 'into' register ';';

get: 'get' identifier '[' operand ']' 'into' register ';';

get_or_use:
	'get.or_use' identifier '[' operand ']' operand 'into' register ';';

set: 'set' operand 'into' identifier '[' operand ']' ';';

remove: 'remove' identifier '[' operand ']' ';';

random:
	'rand.chacha' (((( operand) ( operand)) | ( operand)?)) 'into' register 'as' literal_type ';';

label: identifier;

position: 'position' label ';';

branch: BRANCH_OP operand operand label ';';

command:
	contains
	| get
	| get_or_use
	| set
	| remove
	| random
	| position
	| branch
	| instruction;

finalize_command: 'finalize' ( operand)* ';';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

closure:
	'closure' identifier ':' closure_input* instruction+ closure_output*;

closure_input: 'input' register 'as' register_type ';';

closure_output: 'output' operand 'as' register_type ';';

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

function:
	'function' identifier ':' function_input* instruction* function_output* (
		finalize_command finalize
	)?;

function_input: 'input' register 'as' value_type ';';

function_output: 'output' operand 'as' value_type ';';

finalize:
	'finalize' identifier ':' finalize_input* command+ finalize_output*;

finalize_input: 'input' register 'as' finalize_type ';';

finalize_output: 'output' operand 'as' finalize_type ';';

sourceUnit:
	import_1*
	| 'program' program_id ';' (
		mapping
		| struct_1
		| record
		| closure
		| function
	)+ EOF;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
WS: [ \t\r\n\u000C]+ -> skip;
COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);