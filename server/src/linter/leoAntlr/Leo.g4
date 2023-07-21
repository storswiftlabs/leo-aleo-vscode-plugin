grammar Leo;

sourceUnit: importDeclaration* programDeclaration EOF;
programId: identifier '.' identifier;

locator: programId '/' identifier;
importDeclaration: 'import' programId ';';

programDeclaration: 'program' programId '{' ( programItem)* '}';
programItem:
	structDeclaration
	| recordDeclaration
	| mappingDeclaration
	| functionDeclaration
	| inlineDeclaration
	| transitionDeclaration;

Identifier: IdentifierStart IdentifierPart*;
fragment IdentifierStart: [a-zA-Z$_];
fragment IdentifierPart: [a-zA-Z0-9$_];
fragment DecimalDigit: [0-9]+;

UnsignedType: 'u8' | 'u16' | 'u32' | 'u64' | 'u128';
SignedType: 'i8' | 'i16' | 'i32' | 'i64' | 'i128';

identifier: Identifier;

// token: 
annotation: '@' Identifier;

// integerType: UnsignedType | SignedType;
integerType: UnsignedType | SignedType;

FieldType: 'field';

GroupType: 'group';

ScalarType: 'scalar';
arithmeticType:
	integerType
	| FieldType
	| GroupType
	| ScalarType;
BooleanType: 'bool';

AddressType: 'address';

namedPrimitiveType: BooleanType | arithmeticType | AddressType;

unitType: '(" ")';

primitiveType: namedPrimitiveType | unitType;

namedType:
	namedPrimitiveType
	| identifier ('.' 'record')?
	| locator ('.' 'record')?;

tupleType: '(' type ( ',' type)* ','? ')';
userDefinedTypeName: identifier ( '.' identifier)*;
type: namedType | unitType | tupleType | userDefinedTypeName;

Numeral: DecimalDigit;
Nnsignedliteral:
	DecimalDigit ('u8' | 'u16' | 'u32' | 'u64' | 'u128');

Signedliteral:
	DecimalDigit ('i8' | 'i16' | 'i32' | 'i64' | 'i128');

Fieldliteral: DecimalDigit 'field';

ProductGroupliteral: DecimalDigit 'group';

Scalarliteral: DecimalDigit 'scalar';

Booleanliteral: 'true' | 'false';
// FIXME: 限制字符长度为58
Addressliteral: 'aleo1' Identifier;

integerliteral: Nnsignedliteral | Signedliteral;

numericliteral:
	integerliteral
	| Fieldliteral
	| ProductGroupliteral
	| Scalarliteral;
atomicliteral: numericliteral | Booleanliteral | Addressliteral;

fragment GroupCoordinate: ( ','? DecimalDigit) | '+' | '-' | '_';

AffineGroupliteral:
	'(' GroupCoordinate ',' GroupCoordinate ')group';

literal: atomicliteral | AffineGroupliteral;

groupliteral: ProductGroupliteral | AffineGroupliteral;

primaryExpression:
	literal
	| variable
	| associatedConstant
	| '(' expression ')'
	| freeFunctionCall
	| associatedFunctionCall
	| unitExpression
	| tupleExpression
	| structExpression
	| selfCaller
	| blockHeight;
variable: identifier;

associatedConstant: namedType '::' identifier;

freeFunctionCall:
	identifier functionArguments
	| locator functionArguments;

associatedFunctionCall:
	(
		'BHP' ('256' | '512' | '768' | '1024')
		| 'Pedersen' ('64' | '128')
		| 'Poseidon8' ('2' | '4' | '8')
		| namedType
	) '::' identifier functionArguments;

functionArguments: '(' (expression (',' expression)*)? ')';

unitExpression: '(' ')';

tupleExpression: '(' expression (',' expression)* ','? ')';

structExpression:
	identifier '{' structComponentInitializer (
		',' structComponentInitializer
	)* ','? '}';

structComponentInitializer:
	identifier
	| identifier ':' expression;

selfCaller: 'self' '.' 'caller';

blockHeight: 'block' '.' 'height';

postfixExpression:
	primaryExpression
	| useMapping
	| tupleComponentExpression
	| structComponentExpression
	| methodCall;

tupleComponentExpression: identifier '.' Numeral;

structComponentExpression: identifier '.' identifier;

methodCall: identifier '.' identifier functionArguments;
//FIXME:
unaryExpression:
	postfixExpression
	| '!' unaryExpression
	| '-' unaryExpression;

exponentialExpression:
	unaryExpression
	| unaryExpression '**' exponentialExpression;

multiplicativeExpression:
	exponentialExpression
	| multiplicativeExpression '*' exponentialExpression
	| multiplicativeExpression '/' exponentialExpression
	| multiplicativeExpression '%' exponentialExpression;

