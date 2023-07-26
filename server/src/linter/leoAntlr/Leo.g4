// The Leo library is free software: you can redistribute it and/or modify it under the terms of the
// GNU General Public License as published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// The Leo library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
// without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along with the Leo library. If
// not, see <https://www.gnu.org/licenses/>.

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// This file specifies the grammar of Leo in the ABNF notation, which is defined in: - RFC 5234
// (https://www.rfc-editor.org/rfc/rfc5234) - RFC 7405 (https://www.rfc-editor.org/rfc/rfc7405)

// Leo files are written in Unicode, encoded in UTF-8. The grammar in this file applies to the
// Unicode scalar values that result from the UTF-8 decoding of the files.

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// Lexical Grammar ---------------
grammar Leo;

// anything but <LF> and <CR>

THEN: 'then';
Identifier: LOWERCASE_LETTER+;
Digit: DECIMAL_DIGIT+;

fragment LOWERCASE_LETTER: [a-zA-Z0-9_]; // a-z
fragment DECIMAL_DIGIT: [0-9]; // 0-9

letter: Identifier;
bhp: ('BHP256' | 'BHP512' | 'BHP768' | 'BHP1024') '::';
pedersen: ('Pedersen64' | 'Pedersen128') '::';
poseidon: ('Poseidon2' | 'Poseidon4' | 'Poseidon8') '::';
identifier: letter ( letter | Digit | '_')*;
// but not a keyword or a boolean literal or aleo1...

numeral: Digit+;

unsigned_literal: numeral UNSIGNED_TYPE;

signed_literal: numeral SIGNED_TYPE;

field_literal: numeral 'field';

product_group_literal: numeral 'group';

scalar_literal: numeral 'scalar';

BOOLEAN_LITERAL: 'true' | 'false';

address_literal: addr_identifier Identifier;
addr_identifier: 'aleo1';
integer_literal: unsigned_literal | signed_literal;

numeric_literal:
	integer_literal
	| field_literal
	| product_group_literal
	| scalar_literal;

atomic_literal:
	numeric_literal
	| BOOLEAN_LITERAL
	| address_literal;

annotation: '@' identifier;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// Syntactic Grammar -----------------

program_id: identifier '.' identifier;

locator: program_id '/' identifier;

UNSIGNED_TYPE: 'u8' | 'u16' | 'u32' | 'u64' | 'u128';

SIGNED_TYPE: 'i8' | 'i16' | 'i32' | 'i64' | 'i128';

integer_type: UNSIGNED_TYPE | SIGNED_TYPE;

FIELD_TYPE: 'field';

GROUP_TYPE: 'group';

SCALAR_TYPE: 'scalar';

arithmetic_type:
	integer_type
	| FIELD_TYPE
	| GROUP_TYPE
	| SCALAR_TYPE;

BOOLEAN_TYPE: 'bool';

ADDRESS_TYPE: 'address';

named_primitive_type:
	BOOLEAN_TYPE
	| arithmetic_type
	| ADDRESS_TYPE;

primitive_type: named_primitive_type | '(' ')';

named_type:
	named_primitive_type
	| (identifier ( '.' 'record')?)
	| (locator ( '.' 'record')?);

tuple_type: '(' type ( ',' type)+ ( ',')? ')';

type: named_type | '(' ')' | tuple_type;

group_coordinate: ( ( '-')? numeral) | '+' | '-' | '_';

affine_group_literal:
	'(' group_coordinate ',' group_coordinate ')group';

literal: atomic_literal | affine_group_literal;

group_literal: product_group_literal | affine_group_literal;

primary_expression:
	literal
	| variable
	| associated_constant
	| ('(' expression ')')
	| free_function_call
	| associated_function_call
	| '(' ')'
	| tuple_expression
	| struct_expression
	| SELF_CALLER
	| BLOCK_HEIGHT;

variable: identifier;

associated_constant: named_type (':' ':') identifier;

free_function_call: (identifier function_arguments)
	| (locator function_arguments);

associated_function_call:
	named_type (':' ':') identifier function_arguments;

function_arguments:
	'(' (expression ( ',' expression)* ( ',')?) ')'
	| '(' ')';

tuple_expression: '(' expression ( ',' expression)+ ( ',')? ')';

struct_expression:
	identifier '{' struct_component_initializer (
		',' struct_component_initializer
	)* (',')? '}';

struct_component_initializer:
	identifier
	| (identifier ':' expression);

SELF_CALLER: 'self' '.' 'caller';

BLOCK_HEIGHT: 'block' '.' 'height';

postfix_expression:
	primary_expression
	| useMapping
	| chacha
	| associatedFunctionCall
	| tuple_component_expression
	| struct_component_expression
	| method_call;

tuple_component_expression: identifier '.' numeral;

struct_component_expression: identifier ('.' identifier)+;

method_call: identifier ('.' identifier)+ function_arguments;

expression:
	postfix_expression
	| ('!' | '~') expression
	| expression '**' expression
	| expression ('*' | '/' | '%') expression
	| expression ('+' | '-') expression
	| expression ('<<' | '>>') expression
	| expression '&' expression
	| expression '|' expression
	| expression '^' expression
	| expression ('<' | '>' | '<=' | '>=') expression
	| expression ('==' | '!=') expression
	| expression '&&' expression
	| expression '||' expression
	| expression '?' expression ':' expression
	| expression (
		'='
		| '+='
		| '-='
		| '*='
		| '/='
		| '%='
		| '**='
		| '<<='
		| '>>='
		| '&='
		| '|='
		| '^='
		| '&&='
		| '||='
	) expression
	| primary_expression;
mappingAttributes: 'get_or_use' | 'set' | 'get';
useMapping: 'Mapping::' mappingAttributes function_arguments;
chacha: 'ChaCha' '::' identifier function_arguments;
associatedFunctionCall:
	(bhp | pedersen | poseidon) identifier function_arguments;
statement:
	useMapping
	| expression_statement
	| variable_declaration
	| conditional_statement
	| loop_statement
	| console_statement
	| return_statement
	| block;

block: '{' statement* '}';

return_statement:
	'return' expression* (THEN 'finalize' function_arguments)? ';';

expression_statement: expression ';';

variable_declaration:
	'let' identifier_or_identifiers ':' type '=' expression ';';

identifier_or_identifiers:
	identifier
	| ('(' identifier ( ',' identifier)+ ( ',')? ')');

branch: 'if' expression block;

conditional_statement:
	branch
	| (branch 'else' block)
	| (branch 'else' conditional_statement);

loop_statement:
	'for' identifier ':' type 'in' expression ('.' '.') ('=')? expression block;

console_statement: ('console' '.')? console_call ';';

console_call:
	assert_call
	| assert_equal_call
	| assert_not_equal_call;

assert_call: 'assert' '(' expression ')';

assert_equal_call:
	'assert_eq' '(' expression ',' expression (',')? ')';

assert_not_equal_call:
	'assert_neq' '(' expression ',' expression (',')? ')';

function_declaration:
	annotation* 'function' identifier '(' (function_parameters)? ')' (
		('-' '>') type
	)? block;

function_parameters:
	function_parameter (',' function_parameter)* (',')?;

function_parameter: ('public' | 'private' | 'constant')? identifier ':' type;

inline_declaration:
	annotation* 'inline' identifier '(' (function_parameters)? ')' (
		('-' '>') type
	)? block;

transition_declaration:
	annotation* 'transition' identifier '(' (function_parameters)? ')' (
		('-' '>') ('public' | 'private' | 'constant')? type
	)? block (finalizer)?;

finalizer:
	'finalize' identifier '(' (function_parameters)? ')' (
		('-' '>') ('public' | 'private' | 'constant')? type
	)? block;

struct_declaration:
	'struct' identifier '{' struct_component_declarations '}';

struct_component_declarations:
	struct_component_declaration (
		',' struct_component_declaration
	)* (',')?;

struct_component_declaration:
	('public' | 'private' | 'constant')? identifier ':' type;

record_declaration:
	'record' identifier '{' struct_component_declarations '}';

mapping_declaration:
	'mapping' identifier ':' type ('=' '>') type ';';

program_item:
	function_declaration
	| inline_declaration
	| transition_declaration
	| struct_declaration
	| record_declaration
	| mapping_declaration;

program_declaration: 'program' program_id '{' program_item* '}';

import_declaration: 'import' program_id ';';

sourceUnit: import_declaration* program_declaration;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// Input Grammar -------------

input_type: type;

input_expression: expression;

input_item: identifier ':' input_type '=' input_expression ';';

INPUT_TITLE: '[' ( 'public' | 'private' | 'constant') ']';

input_section: INPUT_TITLE input_item*;

input_file: input_section*;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// Output Grammar --------------

output_expression: expression;

output_item: output_expression ';';

OUTPUT_TITLE: '[' 'output' ']';

output_section: OUTPUT_TITLE output_item;

output_file: output_section;
WS: [ \t\r\n\u000C]+ -> skip;
COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);