additiveExpression:
	multiplicativeExpression
	| additiveExpression '+' multiplicativeExpression
	| additiveExpression '-' multiplicativeExpression;
shiftExpression:
	additiveExpression
	| shiftExpression '<<' additiveExpression
	| shiftExpression '>>' additiveExpression;
conjunctiveExpression:
	shiftExpression
	| conjunctiveExpression '|' shiftExpression;
disjunctiveExpression:
	conjunctiveExpression
	| disjunctiveExpression '|' conjunctiveExpression;
exclusiveDisjunctiveExpression:
	disjunctiveExpression
	| exclusiveDisjunctiveExpression '^' disjunctiveExpression;
orderingExpression:
	exclusiveDisjunctiveExpression
	| exclusiveDisjunctiveExpression '<' exclusiveDisjunctiveExpression
	| exclusiveDisjunctiveExpression '>' exclusiveDisjunctiveExpression
	| exclusiveDisjunctiveExpression '<=' exclusiveDisjunctiveExpression
	| exclusiveDisjunctiveExpression '>=' exclusiveDisjunctiveExpression;
equalityExpression:
	orderingExpression
	| orderingExpression '==' orderingExpression
	| orderingExpression '!=' orderingExpression;
conditionalConjunctiveExpression:
	equalityExpression
	| conditionalConjunctiveExpression '&&' equalityExpression;
conditionalDisjunctiveExpression:
	conditionalConjunctiveExpression
	| conditionalDisjunctiveExpression '||' conditionalConjunctiveExpression;
binaryExpression: conditionalDisjunctiveExpression;
conditionalTernaryExpression:
	binaryExpression
	| binaryExpression '?' expression ':' expression;
expression: conditionalTernaryExpression;

loopStatement:
	'for' identifier ':' type 'in' expression
	 '..' '='? expression block;
mappingAttributes: 'get_or_use' | 'set' | 'get';
// useMapping: 'Mapping::' mappingAttributes functionArguments ';';
useMapping: 'Mapping::' mappingAttributes functionArguments;
statement:
	useMapping
	| expressionStatement
	| variableDeclaration
	| conditionalStatement
	| loopStatement
	| assignmentStatement
	| consoleStatement
	| block
	| returnStatement;
block: '{' statement* '}';
returnStatement:
	'return' expression? ('then' 'finalize' functionArguments)? ';';
expressionStatement: expression ';';
variableDeclaration:
	'let' identifierOrIdentifiers (':' type)? '=' expression ';';

identifierOrIdentifiers:
	identifier
	| '(' identifier (',' identifier)? ','? ')';
branch: 'if' expression block;

conditionalStatement:
	branch
	| branch 'else' block
	| branch 'else' conditionalStatement;

assignmentOperator:
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
	| '||=';
assignmentStatement:
	expression assignmentOperator expression ';';
consoleStatement: consoleCall ';';
consoleCall: assertCall | assertEqualCall | assertNotEqualCall;
assertCall: 'assert' '(' expression ')';
// FIXME: 
assertEqualCall:
	'assert_eq' '(' expression ',' expression ','? ')';
assertNotEqualCall:
	'assert_neq' '(' expression ',' expression ','? ')';
functionDeclaration:
	annotation* 'function' identifier '(' functionParameters? ')' (
		'->' type
	)? block;
functionParameters:
	functionParameter (',' functionParameter)* ','?;
functionParameter: ('public' | 'private' | 'constant')? identifier ':' type;

inlineDeclaration:
	annotation* 'inline' identifier '(' functionParameters? ')' (
		'->' type
	)? block;
transitionDeclaration:
	annotation* 'transition' identifier '(' functionParameters? ')' (
		'->' ('public' | 'private' | 'constant')? type
	)? block finalizer?;

finalizer:
	'finalize' identifier '(' functionParameters ')' (
		'->' ('public' | 'private' | 'constant') type
	)? block;
structDeclaration:
	'struct' identifier '{' structComponentDeclarations '}';

structComponentDeclarations:
	structComponentDeclaration (',' structComponentDeclaration)* ','?;
structComponentDeclaration: ('public' | 'private' | 'constant')? identifier ':' type;
recordDeclaration:
	'record' identifier '{' structComponentDeclarations '}';

mappingDeclaration: 'mapping' identifier ':' type '=>' type ';';

file: importDeclaration programDeclaration;
//  Input Grammar
inputType: type;
inputExpression: expression;

inputItem: identifier ':' inputType '=' inputExpression ';';

inputTitle: '[' ( 'public' | 'private' | 'constant') ']';

inputSection: inputTitle inputItem;

inputFile: inputSection;
// Output Grammar
outputExpression: expression;
outputItem: outputExpression ';';
outputTitle: '[' 'output' ']';
outputSection: outputTitle outputItem;
outputFile: outputSection;

COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);