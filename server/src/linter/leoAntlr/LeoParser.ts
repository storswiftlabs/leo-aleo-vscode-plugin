// Generated from Leo.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LeoListener from "./LeoListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LeoParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly Identifier = 94;
	public static readonly UnsignedType = 95;
	public static readonly SignedType = 96;
	public static readonly FieldType = 97;
	public static readonly GroupType = 98;
	public static readonly ScalarType = 99;
	public static readonly BooleanType = 100;
	public static readonly AddressType = 101;
	public static readonly Numeral = 102;
	public static readonly Nnsignedliteral = 103;
	public static readonly Signedliteral = 104;
	public static readonly Fieldliteral = 105;
	public static readonly ProductGroupliteral = 106;
	public static readonly Scalarliteral = 107;
	public static readonly Booleanliteral = 108;
	public static readonly Addressliteral = 109;
	public static readonly AffineGroupliteral = 110;
	public static readonly COMMENT = 111;
	public static readonly LINE_COMMENT = 112;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_programId = 1;
	public static readonly RULE_locator = 2;
	public static readonly RULE_importDeclaration = 3;
	public static readonly RULE_programDeclaration = 4;
	public static readonly RULE_programItem = 5;
	public static readonly RULE_identifier = 6;
	public static readonly RULE_annotation = 7;
	public static readonly RULE_integerType = 8;
	public static readonly RULE_arithmeticType = 9;
	public static readonly RULE_namedPrimitiveType = 10;
	public static readonly RULE_unitType = 11;
	public static readonly RULE_primitiveType = 12;
	public static readonly RULE_namedType = 13;
	public static readonly RULE_tupleType = 14;
	public static readonly RULE_userDefinedTypeName = 15;
	public static readonly RULE_type = 16;
	public static readonly RULE_integerliteral = 17;
	public static readonly RULE_numericliteral = 18;
	public static readonly RULE_atomicliteral = 19;
	public static readonly RULE_literal = 20;
	public static readonly RULE_groupliteral = 21;
	public static readonly RULE_primaryExpression = 22;
	public static readonly RULE_variable = 23;
	public static readonly RULE_associatedConstant = 24;
	public static readonly RULE_freeFunctionCall = 25;
	public static readonly RULE_associatedFunctionCall = 26;
	public static readonly RULE_functionArguments = 27;
	public static readonly RULE_unitExpression = 28;
	public static readonly RULE_tupleExpression = 29;
	public static readonly RULE_structExpression = 30;
	public static readonly RULE_structComponentInitializer = 31;
	public static readonly RULE_selfCaller = 32;
	public static readonly RULE_blockHeight = 33;
	public static readonly RULE_postfixExpression = 34;
	public static readonly RULE_tupleComponentExpression = 35;
	public static readonly RULE_structComponentExpression = 36;
	public static readonly RULE_methodCall = 37;
	public static readonly RULE_unaryExpression = 38;
	public static readonly RULE_exponentialExpression = 39;
	public static readonly RULE_multiplicativeExpression = 40;
	public static readonly RULE_additiveExpression = 41;
	public static readonly RULE_shiftExpression = 42;
	public static readonly RULE_conjunctiveExpression = 43;
	public static readonly RULE_disjunctiveExpression = 44;
	public static readonly RULE_exclusiveDisjunctiveExpression = 45;
	public static readonly RULE_orderingExpression = 46;
	public static readonly RULE_equalityExpression = 47;
	public static readonly RULE_conditionalConjunctiveExpression = 48;
	public static readonly RULE_conditionalDisjunctiveExpression = 49;
	public static readonly RULE_binaryExpression = 50;
	public static readonly RULE_conditionalTernaryExpression = 51;
	public static readonly RULE_expression = 52;
	public static readonly RULE_loopStatement = 53;
	public static readonly RULE_mappingAttributes = 54;
	public static readonly RULE_useMapping = 55;
	public static readonly RULE_statement = 56;
	public static readonly RULE_block = 57;
	public static readonly RULE_returnStatement = 58;
	public static readonly RULE_expressionStatement = 59;
	public static readonly RULE_variableDeclaration = 60;
	public static readonly RULE_identifierOrIdentifiers = 61;
	public static readonly RULE_branch = 62;
	public static readonly RULE_conditionalStatement = 63;
	public static readonly RULE_assignmentOperator = 64;
	public static readonly RULE_assignmentStatement = 65;
	public static readonly RULE_consoleStatement = 66;
	public static readonly RULE_consoleCall = 67;
	public static readonly RULE_assertCall = 68;
	public static readonly RULE_assertEqualCall = 69;
	public static readonly RULE_assertNotEqualCall = 70;
	public static readonly RULE_functionDeclaration = 71;
	public static readonly RULE_functionParameters = 72;
	public static readonly RULE_functionParameter = 73;
	public static readonly RULE_inlineDeclaration = 74;
	public static readonly RULE_transitionDeclaration = 75;
	public static readonly RULE_finalizer = 76;
	public static readonly RULE_structDeclaration = 77;
	public static readonly RULE_structComponentDeclarations = 78;
	public static readonly RULE_structComponentDeclaration = 79;
	public static readonly RULE_recordDeclaration = 80;
	public static readonly RULE_mappingDeclaration = 81;
	public static readonly RULE_file = 82;
	public static readonly RULE_inputType = 83;
	public static readonly RULE_inputExpression = 84;
	public static readonly RULE_inputItem = 85;
	public static readonly RULE_inputTitle = 86;
	public static readonly RULE_inputSection = 87;
	public static readonly RULE_inputFile = 88;
	public static readonly RULE_outputExpression = 89;
	public static readonly RULE_outputItem = 90;
	public static readonly RULE_outputTitle = 91;
	public static readonly RULE_outputSection = 92;
	public static readonly RULE_outputFile = 93;
	public static readonly literalNames: (string | null)[] = [ null, "'.'", 
                                                            "'/'", "'import'", 
                                                            "';'", "'program'", 
                                                            "'{'", "'}'", 
                                                            "'@'", "'(\" \")'", 
                                                            "'record'", 
                                                            "'('", "','", 
                                                            "')'", "'::'", 
                                                            "'BHP'", "'256'", 
                                                            "'512'", "'768'", 
                                                            "'1024'", "'Pedersen'", 
                                                            "'64'", "'128'", 
                                                            "'Poseidon8'", 
                                                            "'2'", "'4'", 
                                                            "'8'", "':'", 
                                                            "'self'", "'caller'", 
                                                            "'block'", "'height'", 
                                                            "'!'", "'-'", 
                                                            "'**'", "'*'", 
                                                            "'%'", "'+'", 
                                                            "'<<'", "'>>'", 
                                                            "'|'", "'^'", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'=='", "'!='", 
                                                            "'&&'", "'||'", 
                                                            "'?'", "'for'", 
                                                            "'in'", "'..'", 
                                                            "'='", "'get_or_use'", 
                                                            "'set'", "'get'", 
                                                            "'Mapping::'", 
                                                            "'return'", 
                                                            "'then'", "'finalize'", 
                                                            "'let'", "'if'", 
                                                            "'else'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'**='", "'<<='", 
                                                            "'>>='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'&&='", "'||='", 
                                                            "'assert'", 
                                                            "'assert_eq'", 
                                                            "'assert_neq'", 
                                                            "'function'", 
                                                            "'->'", "'public'", 
                                                            "'private'", 
                                                            "'constant'", 
                                                            "'inline'", 
                                                            "'transition'", 
                                                            "'struct'", 
                                                            "'mapping'", 
                                                            "'=>'", "'['", 
                                                            "']'", "'output'", 
                                                            null, null, 
                                                            null, "'field'", 
                                                            "'group'", "'scalar'", 
                                                            "'bool'", "'address'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "Identifier", 
                                                             "UnsignedType", 
                                                             "SignedType", 
                                                             "FieldType", 
                                                             "GroupType", 
                                                             "ScalarType", 
                                                             "BooleanType", 
                                                             "AddressType", 
                                                             "Numeral", 
                                                             "Nnsignedliteral", 
                                                             "Signedliteral", 
                                                             "Fieldliteral", 
                                                             "ProductGroupliteral", 
                                                             "Scalarliteral", 
                                                             "Booleanliteral", 
                                                             "Addressliteral", 
                                                             "AffineGroupliteral", 
                                                             "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "programId", "locator", "importDeclaration", "programDeclaration", 
		"programItem", "identifier", "annotation", "integerType", "arithmeticType", 
		"namedPrimitiveType", "unitType", "primitiveType", "namedType", "tupleType", 
		"userDefinedTypeName", "type", "integerliteral", "numericliteral", "atomicliteral", 
		"literal", "groupliteral", "primaryExpression", "variable", "associatedConstant", 
		"freeFunctionCall", "associatedFunctionCall", "functionArguments", "unitExpression", 
		"tupleExpression", "structExpression", "structComponentInitializer", "selfCaller", 
		"blockHeight", "postfixExpression", "tupleComponentExpression", "structComponentExpression", 
		"methodCall", "unaryExpression", "exponentialExpression", "multiplicativeExpression", 
		"additiveExpression", "shiftExpression", "conjunctiveExpression", "disjunctiveExpression", 
		"exclusiveDisjunctiveExpression", "orderingExpression", "equalityExpression", 
		"conditionalConjunctiveExpression", "conditionalDisjunctiveExpression", 
		"binaryExpression", "conditionalTernaryExpression", "expression", "loopStatement", 
		"mappingAttributes", "useMapping", "statement", "block", "returnStatement", 
		"expressionStatement", "variableDeclaration", "identifierOrIdentifiers", 
		"branch", "conditionalStatement", "assignmentOperator", "assignmentStatement", 
		"consoleStatement", "consoleCall", "assertCall", "assertEqualCall", "assertNotEqualCall", 
		"functionDeclaration", "functionParameters", "functionParameter", "inlineDeclaration", 
		"transitionDeclaration", "finalizer", "structDeclaration", "structComponentDeclarations", 
		"structComponentDeclaration", "recordDeclaration", "mappingDeclaration", 
		"file", "inputType", "inputExpression", "inputItem", "inputTitle", "inputSection", 
		"inputFile", "outputExpression", "outputItem", "outputTitle", "outputSection", 
		"outputFile",
	];
	public get grammarFileName(): string { return "Leo.g4"; }
	public get literalNames(): (string | null)[] { return LeoParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LeoParser.symbolicNames; }
	public get ruleNames(): string[] { return LeoParser.ruleNames; }
	public get serializedATN(): number[] { return LeoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LeoParser._ATN, LeoParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let localctx: SourceUnitContext = new SourceUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LeoParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 188;
				this.importDeclaration();
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this.programDeclaration();
			this.state = 195;
			this.match(LeoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public programId(): ProgramIdContext {
		let localctx: ProgramIdContext = new ProgramIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LeoParser.RULE_programId);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.identifier();
			this.state = 198;
			this.match(LeoParser.T__0);
			this.state = 199;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public locator(): LocatorContext {
		let localctx: LocatorContext = new LocatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LeoParser.RULE_locator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.programId();
			this.state = 202;
			this.match(LeoParser.T__1);
			this.state = 203;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LeoParser.RULE_importDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this.match(LeoParser.T__2);
			this.state = 206;
			this.programId();
			this.state = 207;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public programDeclaration(): ProgramDeclarationContext {
		let localctx: ProgramDeclarationContext = new ProgramDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LeoParser.RULE_programDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 209;
			this.match(LeoParser.T__4);
			this.state = 210;
			this.programId();
			this.state = 211;
			this.match(LeoParser.T__5);
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8 || _la===10 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 481) !== 0)) {
				{
				{
				this.state = 212;
				this.programItem();
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 218;
			this.match(LeoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public programItem(): ProgramItemContext {
		let localctx: ProgramItemContext = new ProgramItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LeoParser.RULE_programItem);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 220;
				this.structDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 221;
				this.recordDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 222;
				this.mappingDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 223;
				this.functionDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 224;
				this.inlineDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 225;
				this.transitionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LeoParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.match(LeoParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LeoParser.RULE_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 230;
			this.match(LeoParser.T__7);
			this.state = 231;
			this.match(LeoParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerType(): IntegerTypeContext {
		let localctx: IntegerTypeContext = new IntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LeoParser.RULE_integerType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 233;
			_la = this._input.LA(1);
			if(!(_la===95 || _la===96)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arithmeticType(): ArithmeticTypeContext {
		let localctx: ArithmeticTypeContext = new ArithmeticTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LeoParser.RULE_arithmeticType);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this.integerType();
				}
				break;
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 236;
				this.match(LeoParser.FieldType);
				}
				break;
			case 98:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 237;
				this.match(LeoParser.GroupType);
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 238;
				this.match(LeoParser.ScalarType);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedPrimitiveType(): NamedPrimitiveTypeContext {
		let localctx: NamedPrimitiveTypeContext = new NamedPrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LeoParser.RULE_namedPrimitiveType);
		try {
			this.state = 244;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 100:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 241;
				this.match(LeoParser.BooleanType);
				}
				break;
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 242;
				this.arithmeticType();
				}
				break;
			case 101:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 243;
				this.match(LeoParser.AddressType);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unitType(): UnitTypeContext {
		let localctx: UnitTypeContext = new UnitTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LeoParser.RULE_unitType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.match(LeoParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LeoParser.RULE_primitiveType);
		try {
			this.state = 250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 248;
				this.namedPrimitiveType();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 249;
				this.unitType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedType(): NamedTypeContext {
		let localctx: NamedTypeContext = new NamedTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LeoParser.RULE_namedType);
		let _la: number;
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 252;
				this.namedPrimitiveType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 253;
				this.identifier();
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 254;
					this.match(LeoParser.T__0);
					this.state = 255;
					this.match(LeoParser.T__9);
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 258;
				this.locator();
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 259;
					this.match(LeoParser.T__0);
					this.state = 260;
					this.match(LeoParser.T__9);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let localctx: TupleTypeContext = new TupleTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LeoParser.RULE_tupleType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 265;
			this.match(LeoParser.T__10);
			this.state = 266;
			this.type_();
			this.state = 271;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 267;
					this.match(LeoParser.T__11);
					this.state = 268;
					this.type_();
					}
					}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 274;
				this.match(LeoParser.T__11);
				}
			}

			this.state = 277;
			this.match(LeoParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		let localctx: UserDefinedTypeNameContext = new UserDefinedTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LeoParser.RULE_userDefinedTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.identifier();
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 280;
				this.match(LeoParser.T__0);
				this.state = 281;
				this.identifier();
				}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LeoParser.RULE_type);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 287;
				this.namedType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 288;
				this.unitType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 289;
				this.tupleType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 290;
				this.userDefinedTypeName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerliteral(): IntegerliteralContext {
		let localctx: IntegerliteralContext = new IntegerliteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LeoParser.RULE_integerliteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			_la = this._input.LA(1);
			if(!(_la===103 || _la===104)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericliteral(): NumericliteralContext {
		let localctx: NumericliteralContext = new NumericliteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LeoParser.RULE_numericliteral);
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
			case 104:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 295;
				this.integerliteral();
				}
				break;
			case 105:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 296;
				this.match(LeoParser.Fieldliteral);
				}
				break;
			case 106:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 297;
				this.match(LeoParser.ProductGroupliteral);
				}
				break;
			case 107:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 298;
				this.match(LeoParser.Scalarliteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atomicliteral(): AtomicliteralContext {
		let localctx: AtomicliteralContext = new AtomicliteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LeoParser.RULE_atomicliteral);
		try {
			this.state = 304;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 301;
				this.numericliteral();
				}
				break;
			case 108:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 302;
				this.match(LeoParser.Booleanliteral);
				}
				break;
			case 109:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 303;
				this.match(LeoParser.Addressliteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LeoParser.RULE_literal);
		try {
			this.state = 308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 306;
				this.atomicliteral();
				}
				break;
			case 110:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 307;
				this.match(LeoParser.AffineGroupliteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupliteral(): GroupliteralContext {
		let localctx: GroupliteralContext = new GroupliteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LeoParser.RULE_groupliteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 310;
			_la = this._input.LA(1);
			if(!(_la===106 || _la===110)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LeoParser.RULE_primaryExpression);
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 312;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 313;
				this.variable();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 314;
				this.associatedConstant();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 315;
				this.match(LeoParser.T__10);
				this.state = 316;
				this.expression();
				this.state = 317;
				this.match(LeoParser.T__12);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 319;
				this.freeFunctionCall();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 320;
				this.associatedFunctionCall();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 321;
				this.unitExpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 322;
				this.tupleExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 323;
				this.structExpression();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 324;
				this.selfCaller();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 325;
				this.blockHeight();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let localctx: VariableContext = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, LeoParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public associatedConstant(): AssociatedConstantContext {
		let localctx: AssociatedConstantContext = new AssociatedConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LeoParser.RULE_associatedConstant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.namedType();
			this.state = 331;
			this.match(LeoParser.T__13);
			this.state = 332;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public freeFunctionCall(): FreeFunctionCallContext {
		let localctx: FreeFunctionCallContext = new FreeFunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LeoParser.RULE_freeFunctionCall);
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 334;
				this.identifier();
				this.state = 335;
				this.functionArguments();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 337;
				this.locator();
				this.state = 338;
				this.functionArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public associatedFunctionCall(): AssociatedFunctionCallContext {
		let localctx: AssociatedFunctionCallContext = new AssociatedFunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LeoParser.RULE_associatedFunctionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				{
				this.state = 342;
				this.match(LeoParser.T__14);
				this.state = 343;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 983040) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 20:
				{
				this.state = 344;
				this.match(LeoParser.T__19);
				this.state = 345;
				_la = this._input.LA(1);
				if(!(_la===21 || _la===22)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 23:
				{
				this.state = 346;
				this.match(LeoParser.T__22);
				this.state = 347;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
				{
				this.state = 348;
				this.namedType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 351;
			this.match(LeoParser.T__13);
			this.state = 352;
			this.identifier();
			this.state = 353;
			this.functionArguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionArguments(): FunctionArgumentsContext {
		let localctx: FunctionArgumentsContext = new FunctionArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LeoParser.RULE_functionArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 355;
			this.match(LeoParser.T__10);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1351649280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108867) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 130815) !== 0)) {
				{
				this.state = 356;
				this.expression();
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 357;
					this.match(LeoParser.T__11);
					this.state = 358;
					this.expression();
					}
					}
					this.state = 363;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 366;
			this.match(LeoParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unitExpression(): UnitExpressionContext {
		let localctx: UnitExpressionContext = new UnitExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LeoParser.RULE_unitExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 368;
			this.match(LeoParser.T__10);
			this.state = 369;
			this.match(LeoParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let localctx: TupleExpressionContext = new TupleExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LeoParser.RULE_tupleExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 371;
			this.match(LeoParser.T__10);
			this.state = 372;
			this.expression();
			this.state = 377;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 373;
					this.match(LeoParser.T__11);
					this.state = 374;
					this.expression();
					}
					}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 380;
				this.match(LeoParser.T__11);
				}
			}

			this.state = 383;
			this.match(LeoParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structExpression(): StructExpressionContext {
		let localctx: StructExpressionContext = new StructExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, LeoParser.RULE_structExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 385;
			this.identifier();
			this.state = 386;
			this.match(LeoParser.T__5);
			this.state = 387;
			this.structComponentInitializer();
			this.state = 392;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 388;
					this.match(LeoParser.T__11);
					this.state = 389;
					this.structComponentInitializer();
					}
					}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 395;
				this.match(LeoParser.T__11);
				}
			}

			this.state = 398;
			this.match(LeoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structComponentInitializer(): StructComponentInitializerContext {
		let localctx: StructComponentInitializerContext = new StructComponentInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, LeoParser.RULE_structComponentInitializer);
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 400;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 401;
				this.identifier();
				this.state = 402;
				this.match(LeoParser.T__26);
				this.state = 403;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selfCaller(): SelfCallerContext {
		let localctx: SelfCallerContext = new SelfCallerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, LeoParser.RULE_selfCaller);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.match(LeoParser.T__27);
			this.state = 408;
			this.match(LeoParser.T__0);
			this.state = 409;
			this.match(LeoParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockHeight(): BlockHeightContext {
		let localctx: BlockHeightContext = new BlockHeightContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LeoParser.RULE_blockHeight);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 411;
			this.match(LeoParser.T__29);
			this.state = 412;
			this.match(LeoParser.T__0);
			this.state = 413;
			this.match(LeoParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LeoParser.RULE_postfixExpression);
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 415;
				this.primaryExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 416;
				this.useMapping();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 417;
				this.tupleComponentExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 418;
				this.structComponentExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 419;
				this.methodCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tupleComponentExpression(): TupleComponentExpressionContext {
		let localctx: TupleComponentExpressionContext = new TupleComponentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, LeoParser.RULE_tupleComponentExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 422;
			this.identifier();
			this.state = 423;
			this.match(LeoParser.T__0);
			this.state = 424;
			this.match(LeoParser.Numeral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structComponentExpression(): StructComponentExpressionContext {
		let localctx: StructComponentExpressionContext = new StructComponentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, LeoParser.RULE_structComponentExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 426;
			this.identifier();
			this.state = 427;
			this.match(LeoParser.T__0);
			this.state = 428;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let localctx: MethodCallContext = new MethodCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, LeoParser.RULE_methodCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 430;
			this.identifier();
			this.state = 431;
			this.match(LeoParser.T__0);
			this.state = 432;
			this.identifier();
			this.state = 433;
			this.functionArguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, LeoParser.RULE_unaryExpression);
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
			case 15:
			case 20:
			case 23:
			case 28:
			case 30:
			case 58:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 435;
				this.postfixExpression();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 436;
				this.match(LeoParser.T__31);
				this.state = 437;
				this.unaryExpression();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 438;
				this.match(LeoParser.T__32);
				this.state = 439;
				this.unaryExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exponentialExpression(): ExponentialExpressionContext {
		let localctx: ExponentialExpressionContext = new ExponentialExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, LeoParser.RULE_exponentialExpression);
		try {
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 442;
				this.unaryExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 443;
				this.unaryExpression();
				this.state = 444;
				this.match(LeoParser.T__33);
				this.state = 445;
				this.exponentialExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = localctx;
		let _startState: number = 80;
		this.enterRecursionRule(localctx, 80, LeoParser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 450;
			this.exponentialExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 463;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 461;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_multiplicativeExpression);
						this.state = 452;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 453;
						this.match(LeoParser.T__34);
						this.state = 454;
						this.exponentialExpression();
						}
						break;
					case 2:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_multiplicativeExpression);
						this.state = 455;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 456;
						this.match(LeoParser.T__1);
						this.state = 457;
						this.exponentialExpression();
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_multiplicativeExpression);
						this.state = 458;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 459;
						this.match(LeoParser.T__35);
						this.state = 460;
						this.exponentialExpression();
						}
						break;
					}
					}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = localctx;
		let _startState: number = 82;
		this.enterRecursionRule(localctx, 82, LeoParser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 467;
			this.multiplicativeExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 477;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 475;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_additiveExpression);
						this.state = 469;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 470;
						this.match(LeoParser.T__36);
						this.state = 471;
						this.multiplicativeExpression(0);
						}
						break;
					case 2:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_additiveExpression);
						this.state = 472;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 473;
						this.match(LeoParser.T__32);
						this.state = 474;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ShiftExpressionContext = new ShiftExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = localctx;
		let _startState: number = 84;
		this.enterRecursionRule(localctx, 84, LeoParser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 481;
			this.additiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 491;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 489;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_shiftExpression);
						this.state = 483;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 484;
						this.match(LeoParser.T__37);
						this.state = 485;
						this.additiveExpression(0);
						}
						break;
					case 2:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_shiftExpression);
						this.state = 486;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 487;
						this.match(LeoParser.T__38);
						this.state = 488;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 493;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public conjunctiveExpression(): ConjunctiveExpressionContext;
	public conjunctiveExpression(_p: number): ConjunctiveExpressionContext;
	// @RuleVersion(0)
	public conjunctiveExpression(_p?: number): ConjunctiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConjunctiveExpressionContext = new ConjunctiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ConjunctiveExpressionContext = localctx;
		let _startState: number = 86;
		this.enterRecursionRule(localctx, 86, LeoParser.RULE_conjunctiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 495;
			this.shiftExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 502;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConjunctiveExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_conjunctiveExpression);
					this.state = 497;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 498;
					this.match(LeoParser.T__39);
					this.state = 499;
					this.shiftExpression(0);
					}
					}
				}
				this.state = 504;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public disjunctiveExpression(): DisjunctiveExpressionContext;
	public disjunctiveExpression(_p: number): DisjunctiveExpressionContext;
	// @RuleVersion(0)
	public disjunctiveExpression(_p?: number): DisjunctiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: DisjunctiveExpressionContext = new DisjunctiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: DisjunctiveExpressionContext = localctx;
		let _startState: number = 88;
		this.enterRecursionRule(localctx, 88, LeoParser.RULE_disjunctiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 506;
			this.conjunctiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 513;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new DisjunctiveExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_disjunctiveExpression);
					this.state = 508;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 509;
					this.match(LeoParser.T__39);
					this.state = 510;
					this.conjunctiveExpression(0);
					}
					}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public exclusiveDisjunctiveExpression(): ExclusiveDisjunctiveExpressionContext;
	public exclusiveDisjunctiveExpression(_p: number): ExclusiveDisjunctiveExpressionContext;
	// @RuleVersion(0)
	public exclusiveDisjunctiveExpression(_p?: number): ExclusiveDisjunctiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExclusiveDisjunctiveExpressionContext = new ExclusiveDisjunctiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExclusiveDisjunctiveExpressionContext = localctx;
		let _startState: number = 90;
		this.enterRecursionRule(localctx, 90, LeoParser.RULE_exclusiveDisjunctiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 517;
			this.disjunctiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 524;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ExclusiveDisjunctiveExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_exclusiveDisjunctiveExpression);
					this.state = 519;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 520;
					this.match(LeoParser.T__40);
					this.state = 521;
					this.disjunctiveExpression(0);
					}
					}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderingExpression(): OrderingExpressionContext {
		let localctx: OrderingExpressionContext = new OrderingExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, LeoParser.RULE_orderingExpression);
		try {
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 527;
				this.exclusiveDisjunctiveExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 528;
				this.exclusiveDisjunctiveExpression(0);
				this.state = 529;
				this.match(LeoParser.T__41);
				this.state = 530;
				this.exclusiveDisjunctiveExpression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 532;
				this.exclusiveDisjunctiveExpression(0);
				this.state = 533;
				this.match(LeoParser.T__42);
				this.state = 534;
				this.exclusiveDisjunctiveExpression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 536;
				this.exclusiveDisjunctiveExpression(0);
				this.state = 537;
				this.match(LeoParser.T__43);
				this.state = 538;
				this.exclusiveDisjunctiveExpression(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 540;
				this.exclusiveDisjunctiveExpression(0);
				this.state = 541;
				this.match(LeoParser.T__44);
				this.state = 542;
				this.exclusiveDisjunctiveExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, LeoParser.RULE_equalityExpression);
		try {
			this.state = 555;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 546;
				this.orderingExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 547;
				this.orderingExpression();
				this.state = 548;
				this.match(LeoParser.T__45);
				this.state = 549;
				this.orderingExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 551;
				this.orderingExpression();
				this.state = 552;
				this.match(LeoParser.T__46);
				this.state = 553;
				this.orderingExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public conditionalConjunctiveExpression(): ConditionalConjunctiveExpressionContext;
	public conditionalConjunctiveExpression(_p: number): ConditionalConjunctiveExpressionContext;
	// @RuleVersion(0)
	public conditionalConjunctiveExpression(_p?: number): ConditionalConjunctiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionalConjunctiveExpressionContext = new ConditionalConjunctiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionalConjunctiveExpressionContext = localctx;
		let _startState: number = 96;
		this.enterRecursionRule(localctx, 96, LeoParser.RULE_conditionalConjunctiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 558;
			this.equalityExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 565;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConditionalConjunctiveExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_conditionalConjunctiveExpression);
					this.state = 560;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 561;
					this.match(LeoParser.T__47);
					this.state = 562;
					this.equalityExpression();
					}
					}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public conditionalDisjunctiveExpression(): ConditionalDisjunctiveExpressionContext;
	public conditionalDisjunctiveExpression(_p: number): ConditionalDisjunctiveExpressionContext;
	// @RuleVersion(0)
	public conditionalDisjunctiveExpression(_p?: number): ConditionalDisjunctiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionalDisjunctiveExpressionContext = new ConditionalDisjunctiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionalDisjunctiveExpressionContext = localctx;
		let _startState: number = 98;
		this.enterRecursionRule(localctx, 98, LeoParser.RULE_conditionalDisjunctiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 569;
			this.conditionalConjunctiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 576;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConditionalDisjunctiveExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_conditionalDisjunctiveExpression);
					this.state = 571;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 572;
					this.match(LeoParser.T__48);
					this.state = 573;
					this.conditionalConjunctiveExpression(0);
					}
					}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public binaryExpression(): BinaryExpressionContext {
		let localctx: BinaryExpressionContext = new BinaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, LeoParser.RULE_binaryExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 579;
			this.conditionalDisjunctiveExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalTernaryExpression(): ConditionalTernaryExpressionContext {
		let localctx: ConditionalTernaryExpressionContext = new ConditionalTernaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, LeoParser.RULE_conditionalTernaryExpression);
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 581;
				this.binaryExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 582;
				this.binaryExpression();
				this.state = 583;
				this.match(LeoParser.T__49);
				this.state = 584;
				this.expression();
				this.state = 585;
				this.match(LeoParser.T__26);
				this.state = 586;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, LeoParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 590;
			this.conditionalTernaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let localctx: LoopStatementContext = new LoopStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, LeoParser.RULE_loopStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 592;
			this.match(LeoParser.T__50);
			this.state = 593;
			this.identifier();
			this.state = 594;
			this.match(LeoParser.T__26);
			this.state = 595;
			this.type_();
			this.state = 596;
			this.match(LeoParser.T__51);
			this.state = 597;
			this.expression();
			this.state = 598;
			this.match(LeoParser.T__52);
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 599;
				this.match(LeoParser.T__53);
				}
			}

			this.state = 602;
			this.expression();
			this.state = 603;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mappingAttributes(): MappingAttributesContext {
		let localctx: MappingAttributesContext = new MappingAttributesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, LeoParser.RULE_mappingAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 605;
			_la = this._input.LA(1);
			if(!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public useMapping(): UseMappingContext {
		let localctx: UseMappingContext = new UseMappingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, LeoParser.RULE_useMapping);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 607;
			this.match(LeoParser.T__57);
			this.state = 608;
			this.mappingAttributes();
			this.state = 609;
			this.functionArguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, LeoParser.RULE_statement);
		try {
			this.state = 620;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 611;
				this.useMapping();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 612;
				this.expressionStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 613;
				this.variableDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 614;
				this.conditionalStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 615;
				this.loopStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 616;
				this.assignmentStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 617;
				this.consoleStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 618;
				this.block();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 619;
				this.returnStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, LeoParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 622;
			this.match(LeoParser.T__5);
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 222446113) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 939530625) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 130815) !== 0)) {
				{
				{
				this.state = 623;
				this.statement();
				}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 629;
			this.match(LeoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, LeoParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 631;
			this.match(LeoParser.T__58);
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1351649280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108867) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 130815) !== 0)) {
				{
				this.state = 632;
				this.expression();
				}
			}

			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 635;
				this.match(LeoParser.T__59);
				this.state = 636;
				this.match(LeoParser.T__60);
				this.state = 637;
				this.functionArguments();
				}
			}

			this.state = 640;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, LeoParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 642;
			this.expression();
			this.state = 643;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, LeoParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 645;
			this.match(LeoParser.T__61);
			this.state = 646;
			this.identifierOrIdentifiers();
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 647;
				this.match(LeoParser.T__26);
				this.state = 648;
				this.type_();
				}
			}

			this.state = 651;
			this.match(LeoParser.T__53);
			this.state = 652;
			this.expression();
			this.state = 653;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierOrIdentifiers(): IdentifierOrIdentifiersContext {
		let localctx: IdentifierOrIdentifiersContext = new IdentifierOrIdentifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, LeoParser.RULE_identifierOrIdentifiers);
		let _la: number;
		try {
			this.state = 667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 655;
				this.identifier();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 656;
				this.match(LeoParser.T__10);
				this.state = 657;
				this.identifier();
				this.state = 660;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 658;
					this.match(LeoParser.T__11);
					this.state = 659;
					this.identifier();
					}
					break;
				}
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 662;
					this.match(LeoParser.T__11);
					}
				}

				this.state = 665;
				this.match(LeoParser.T__12);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public branch(): BranchContext {
		let localctx: BranchContext = new BranchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, LeoParser.RULE_branch);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 669;
			this.match(LeoParser.T__62);
			this.state = 670;
			this.expression();
			this.state = 671;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalStatement(): ConditionalStatementContext {
		let localctx: ConditionalStatementContext = new ConditionalStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, LeoParser.RULE_conditionalStatement);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 673;
				this.branch();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 674;
				this.branch();
				this.state = 675;
				this.match(LeoParser.T__63);
				this.state = 676;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 678;
				this.branch();
				this.state = 679;
				this.match(LeoParser.T__63);
				this.state = 680;
				this.conditionalStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, LeoParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 684;
			_la = this._input.LA(1);
			if(!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 16775169) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let localctx: AssignmentStatementContext = new AssignmentStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, LeoParser.RULE_assignmentStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 686;
			this.expression();
			this.state = 687;
			this.assignmentOperator();
			this.state = 688;
			this.expression();
			this.state = 689;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public consoleStatement(): ConsoleStatementContext {
		let localctx: ConsoleStatementContext = new ConsoleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, LeoParser.RULE_consoleStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 691;
			this.consoleCall();
			this.state = 692;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public consoleCall(): ConsoleCallContext {
		let localctx: ConsoleCallContext = new ConsoleCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, LeoParser.RULE_consoleCall);
		try {
			this.state = 697;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 78:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 694;
				this.assertCall();
				}
				break;
			case 79:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 695;
				this.assertEqualCall();
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 696;
				this.assertNotEqualCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assertCall(): AssertCallContext {
		let localctx: AssertCallContext = new AssertCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, LeoParser.RULE_assertCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 699;
			this.match(LeoParser.T__77);
			this.state = 700;
			this.match(LeoParser.T__10);
			this.state = 701;
			this.expression();
			this.state = 702;
			this.match(LeoParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assertEqualCall(): AssertEqualCallContext {
		let localctx: AssertEqualCallContext = new AssertEqualCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, LeoParser.RULE_assertEqualCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 704;
			this.match(LeoParser.T__78);
			this.state = 705;
			this.match(LeoParser.T__10);
			this.state = 706;
			this.expression();
			this.state = 707;
			this.match(LeoParser.T__11);
			this.state = 708;
			this.expression();
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 709;
				this.match(LeoParser.T__11);
				}
			}

			this.state = 712;
			this.match(LeoParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assertNotEqualCall(): AssertNotEqualCallContext {
		let localctx: AssertNotEqualCallContext = new AssertNotEqualCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, LeoParser.RULE_assertNotEqualCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 714;
			this.match(LeoParser.T__79);
			this.state = 715;
			this.match(LeoParser.T__10);
			this.state = 716;
			this.expression();
			this.state = 717;
			this.match(LeoParser.T__11);
			this.state = 718;
			this.expression();
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 719;
				this.match(LeoParser.T__11);
				}
			}

			this.state = 722;
			this.match(LeoParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, LeoParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 724;
				this.annotation();
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 730;
			this.match(LeoParser.T__80);
			this.state = 731;
			this.identifier();
			this.state = 732;
			this.match(LeoParser.T__10);
			this.state = 734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 2055) !== 0)) {
				{
				this.state = 733;
				this.functionParameters();
				}
			}

			this.state = 736;
			this.match(LeoParser.T__12);
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===82) {
				{
				this.state = 737;
				this.match(LeoParser.T__81);
				this.state = 738;
				this.type_();
				}
			}

			this.state = 741;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionParameters(): FunctionParametersContext {
		let localctx: FunctionParametersContext = new FunctionParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, LeoParser.RULE_functionParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 743;
			this.functionParameter();
			this.state = 748;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 744;
					this.match(LeoParser.T__11);
					this.state = 745;
					this.functionParameter();
					}
					}
				}
				this.state = 750;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 751;
				this.match(LeoParser.T__11);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionParameter(): FunctionParameterContext {
		let localctx: FunctionParameterContext = new FunctionParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, LeoParser.RULE_functionParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0)) {
				{
				this.state = 754;
				_la = this._input.LA(1);
				if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 757;
			this.identifier();
			this.state = 758;
			this.match(LeoParser.T__26);
			this.state = 759;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlineDeclaration(): InlineDeclarationContext {
		let localctx: InlineDeclarationContext = new InlineDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, LeoParser.RULE_inlineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 761;
				this.annotation();
				}
				}
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 767;
			this.match(LeoParser.T__85);
			this.state = 768;
			this.identifier();
			this.state = 769;
			this.match(LeoParser.T__10);
			this.state = 771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 2055) !== 0)) {
				{
				this.state = 770;
				this.functionParameters();
				}
			}

			this.state = 773;
			this.match(LeoParser.T__12);
			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===82) {
				{
				this.state = 774;
				this.match(LeoParser.T__81);
				this.state = 775;
				this.type_();
				}
			}

			this.state = 778;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transitionDeclaration(): TransitionDeclarationContext {
		let localctx: TransitionDeclarationContext = new TransitionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, LeoParser.RULE_transitionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 780;
				this.annotation();
				}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 786;
			this.match(LeoParser.T__86);
			this.state = 787;
			this.identifier();
			this.state = 788;
			this.match(LeoParser.T__10);
			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 2055) !== 0)) {
				{
				this.state = 789;
				this.functionParameters();
				}
			}

			this.state = 792;
			this.match(LeoParser.T__12);
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===82) {
				{
				this.state = 793;
				this.match(LeoParser.T__81);
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0)) {
					{
					this.state = 794;
					_la = this._input.LA(1);
					if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 797;
				this.type_();
				}
			}

			this.state = 800;
			this.block();
			this.state = 802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61) {
				{
				this.state = 801;
				this.finalizer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finalizer(): FinalizerContext {
		let localctx: FinalizerContext = new FinalizerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, LeoParser.RULE_finalizer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 804;
			this.match(LeoParser.T__60);
			this.state = 805;
			this.identifier();
			this.state = 806;
			this.match(LeoParser.T__10);
			this.state = 807;
			this.functionParameters();
			this.state = 808;
			this.match(LeoParser.T__12);
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===82) {
				{
				this.state = 809;
				this.match(LeoParser.T__81);
				this.state = 810;
				_la = this._input.LA(1);
				if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 811;
				this.type_();
				}
			}

			this.state = 814;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structDeclaration(): StructDeclarationContext {
		let localctx: StructDeclarationContext = new StructDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, LeoParser.RULE_structDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 816;
			this.match(LeoParser.T__87);
			this.state = 817;
			this.identifier();
			this.state = 818;
			this.match(LeoParser.T__5);
			this.state = 819;
			this.structComponentDeclarations();
			this.state = 820;
			this.match(LeoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structComponentDeclarations(): StructComponentDeclarationsContext {
		let localctx: StructComponentDeclarationsContext = new StructComponentDeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, LeoParser.RULE_structComponentDeclarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 822;
			this.structComponentDeclaration();
			this.state = 827;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 823;
					this.match(LeoParser.T__11);
					this.state = 824;
					this.structComponentDeclaration();
					}
					}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			}
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 830;
				this.match(LeoParser.T__11);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structComponentDeclaration(): StructComponentDeclarationContext {
		let localctx: StructComponentDeclarationContext = new StructComponentDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, LeoParser.RULE_structComponentDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0)) {
				{
				this.state = 833;
				_la = this._input.LA(1);
				if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 836;
			this.identifier();
			this.state = 837;
			this.match(LeoParser.T__26);
			this.state = 838;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordDeclaration(): RecordDeclarationContext {
		let localctx: RecordDeclarationContext = new RecordDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, LeoParser.RULE_recordDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 840;
			this.match(LeoParser.T__9);
			this.state = 841;
			this.identifier();
			this.state = 842;
			this.match(LeoParser.T__5);
			this.state = 843;
			this.structComponentDeclarations();
			this.state = 844;
			this.match(LeoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mappingDeclaration(): MappingDeclarationContext {
		let localctx: MappingDeclarationContext = new MappingDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, LeoParser.RULE_mappingDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 846;
			this.match(LeoParser.T__88);
			this.state = 847;
			this.identifier();
			this.state = 848;
			this.match(LeoParser.T__26);
			this.state = 849;
			this.type_();
			this.state = 850;
			this.match(LeoParser.T__89);
			this.state = 851;
			this.type_();
			this.state = 852;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, LeoParser.RULE_file);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 854;
			this.importDeclaration();
			this.state = 855;
			this.programDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputType(): InputTypeContext {
		let localctx: InputTypeContext = new InputTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, LeoParser.RULE_inputType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 857;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputExpression(): InputExpressionContext {
		let localctx: InputExpressionContext = new InputExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, LeoParser.RULE_inputExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 859;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputItem(): InputItemContext {
		let localctx: InputItemContext = new InputItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, LeoParser.RULE_inputItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 861;
			this.identifier();
			this.state = 862;
			this.match(LeoParser.T__26);
			this.state = 863;
			this.inputType();
			this.state = 864;
			this.match(LeoParser.T__53);
			this.state = 865;
			this.inputExpression();
			this.state = 866;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputTitle(): InputTitleContext {
		let localctx: InputTitleContext = new InputTitleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, LeoParser.RULE_inputTitle);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 868;
			this.match(LeoParser.T__90);
			this.state = 869;
			_la = this._input.LA(1);
			if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 870;
			this.match(LeoParser.T__91);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputSection(): InputSectionContext {
		let localctx: InputSectionContext = new InputSectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, LeoParser.RULE_inputSection);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 872;
			this.inputTitle();
			this.state = 873;
			this.inputItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputFile(): InputFileContext {
		let localctx: InputFileContext = new InputFileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, LeoParser.RULE_inputFile);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 875;
			this.inputSection();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputExpression(): OutputExpressionContext {
		let localctx: OutputExpressionContext = new OutputExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, LeoParser.RULE_outputExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 877;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputItem(): OutputItemContext {
		let localctx: OutputItemContext = new OutputItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, LeoParser.RULE_outputItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 879;
			this.outputExpression();
			this.state = 880;
			this.match(LeoParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputTitle(): OutputTitleContext {
		let localctx: OutputTitleContext = new OutputTitleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, LeoParser.RULE_outputTitle);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 882;
			this.match(LeoParser.T__90);
			this.state = 883;
			this.match(LeoParser.T__92);
			this.state = 884;
			this.match(LeoParser.T__91);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputSection(): OutputSectionContext {
		let localctx: OutputSectionContext = new OutputSectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, LeoParser.RULE_outputSection);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 886;
			this.outputTitle();
			this.state = 887;
			this.outputItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputFile(): OutputFileContext {
		let localctx: OutputFileContext = new OutputFileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, LeoParser.RULE_outputFile);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 889;
			this.outputSection();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 40:
			return this.multiplicativeExpression_sempred(localctx as MultiplicativeExpressionContext, predIndex);
		case 41:
			return this.additiveExpression_sempred(localctx as AdditiveExpressionContext, predIndex);
		case 42:
			return this.shiftExpression_sempred(localctx as ShiftExpressionContext, predIndex);
		case 43:
			return this.conjunctiveExpression_sempred(localctx as ConjunctiveExpressionContext, predIndex);
		case 44:
			return this.disjunctiveExpression_sempred(localctx as DisjunctiveExpressionContext, predIndex);
		case 45:
			return this.exclusiveDisjunctiveExpression_sempred(localctx as ExclusiveDisjunctiveExpressionContext, predIndex);
		case 48:
			return this.conditionalConjunctiveExpression_sempred(localctx as ConditionalConjunctiveExpressionContext, predIndex);
		case 49:
			return this.conditionalDisjunctiveExpression_sempred(localctx as ConditionalDisjunctiveExpressionContext, predIndex);
		}
		return true;
	}
	private multiplicativeExpression_sempred(localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conjunctiveExpression_sempred(localctx: ConjunctiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private disjunctiveExpression_sempred(localctx: DisjunctiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveDisjunctiveExpression_sempred(localctx: ExclusiveDisjunctiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalConjunctiveExpression_sempred(localctx: ConditionalConjunctiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalDisjunctiveExpression_sempred(localctx: ConditionalDisjunctiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,112,892,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,1,0,5,0,190,8,0,10,0,12,0,193,
	9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,
	1,4,1,4,5,4,214,8,4,10,4,12,4,217,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,
	5,227,8,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,240,8,9,1,10,
	1,10,1,10,3,10,245,8,10,1,11,1,11,1,12,1,12,3,12,251,8,12,1,13,1,13,1,13,
	1,13,3,13,257,8,13,1,13,1,13,1,13,3,13,262,8,13,3,13,264,8,13,1,14,1,14,
	1,14,1,14,5,14,270,8,14,10,14,12,14,273,9,14,1,14,3,14,276,8,14,1,14,1,
	14,1,15,1,15,1,15,5,15,283,8,15,10,15,12,15,286,9,15,1,16,1,16,1,16,1,16,
	3,16,292,8,16,1,17,1,17,1,18,1,18,1,18,1,18,3,18,300,8,18,1,19,1,19,1,19,
	3,19,305,8,19,1,20,1,20,3,20,309,8,20,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
	1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,327,8,22,1,23,1,23,1,
	24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,3,25,341,8,25,1,26,1,26,
	1,26,1,26,1,26,1,26,1,26,3,26,350,8,26,1,26,1,26,1,26,1,26,1,27,1,27,1,
	27,1,27,5,27,360,8,27,10,27,12,27,363,9,27,3,27,365,8,27,1,27,1,27,1,28,
	1,28,1,28,1,29,1,29,1,29,1,29,5,29,376,8,29,10,29,12,29,379,9,29,1,29,3,
	29,382,8,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,5,30,391,8,30,10,30,12,30,
	394,9,30,1,30,3,30,397,8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,3,31,406,
	8,31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,3,
	34,421,8,34,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,
	1,37,1,38,1,38,1,38,1,38,1,38,3,38,441,8,38,1,39,1,39,1,39,1,39,1,39,3,
	39,448,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
	5,40,462,8,40,10,40,12,40,465,9,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
	41,1,41,5,41,476,8,41,10,41,12,41,479,9,41,1,42,1,42,1,42,1,42,1,42,1,42,
	1,42,1,42,1,42,5,42,490,8,42,10,42,12,42,493,9,42,1,43,1,43,1,43,1,43,1,
	43,1,43,5,43,501,8,43,10,43,12,43,504,9,43,1,44,1,44,1,44,1,44,1,44,1,44,
	5,44,512,8,44,10,44,12,44,515,9,44,1,45,1,45,1,45,1,45,1,45,1,45,5,45,523,
	8,45,10,45,12,45,526,9,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,545,8,46,1,47,1,47,1,47,1,
	47,1,47,1,47,1,47,1,47,1,47,3,47,556,8,47,1,48,1,48,1,48,1,48,1,48,1,48,
	5,48,564,8,48,10,48,12,48,567,9,48,1,49,1,49,1,49,1,49,1,49,1,49,5,49,575,
	8,49,10,49,12,49,578,9,49,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,
	3,51,589,8,51,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,601,
	8,53,1,53,1,53,1,53,1,54,1,54,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,
	56,1,56,1,56,1,56,1,56,3,56,621,8,56,1,57,1,57,5,57,625,8,57,10,57,12,57,
	628,9,57,1,57,1,57,1,58,1,58,3,58,634,8,58,1,58,1,58,1,58,3,58,639,8,58,
	1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,3,60,650,8,60,1,60,1,60,1,
	60,1,60,1,61,1,61,1,61,1,61,1,61,3,61,661,8,61,1,61,3,61,664,8,61,1,61,
	1,61,3,61,668,8,61,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,
	63,1,63,1,63,3,63,683,8,63,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,66,1,66,
	1,66,1,67,1,67,1,67,3,67,698,8,67,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,
	69,1,69,1,69,1,69,3,69,711,8,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,
	3,70,721,8,70,1,70,1,70,1,71,5,71,726,8,71,10,71,12,71,729,9,71,1,71,1,
	71,1,71,1,71,3,71,735,8,71,1,71,1,71,1,71,3,71,740,8,71,1,71,1,71,1,72,
	1,72,1,72,5,72,747,8,72,10,72,12,72,750,9,72,1,72,3,72,753,8,72,1,73,3,
	73,756,8,73,1,73,1,73,1,73,1,73,1,74,5,74,763,8,74,10,74,12,74,766,9,74,
	1,74,1,74,1,74,1,74,3,74,772,8,74,1,74,1,74,1,74,3,74,777,8,74,1,74,1,74,
	1,75,5,75,782,8,75,10,75,12,75,785,9,75,1,75,1,75,1,75,1,75,3,75,791,8,
	75,1,75,1,75,1,75,3,75,796,8,75,1,75,3,75,799,8,75,1,75,1,75,3,75,803,8,
	75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,813,8,76,1,76,1,76,1,77,
	1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,5,78,826,8,78,10,78,12,78,829,9,
	78,1,78,3,78,832,8,78,1,79,3,79,835,8,79,1,79,1,79,1,79,1,79,1,80,1,80,
	1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,
	82,1,83,1,83,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,
	1,86,1,87,1,87,1,87,1,88,1,88,1,89,1,89,1,90,1,90,1,90,1,91,1,91,1,91,1,
	91,1,92,1,92,1,92,1,93,1,93,1,93,0,8,80,82,84,86,88,90,96,98,94,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
	104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
	140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,
	176,178,180,182,184,186,0,9,1,0,95,96,1,0,103,104,2,0,106,106,110,110,1,
	0,16,19,1,0,21,22,1,0,24,26,1,0,55,57,2,0,54,54,65,77,1,0,83,85,913,0,191,
	1,0,0,0,2,197,1,0,0,0,4,201,1,0,0,0,6,205,1,0,0,0,8,209,1,0,0,0,10,226,
	1,0,0,0,12,228,1,0,0,0,14,230,1,0,0,0,16,233,1,0,0,0,18,239,1,0,0,0,20,
	244,1,0,0,0,22,246,1,0,0,0,24,250,1,0,0,0,26,263,1,0,0,0,28,265,1,0,0,0,
	30,279,1,0,0,0,32,291,1,0,0,0,34,293,1,0,0,0,36,299,1,0,0,0,38,304,1,0,
	0,0,40,308,1,0,0,0,42,310,1,0,0,0,44,326,1,0,0,0,46,328,1,0,0,0,48,330,
	1,0,0,0,50,340,1,0,0,0,52,349,1,0,0,0,54,355,1,0,0,0,56,368,1,0,0,0,58,
	371,1,0,0,0,60,385,1,0,0,0,62,405,1,0,0,0,64,407,1,0,0,0,66,411,1,0,0,0,
	68,420,1,0,0,0,70,422,1,0,0,0,72,426,1,0,0,0,74,430,1,0,0,0,76,440,1,0,
	0,0,78,447,1,0,0,0,80,449,1,0,0,0,82,466,1,0,0,0,84,480,1,0,0,0,86,494,
	1,0,0,0,88,505,1,0,0,0,90,516,1,0,0,0,92,544,1,0,0,0,94,555,1,0,0,0,96,
	557,1,0,0,0,98,568,1,0,0,0,100,579,1,0,0,0,102,588,1,0,0,0,104,590,1,0,
	0,0,106,592,1,0,0,0,108,605,1,0,0,0,110,607,1,0,0,0,112,620,1,0,0,0,114,
	622,1,0,0,0,116,631,1,0,0,0,118,642,1,0,0,0,120,645,1,0,0,0,122,667,1,0,
	0,0,124,669,1,0,0,0,126,682,1,0,0,0,128,684,1,0,0,0,130,686,1,0,0,0,132,
	691,1,0,0,0,134,697,1,0,0,0,136,699,1,0,0,0,138,704,1,0,0,0,140,714,1,0,
	0,0,142,727,1,0,0,0,144,743,1,0,0,0,146,755,1,0,0,0,148,764,1,0,0,0,150,
	783,1,0,0,0,152,804,1,0,0,0,154,816,1,0,0,0,156,822,1,0,0,0,158,834,1,0,
	0,0,160,840,1,0,0,0,162,846,1,0,0,0,164,854,1,0,0,0,166,857,1,0,0,0,168,
	859,1,0,0,0,170,861,1,0,0,0,172,868,1,0,0,0,174,872,1,0,0,0,176,875,1,0,
	0,0,178,877,1,0,0,0,180,879,1,0,0,0,182,882,1,0,0,0,184,886,1,0,0,0,186,
	889,1,0,0,0,188,190,3,6,3,0,189,188,1,0,0,0,190,193,1,0,0,0,191,189,1,0,
	0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,1,0,0,0,194,195,3,8,4,0,195,
	196,5,0,0,1,196,1,1,0,0,0,197,198,3,12,6,0,198,199,5,1,0,0,199,200,3,12,
	6,0,200,3,1,0,0,0,201,202,3,2,1,0,202,203,5,2,0,0,203,204,3,12,6,0,204,
	5,1,0,0,0,205,206,5,3,0,0,206,207,3,2,1,0,207,208,5,4,0,0,208,7,1,0,0,0,
	209,210,5,5,0,0,210,211,3,2,1,0,211,215,5,6,0,0,212,214,3,10,5,0,213,212,
	1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,
	217,215,1,0,0,0,218,219,5,7,0,0,219,9,1,0,0,0,220,227,3,154,77,0,221,227,
	3,160,80,0,222,227,3,162,81,0,223,227,3,142,71,0,224,227,3,148,74,0,225,
	227,3,150,75,0,226,220,1,0,0,0,226,221,1,0,0,0,226,222,1,0,0,0,226,223,
	1,0,0,0,226,224,1,0,0,0,226,225,1,0,0,0,227,11,1,0,0,0,228,229,5,94,0,0,
	229,13,1,0,0,0,230,231,5,8,0,0,231,232,5,94,0,0,232,15,1,0,0,0,233,234,
	7,0,0,0,234,17,1,0,0,0,235,240,3,16,8,0,236,240,5,97,0,0,237,240,5,98,0,
	0,238,240,5,99,0,0,239,235,1,0,0,0,239,236,1,0,0,0,239,237,1,0,0,0,239,
	238,1,0,0,0,240,19,1,0,0,0,241,245,5,100,0,0,242,245,3,18,9,0,243,245,5,
	101,0,0,244,241,1,0,0,0,244,242,1,0,0,0,244,243,1,0,0,0,245,21,1,0,0,0,
	246,247,5,9,0,0,247,23,1,0,0,0,248,251,3,20,10,0,249,251,3,22,11,0,250,
	248,1,0,0,0,250,249,1,0,0,0,251,25,1,0,0,0,252,264,3,20,10,0,253,256,3,
	12,6,0,254,255,5,1,0,0,255,257,5,10,0,0,256,254,1,0,0,0,256,257,1,0,0,0,
	257,264,1,0,0,0,258,261,3,4,2,0,259,260,5,1,0,0,260,262,5,10,0,0,261,259,
	1,0,0,0,261,262,1,0,0,0,262,264,1,0,0,0,263,252,1,0,0,0,263,253,1,0,0,0,
	263,258,1,0,0,0,264,27,1,0,0,0,265,266,5,11,0,0,266,271,3,32,16,0,267,268,
	5,12,0,0,268,270,3,32,16,0,269,267,1,0,0,0,270,273,1,0,0,0,271,269,1,0,
	0,0,271,272,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,274,276,5,12,0,0,275,
	274,1,0,0,0,275,276,1,0,0,0,276,277,1,0,0,0,277,278,5,13,0,0,278,29,1,0,
	0,0,279,284,3,12,6,0,280,281,5,1,0,0,281,283,3,12,6,0,282,280,1,0,0,0,283,
	286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,31,1,0,0,0,286,284,1,0,
	0,0,287,292,3,26,13,0,288,292,3,22,11,0,289,292,3,28,14,0,290,292,3,30,
	15,0,291,287,1,0,0,0,291,288,1,0,0,0,291,289,1,0,0,0,291,290,1,0,0,0,292,
	33,1,0,0,0,293,294,7,1,0,0,294,35,1,0,0,0,295,300,3,34,17,0,296,300,5,105,
	0,0,297,300,5,106,0,0,298,300,5,107,0,0,299,295,1,0,0,0,299,296,1,0,0,0,
	299,297,1,0,0,0,299,298,1,0,0,0,300,37,1,0,0,0,301,305,3,36,18,0,302,305,
	5,108,0,0,303,305,5,109,0,0,304,301,1,0,0,0,304,302,1,0,0,0,304,303,1,0,
	0,0,305,39,1,0,0,0,306,309,3,38,19,0,307,309,5,110,0,0,308,306,1,0,0,0,
	308,307,1,0,0,0,309,41,1,0,0,0,310,311,7,2,0,0,311,43,1,0,0,0,312,327,3,
	40,20,0,313,327,3,46,23,0,314,327,3,48,24,0,315,316,5,11,0,0,316,317,3,
	104,52,0,317,318,5,13,0,0,318,327,1,0,0,0,319,327,3,50,25,0,320,327,3,52,
	26,0,321,327,3,56,28,0,322,327,3,58,29,0,323,327,3,60,30,0,324,327,3,64,
	32,0,325,327,3,66,33,0,326,312,1,0,0,0,326,313,1,0,0,0,326,314,1,0,0,0,
	326,315,1,0,0,0,326,319,1,0,0,0,326,320,1,0,0,0,326,321,1,0,0,0,326,322,
	1,0,0,0,326,323,1,0,0,0,326,324,1,0,0,0,326,325,1,0,0,0,327,45,1,0,0,0,
	328,329,3,12,6,0,329,47,1,0,0,0,330,331,3,26,13,0,331,332,5,14,0,0,332,
	333,3,12,6,0,333,49,1,0,0,0,334,335,3,12,6,0,335,336,3,54,27,0,336,341,
	1,0,0,0,337,338,3,4,2,0,338,339,3,54,27,0,339,341,1,0,0,0,340,334,1,0,0,
	0,340,337,1,0,0,0,341,51,1,0,0,0,342,343,5,15,0,0,343,350,7,3,0,0,344,345,
	5,20,0,0,345,350,7,4,0,0,346,347,5,23,0,0,347,350,7,5,0,0,348,350,3,26,
	13,0,349,342,1,0,0,0,349,344,1,0,0,0,349,346,1,0,0,0,349,348,1,0,0,0,350,
	351,1,0,0,0,351,352,5,14,0,0,352,353,3,12,6,0,353,354,3,54,27,0,354,53,
	1,0,0,0,355,364,5,11,0,0,356,361,3,104,52,0,357,358,5,12,0,0,358,360,3,
	104,52,0,359,357,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,
	0,362,365,1,0,0,0,363,361,1,0,0,0,364,356,1,0,0,0,364,365,1,0,0,0,365,366,
	1,0,0,0,366,367,5,13,0,0,367,55,1,0,0,0,368,369,5,11,0,0,369,370,5,13,0,
	0,370,57,1,0,0,0,371,372,5,11,0,0,372,377,3,104,52,0,373,374,5,12,0,0,374,
	376,3,104,52,0,375,373,1,0,0,0,376,379,1,0,0,0,377,375,1,0,0,0,377,378,
	1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,380,382,5,12,0,0,381,380,1,0,0,
	0,381,382,1,0,0,0,382,383,1,0,0,0,383,384,5,13,0,0,384,59,1,0,0,0,385,386,
	3,12,6,0,386,387,5,6,0,0,387,392,3,62,31,0,388,389,5,12,0,0,389,391,3,62,
	31,0,390,388,1,0,0,0,391,394,1,0,0,0,392,390,1,0,0,0,392,393,1,0,0,0,393,
	396,1,0,0,0,394,392,1,0,0,0,395,397,5,12,0,0,396,395,1,0,0,0,396,397,1,
	0,0,0,397,398,1,0,0,0,398,399,5,7,0,0,399,61,1,0,0,0,400,406,3,12,6,0,401,
	402,3,12,6,0,402,403,5,27,0,0,403,404,3,104,52,0,404,406,1,0,0,0,405,400,
	1,0,0,0,405,401,1,0,0,0,406,63,1,0,0,0,407,408,5,28,0,0,408,409,5,1,0,0,
	409,410,5,29,0,0,410,65,1,0,0,0,411,412,5,30,0,0,412,413,5,1,0,0,413,414,
	5,31,0,0,414,67,1,0,0,0,415,421,3,44,22,0,416,421,3,110,55,0,417,421,3,
	70,35,0,418,421,3,72,36,0,419,421,3,74,37,0,420,415,1,0,0,0,420,416,1,0,
	0,0,420,417,1,0,0,0,420,418,1,0,0,0,420,419,1,0,0,0,421,69,1,0,0,0,422,
	423,3,12,6,0,423,424,5,1,0,0,424,425,5,102,0,0,425,71,1,0,0,0,426,427,3,
	12,6,0,427,428,5,1,0,0,428,429,3,12,6,0,429,73,1,0,0,0,430,431,3,12,6,0,
	431,432,5,1,0,0,432,433,3,12,6,0,433,434,3,54,27,0,434,75,1,0,0,0,435,441,
	3,68,34,0,436,437,5,32,0,0,437,441,3,76,38,0,438,439,5,33,0,0,439,441,3,
	76,38,0,440,435,1,0,0,0,440,436,1,0,0,0,440,438,1,0,0,0,441,77,1,0,0,0,
	442,448,3,76,38,0,443,444,3,76,38,0,444,445,5,34,0,0,445,446,3,78,39,0,
	446,448,1,0,0,0,447,442,1,0,0,0,447,443,1,0,0,0,448,79,1,0,0,0,449,450,
	6,40,-1,0,450,451,3,78,39,0,451,463,1,0,0,0,452,453,10,3,0,0,453,454,5,
	35,0,0,454,462,3,78,39,0,455,456,10,2,0,0,456,457,5,2,0,0,457,462,3,78,
	39,0,458,459,10,1,0,0,459,460,5,36,0,0,460,462,3,78,39,0,461,452,1,0,0,
	0,461,455,1,0,0,0,461,458,1,0,0,0,462,465,1,0,0,0,463,461,1,0,0,0,463,464,
	1,0,0,0,464,81,1,0,0,0,465,463,1,0,0,0,466,467,6,41,-1,0,467,468,3,80,40,
	0,468,477,1,0,0,0,469,470,10,2,0,0,470,471,5,37,0,0,471,476,3,80,40,0,472,
	473,10,1,0,0,473,474,5,33,0,0,474,476,3,80,40,0,475,469,1,0,0,0,475,472,
	1,0,0,0,476,479,1,0,0,0,477,475,1,0,0,0,477,478,1,0,0,0,478,83,1,0,0,0,
	479,477,1,0,0,0,480,481,6,42,-1,0,481,482,3,82,41,0,482,491,1,0,0,0,483,
	484,10,2,0,0,484,485,5,38,0,0,485,490,3,82,41,0,486,487,10,1,0,0,487,488,
	5,39,0,0,488,490,3,82,41,0,489,483,1,0,0,0,489,486,1,0,0,0,490,493,1,0,
	0,0,491,489,1,0,0,0,491,492,1,0,0,0,492,85,1,0,0,0,493,491,1,0,0,0,494,
	495,6,43,-1,0,495,496,3,84,42,0,496,502,1,0,0,0,497,498,10,1,0,0,498,499,
	5,40,0,0,499,501,3,84,42,0,500,497,1,0,0,0,501,504,1,0,0,0,502,500,1,0,
	0,0,502,503,1,0,0,0,503,87,1,0,0,0,504,502,1,0,0,0,505,506,6,44,-1,0,506,
	507,3,86,43,0,507,513,1,0,0,0,508,509,10,1,0,0,509,510,5,40,0,0,510,512,
	3,86,43,0,511,508,1,0,0,0,512,515,1,0,0,0,513,511,1,0,0,0,513,514,1,0,0,
	0,514,89,1,0,0,0,515,513,1,0,0,0,516,517,6,45,-1,0,517,518,3,88,44,0,518,
	524,1,0,0,0,519,520,10,1,0,0,520,521,5,41,0,0,521,523,3,88,44,0,522,519,
	1,0,0,0,523,526,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,91,1,0,0,0,
	526,524,1,0,0,0,527,545,3,90,45,0,528,529,3,90,45,0,529,530,5,42,0,0,530,
	531,3,90,45,0,531,545,1,0,0,0,532,533,3,90,45,0,533,534,5,43,0,0,534,535,
	3,90,45,0,535,545,1,0,0,0,536,537,3,90,45,0,537,538,5,44,0,0,538,539,3,
	90,45,0,539,545,1,0,0,0,540,541,3,90,45,0,541,542,5,45,0,0,542,543,3,90,
	45,0,543,545,1,0,0,0,544,527,1,0,0,0,544,528,1,0,0,0,544,532,1,0,0,0,544,
	536,1,0,0,0,544,540,1,0,0,0,545,93,1,0,0,0,546,556,3,92,46,0,547,548,3,
	92,46,0,548,549,5,46,0,0,549,550,3,92,46,0,550,556,1,0,0,0,551,552,3,92,
	46,0,552,553,5,47,0,0,553,554,3,92,46,0,554,556,1,0,0,0,555,546,1,0,0,0,
	555,547,1,0,0,0,555,551,1,0,0,0,556,95,1,0,0,0,557,558,6,48,-1,0,558,559,
	3,94,47,0,559,565,1,0,0,0,560,561,10,1,0,0,561,562,5,48,0,0,562,564,3,94,
	47,0,563,560,1,0,0,0,564,567,1,0,0,0,565,563,1,0,0,0,565,566,1,0,0,0,566,
	97,1,0,0,0,567,565,1,0,0,0,568,569,6,49,-1,0,569,570,3,96,48,0,570,576,
	1,0,0,0,571,572,10,1,0,0,572,573,5,49,0,0,573,575,3,96,48,0,574,571,1,0,
	0,0,575,578,1,0,0,0,576,574,1,0,0,0,576,577,1,0,0,0,577,99,1,0,0,0,578,
	576,1,0,0,0,579,580,3,98,49,0,580,101,1,0,0,0,581,589,3,100,50,0,582,583,
	3,100,50,0,583,584,5,50,0,0,584,585,3,104,52,0,585,586,5,27,0,0,586,587,
	3,104,52,0,587,589,1,0,0,0,588,581,1,0,0,0,588,582,1,0,0,0,589,103,1,0,
	0,0,590,591,3,102,51,0,591,105,1,0,0,0,592,593,5,51,0,0,593,594,3,12,6,
	0,594,595,5,27,0,0,595,596,3,32,16,0,596,597,5,52,0,0,597,598,3,104,52,
	0,598,600,5,53,0,0,599,601,5,54,0,0,600,599,1,0,0,0,600,601,1,0,0,0,601,
	602,1,0,0,0,602,603,3,104,52,0,603,604,3,114,57,0,604,107,1,0,0,0,605,606,
	7,6,0,0,606,109,1,0,0,0,607,608,5,58,0,0,608,609,3,108,54,0,609,610,3,54,
	27,0,610,111,1,0,0,0,611,621,3,110,55,0,612,621,3,118,59,0,613,621,3,120,
	60,0,614,621,3,126,63,0,615,621,3,106,53,0,616,621,3,130,65,0,617,621,3,
	132,66,0,618,621,3,114,57,0,619,621,3,116,58,0,620,611,1,0,0,0,620,612,
	1,0,0,0,620,613,1,0,0,0,620,614,1,0,0,0,620,615,1,0,0,0,620,616,1,0,0,0,
	620,617,1,0,0,0,620,618,1,0,0,0,620,619,1,0,0,0,621,113,1,0,0,0,622,626,
	5,6,0,0,623,625,3,112,56,0,624,623,1,0,0,0,625,628,1,0,0,0,626,624,1,0,
	0,0,626,627,1,0,0,0,627,629,1,0,0,0,628,626,1,0,0,0,629,630,5,7,0,0,630,
	115,1,0,0,0,631,633,5,59,0,0,632,634,3,104,52,0,633,632,1,0,0,0,633,634,
	1,0,0,0,634,638,1,0,0,0,635,636,5,60,0,0,636,637,5,61,0,0,637,639,3,54,
	27,0,638,635,1,0,0,0,638,639,1,0,0,0,639,640,1,0,0,0,640,641,5,4,0,0,641,
	117,1,0,0,0,642,643,3,104,52,0,643,644,5,4,0,0,644,119,1,0,0,0,645,646,
	5,62,0,0,646,649,3,122,61,0,647,648,5,27,0,0,648,650,3,32,16,0,649,647,
	1,0,0,0,649,650,1,0,0,0,650,651,1,0,0,0,651,652,5,54,0,0,652,653,3,104,
	52,0,653,654,5,4,0,0,654,121,1,0,0,0,655,668,3,12,6,0,656,657,5,11,0,0,
	657,660,3,12,6,0,658,659,5,12,0,0,659,661,3,12,6,0,660,658,1,0,0,0,660,
	661,1,0,0,0,661,663,1,0,0,0,662,664,5,12,0,0,663,662,1,0,0,0,663,664,1,
	0,0,0,664,665,1,0,0,0,665,666,5,13,0,0,666,668,1,0,0,0,667,655,1,0,0,0,
	667,656,1,0,0,0,668,123,1,0,0,0,669,670,5,63,0,0,670,671,3,104,52,0,671,
	672,3,114,57,0,672,125,1,0,0,0,673,683,3,124,62,0,674,675,3,124,62,0,675,
	676,5,64,0,0,676,677,3,114,57,0,677,683,1,0,0,0,678,679,3,124,62,0,679,
	680,5,64,0,0,680,681,3,126,63,0,681,683,1,0,0,0,682,673,1,0,0,0,682,674,
	1,0,0,0,682,678,1,0,0,0,683,127,1,0,0,0,684,685,7,7,0,0,685,129,1,0,0,0,
	686,687,3,104,52,0,687,688,3,128,64,0,688,689,3,104,52,0,689,690,5,4,0,
	0,690,131,1,0,0,0,691,692,3,134,67,0,692,693,5,4,0,0,693,133,1,0,0,0,694,
	698,3,136,68,0,695,698,3,138,69,0,696,698,3,140,70,0,697,694,1,0,0,0,697,
	695,1,0,0,0,697,696,1,0,0,0,698,135,1,0,0,0,699,700,5,78,0,0,700,701,5,
	11,0,0,701,702,3,104,52,0,702,703,5,13,0,0,703,137,1,0,0,0,704,705,5,79,
	0,0,705,706,5,11,0,0,706,707,3,104,52,0,707,708,5,12,0,0,708,710,3,104,
	52,0,709,711,5,12,0,0,710,709,1,0,0,0,710,711,1,0,0,0,711,712,1,0,0,0,712,
	713,5,13,0,0,713,139,1,0,0,0,714,715,5,80,0,0,715,716,5,11,0,0,716,717,
	3,104,52,0,717,718,5,12,0,0,718,720,3,104,52,0,719,721,5,12,0,0,720,719,
	1,0,0,0,720,721,1,0,0,0,721,722,1,0,0,0,722,723,5,13,0,0,723,141,1,0,0,
	0,724,726,3,14,7,0,725,724,1,0,0,0,726,729,1,0,0,0,727,725,1,0,0,0,727,
	728,1,0,0,0,728,730,1,0,0,0,729,727,1,0,0,0,730,731,5,81,0,0,731,732,3,
	12,6,0,732,734,5,11,0,0,733,735,3,144,72,0,734,733,1,0,0,0,734,735,1,0,
	0,0,735,736,1,0,0,0,736,739,5,13,0,0,737,738,5,82,0,0,738,740,3,32,16,0,
	739,737,1,0,0,0,739,740,1,0,0,0,740,741,1,0,0,0,741,742,3,114,57,0,742,
	143,1,0,0,0,743,748,3,146,73,0,744,745,5,12,0,0,745,747,3,146,73,0,746,
	744,1,0,0,0,747,750,1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,749,752,1,0,
	0,0,750,748,1,0,0,0,751,753,5,12,0,0,752,751,1,0,0,0,752,753,1,0,0,0,753,
	145,1,0,0,0,754,756,7,8,0,0,755,754,1,0,0,0,755,756,1,0,0,0,756,757,1,0,
	0,0,757,758,3,12,6,0,758,759,5,27,0,0,759,760,3,32,16,0,760,147,1,0,0,0,
	761,763,3,14,7,0,762,761,1,0,0,0,763,766,1,0,0,0,764,762,1,0,0,0,764,765,
	1,0,0,0,765,767,1,0,0,0,766,764,1,0,0,0,767,768,5,86,0,0,768,769,3,12,6,
	0,769,771,5,11,0,0,770,772,3,144,72,0,771,770,1,0,0,0,771,772,1,0,0,0,772,
	773,1,0,0,0,773,776,5,13,0,0,774,775,5,82,0,0,775,777,3,32,16,0,776,774,
	1,0,0,0,776,777,1,0,0,0,777,778,1,0,0,0,778,779,3,114,57,0,779,149,1,0,
	0,0,780,782,3,14,7,0,781,780,1,0,0,0,782,785,1,0,0,0,783,781,1,0,0,0,783,
	784,1,0,0,0,784,786,1,0,0,0,785,783,1,0,0,0,786,787,5,87,0,0,787,788,3,
	12,6,0,788,790,5,11,0,0,789,791,3,144,72,0,790,789,1,0,0,0,790,791,1,0,
	0,0,791,792,1,0,0,0,792,798,5,13,0,0,793,795,5,82,0,0,794,796,7,8,0,0,795,
	794,1,0,0,0,795,796,1,0,0,0,796,797,1,0,0,0,797,799,3,32,16,0,798,793,1,
	0,0,0,798,799,1,0,0,0,799,800,1,0,0,0,800,802,3,114,57,0,801,803,3,152,
	76,0,802,801,1,0,0,0,802,803,1,0,0,0,803,151,1,0,0,0,804,805,5,61,0,0,805,
	806,3,12,6,0,806,807,5,11,0,0,807,808,3,144,72,0,808,812,5,13,0,0,809,810,
	5,82,0,0,810,811,7,8,0,0,811,813,3,32,16,0,812,809,1,0,0,0,812,813,1,0,
	0,0,813,814,1,0,0,0,814,815,3,114,57,0,815,153,1,0,0,0,816,817,5,88,0,0,
	817,818,3,12,6,0,818,819,5,6,0,0,819,820,3,156,78,0,820,821,5,7,0,0,821,
	155,1,0,0,0,822,827,3,158,79,0,823,824,5,12,0,0,824,826,3,158,79,0,825,
	823,1,0,0,0,826,829,1,0,0,0,827,825,1,0,0,0,827,828,1,0,0,0,828,831,1,0,
	0,0,829,827,1,0,0,0,830,832,5,12,0,0,831,830,1,0,0,0,831,832,1,0,0,0,832,
	157,1,0,0,0,833,835,7,8,0,0,834,833,1,0,0,0,834,835,1,0,0,0,835,836,1,0,
	0,0,836,837,3,12,6,0,837,838,5,27,0,0,838,839,3,32,16,0,839,159,1,0,0,0,
	840,841,5,10,0,0,841,842,3,12,6,0,842,843,5,6,0,0,843,844,3,156,78,0,844,
	845,5,7,0,0,845,161,1,0,0,0,846,847,5,89,0,0,847,848,3,12,6,0,848,849,5,
	27,0,0,849,850,3,32,16,0,850,851,5,90,0,0,851,852,3,32,16,0,852,853,5,4,
	0,0,853,163,1,0,0,0,854,855,3,6,3,0,855,856,3,8,4,0,856,165,1,0,0,0,857,
	858,3,32,16,0,858,167,1,0,0,0,859,860,3,104,52,0,860,169,1,0,0,0,861,862,
	3,12,6,0,862,863,5,27,0,0,863,864,3,166,83,0,864,865,5,54,0,0,865,866,3,
	168,84,0,866,867,5,4,0,0,867,171,1,0,0,0,868,869,5,91,0,0,869,870,7,8,0,
	0,870,871,5,92,0,0,871,173,1,0,0,0,872,873,3,172,86,0,873,874,3,170,85,
	0,874,175,1,0,0,0,875,876,3,174,87,0,876,177,1,0,0,0,877,878,3,104,52,0,
	878,179,1,0,0,0,879,880,3,178,89,0,880,881,5,4,0,0,881,181,1,0,0,0,882,
	883,5,91,0,0,883,884,5,93,0,0,884,885,5,92,0,0,885,183,1,0,0,0,886,887,
	3,182,91,0,887,888,3,180,90,0,888,185,1,0,0,0,889,890,3,184,92,0,890,187,
	1,0,0,0,74,191,215,226,239,244,250,256,261,263,271,275,284,291,299,304,
	308,326,340,349,361,364,377,381,392,396,405,420,440,447,461,463,475,477,
	489,491,502,513,524,544,555,565,576,588,600,620,626,633,638,649,660,663,
	667,682,697,710,720,727,734,739,748,752,755,764,771,776,783,790,795,798,
	802,812,827,831,834];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LeoParser.__ATN) {
			LeoParser.__ATN = new ATNDeserializer().deserialize(LeoParser._serializedATN);
		}

		return LeoParser.__ATN;
	}


	static DecisionsToDFA = LeoParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class SourceUnitContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public programDeclaration(): ProgramDeclarationContext {
		return this.getTypedRuleContext(ProgramDeclarationContext, 0) as ProgramDeclarationContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(LeoParser.EOF, 0);
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_sourceUnit;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterSourceUnit) {
	 		listener.enterSourceUnit(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitSourceUnit) {
	 		listener.exitSourceUnit(this);
		}
	}
}


export class ProgramIdContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_programId;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterProgramId) {
	 		listener.enterProgramId(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitProgramId) {
	 		listener.exitProgramId(this);
		}
	}
}


export class LocatorContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public programId(): ProgramIdContext {
		return this.getTypedRuleContext(ProgramIdContext, 0) as ProgramIdContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_locator;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterLocator) {
	 		listener.enterLocator(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitLocator) {
	 		listener.exitLocator(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public programId(): ProgramIdContext {
		return this.getTypedRuleContext(ProgramIdContext, 0) as ProgramIdContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_importDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
}


export class ProgramDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public programId(): ProgramIdContext {
		return this.getTypedRuleContext(ProgramIdContext, 0) as ProgramIdContext;
	}
	public programItem_list(): ProgramItemContext[] {
		return this.getTypedRuleContexts(ProgramItemContext) as ProgramItemContext[];
	}
	public programItem(i: number): ProgramItemContext {
		return this.getTypedRuleContext(ProgramItemContext, i) as ProgramItemContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_programDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterProgramDeclaration) {
	 		listener.enterProgramDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitProgramDeclaration) {
	 		listener.exitProgramDeclaration(this);
		}
	}
}


export class ProgramItemContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public structDeclaration(): StructDeclarationContext {
		return this.getTypedRuleContext(StructDeclarationContext, 0) as StructDeclarationContext;
	}
	public recordDeclaration(): RecordDeclarationContext {
		return this.getTypedRuleContext(RecordDeclarationContext, 0) as RecordDeclarationContext;
	}
	public mappingDeclaration(): MappingDeclarationContext {
		return this.getTypedRuleContext(MappingDeclarationContext, 0) as MappingDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public inlineDeclaration(): InlineDeclarationContext {
		return this.getTypedRuleContext(InlineDeclarationContext, 0) as InlineDeclarationContext;
	}
	public transitionDeclaration(): TransitionDeclarationContext {
		return this.getTypedRuleContext(TransitionDeclarationContext, 0) as TransitionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_programItem;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterProgramItem) {
	 		listener.enterProgramItem(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitProgramItem) {
	 		listener.exitProgramItem(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LeoParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_identifier;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LeoParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_annotation;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
}


export class IntegerTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UnsignedType(): TerminalNode {
		return this.getToken(LeoParser.UnsignedType, 0);
	}
	public SignedType(): TerminalNode {
		return this.getToken(LeoParser.SignedType, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_integerType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterIntegerType) {
	 		listener.enterIntegerType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitIntegerType) {
	 		listener.exitIntegerType(this);
		}
	}
}


export class ArithmeticTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerType(): IntegerTypeContext {
		return this.getTypedRuleContext(IntegerTypeContext, 0) as IntegerTypeContext;
	}
	public FieldType(): TerminalNode {
		return this.getToken(LeoParser.FieldType, 0);
	}
	public GroupType(): TerminalNode {
		return this.getToken(LeoParser.GroupType, 0);
	}
	public ScalarType(): TerminalNode {
		return this.getToken(LeoParser.ScalarType, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_arithmeticType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterArithmeticType) {
	 		listener.enterArithmeticType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitArithmeticType) {
	 		listener.exitArithmeticType(this);
		}
	}
}


export class NamedPrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BooleanType(): TerminalNode {
		return this.getToken(LeoParser.BooleanType, 0);
	}
	public arithmeticType(): ArithmeticTypeContext {
		return this.getTypedRuleContext(ArithmeticTypeContext, 0) as ArithmeticTypeContext;
	}
	public AddressType(): TerminalNode {
		return this.getToken(LeoParser.AddressType, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_namedPrimitiveType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterNamedPrimitiveType) {
	 		listener.enterNamedPrimitiveType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitNamedPrimitiveType) {
	 		listener.exitNamedPrimitiveType(this);
		}
	}
}


export class UnitTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_unitType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterUnitType) {
	 		listener.enterUnitType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitUnitType) {
	 		listener.exitUnitType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedPrimitiveType(): NamedPrimitiveTypeContext {
		return this.getTypedRuleContext(NamedPrimitiveTypeContext, 0) as NamedPrimitiveTypeContext;
	}
	public unitType(): UnitTypeContext {
		return this.getTypedRuleContext(UnitTypeContext, 0) as UnitTypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_primitiveType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPrimitiveType) {
	 		listener.enterPrimitiveType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPrimitiveType) {
	 		listener.exitPrimitiveType(this);
		}
	}
}


export class NamedTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedPrimitiveType(): NamedPrimitiveTypeContext {
		return this.getTypedRuleContext(NamedPrimitiveTypeContext, 0) as NamedPrimitiveTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_namedType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterNamedType) {
	 		listener.enterNamedType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitNamedType) {
	 		listener.exitNamedType(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_tupleType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTupleType) {
	 		listener.enterTupleType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTupleType) {
	 		listener.exitTupleType(this);
		}
	}
}


export class UserDefinedTypeNameContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_userDefinedTypeName;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterUserDefinedTypeName) {
	 		listener.enterUserDefinedTypeName(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitUserDefinedTypeName) {
	 		listener.exitUserDefinedTypeName(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedType(): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, 0) as NamedTypeContext;
	}
	public unitType(): UnitTypeContext {
		return this.getTypedRuleContext(UnitTypeContext, 0) as UnitTypeContext;
	}
	public tupleType(): TupleTypeContext {
		return this.getTypedRuleContext(TupleTypeContext, 0) as TupleTypeContext;
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getTypedRuleContext(UserDefinedTypeNameContext, 0) as UserDefinedTypeNameContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
}


export class IntegerliteralContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Nnsignedliteral(): TerminalNode {
		return this.getToken(LeoParser.Nnsignedliteral, 0);
	}
	public Signedliteral(): TerminalNode {
		return this.getToken(LeoParser.Signedliteral, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_integerliteral;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterIntegerliteral) {
	 		listener.enterIntegerliteral(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitIntegerliteral) {
	 		listener.exitIntegerliteral(this);
		}
	}
}


export class NumericliteralContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerliteral(): IntegerliteralContext {
		return this.getTypedRuleContext(IntegerliteralContext, 0) as IntegerliteralContext;
	}
	public Fieldliteral(): TerminalNode {
		return this.getToken(LeoParser.Fieldliteral, 0);
	}
	public ProductGroupliteral(): TerminalNode {
		return this.getToken(LeoParser.ProductGroupliteral, 0);
	}
	public Scalarliteral(): TerminalNode {
		return this.getToken(LeoParser.Scalarliteral, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_numericliteral;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterNumericliteral) {
	 		listener.enterNumericliteral(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitNumericliteral) {
	 		listener.exitNumericliteral(this);
		}
	}
}


export class AtomicliteralContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericliteral(): NumericliteralContext {
		return this.getTypedRuleContext(NumericliteralContext, 0) as NumericliteralContext;
	}
	public Booleanliteral(): TerminalNode {
		return this.getToken(LeoParser.Booleanliteral, 0);
	}
	public Addressliteral(): TerminalNode {
		return this.getToken(LeoParser.Addressliteral, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_atomicliteral;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAtomicliteral) {
	 		listener.enterAtomicliteral(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAtomicliteral) {
	 		listener.exitAtomicliteral(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atomicliteral(): AtomicliteralContext {
		return this.getTypedRuleContext(AtomicliteralContext, 0) as AtomicliteralContext;
	}
	public AffineGroupliteral(): TerminalNode {
		return this.getToken(LeoParser.AffineGroupliteral, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class GroupliteralContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ProductGroupliteral(): TerminalNode {
		return this.getToken(LeoParser.ProductGroupliteral, 0);
	}
	public AffineGroupliteral(): TerminalNode {
		return this.getToken(LeoParser.AffineGroupliteral, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_groupliteral;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterGroupliteral) {
	 		listener.enterGroupliteral(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitGroupliteral) {
	 		listener.exitGroupliteral(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public associatedConstant(): AssociatedConstantContext {
		return this.getTypedRuleContext(AssociatedConstantContext, 0) as AssociatedConstantContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public freeFunctionCall(): FreeFunctionCallContext {
		return this.getTypedRuleContext(FreeFunctionCallContext, 0) as FreeFunctionCallContext;
	}
	public associatedFunctionCall(): AssociatedFunctionCallContext {
		return this.getTypedRuleContext(AssociatedFunctionCallContext, 0) as AssociatedFunctionCallContext;
	}
	public unitExpression(): UnitExpressionContext {
		return this.getTypedRuleContext(UnitExpressionContext, 0) as UnitExpressionContext;
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getTypedRuleContext(TupleExpressionContext, 0) as TupleExpressionContext;
	}
	public structExpression(): StructExpressionContext {
		return this.getTypedRuleContext(StructExpressionContext, 0) as StructExpressionContext;
	}
	public selfCaller(): SelfCallerContext {
		return this.getTypedRuleContext(SelfCallerContext, 0) as SelfCallerContext;
	}
	public blockHeight(): BlockHeightContext {
		return this.getTypedRuleContext(BlockHeightContext, 0) as BlockHeightContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_primaryExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_variable;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterVariable) {
	 		listener.enterVariable(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitVariable) {
	 		listener.exitVariable(this);
		}
	}
}


export class AssociatedConstantContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedType(): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, 0) as NamedTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_associatedConstant;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssociatedConstant) {
	 		listener.enterAssociatedConstant(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssociatedConstant) {
	 		listener.exitAssociatedConstant(this);
		}
	}
}


export class FreeFunctionCallContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public functionArguments(): FunctionArgumentsContext {
		return this.getTypedRuleContext(FunctionArgumentsContext, 0) as FunctionArgumentsContext;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_freeFunctionCall;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFreeFunctionCall) {
	 		listener.enterFreeFunctionCall(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFreeFunctionCall) {
	 		listener.exitFreeFunctionCall(this);
		}
	}
}


export class AssociatedFunctionCallContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public functionArguments(): FunctionArgumentsContext {
		return this.getTypedRuleContext(FunctionArgumentsContext, 0) as FunctionArgumentsContext;
	}
	public namedType(): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, 0) as NamedTypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_associatedFunctionCall;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssociatedFunctionCall) {
	 		listener.enterAssociatedFunctionCall(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssociatedFunctionCall) {
	 		listener.exitAssociatedFunctionCall(this);
		}
	}
}


export class FunctionArgumentsContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_functionArguments;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunctionArguments) {
	 		listener.enterFunctionArguments(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunctionArguments) {
	 		listener.exitFunctionArguments(this);
		}
	}
}


export class UnitExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_unitExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterUnitExpression) {
	 		listener.enterUnitExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitUnitExpression) {
	 		listener.exitUnitExpression(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_tupleExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTupleExpression) {
	 		listener.enterTupleExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTupleExpression) {
	 		listener.exitTupleExpression(this);
		}
	}
}


export class StructExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public structComponentInitializer_list(): StructComponentInitializerContext[] {
		return this.getTypedRuleContexts(StructComponentInitializerContext) as StructComponentInitializerContext[];
	}
	public structComponentInitializer(i: number): StructComponentInitializerContext {
		return this.getTypedRuleContext(StructComponentInitializerContext, i) as StructComponentInitializerContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_structExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStructExpression) {
	 		listener.enterStructExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStructExpression) {
	 		listener.exitStructExpression(this);
		}
	}
}


export class StructComponentInitializerContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_structComponentInitializer;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStructComponentInitializer) {
	 		listener.enterStructComponentInitializer(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStructComponentInitializer) {
	 		listener.exitStructComponentInitializer(this);
		}
	}
}


export class SelfCallerContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_selfCaller;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterSelfCaller) {
	 		listener.enterSelfCaller(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitSelfCaller) {
	 		listener.exitSelfCaller(this);
		}
	}
}


export class BlockHeightContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_blockHeight;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterBlockHeight) {
	 		listener.enterBlockHeight(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitBlockHeight) {
	 		listener.exitBlockHeight(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public useMapping(): UseMappingContext {
		return this.getTypedRuleContext(UseMappingContext, 0) as UseMappingContext;
	}
	public tupleComponentExpression(): TupleComponentExpressionContext {
		return this.getTypedRuleContext(TupleComponentExpressionContext, 0) as TupleComponentExpressionContext;
	}
	public structComponentExpression(): StructComponentExpressionContext {
		return this.getTypedRuleContext(StructComponentExpressionContext, 0) as StructComponentExpressionContext;
	}
	public methodCall(): MethodCallContext {
		return this.getTypedRuleContext(MethodCallContext, 0) as MethodCallContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_postfixExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPostfixExpression) {
	 		listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPostfixExpression) {
	 		listener.exitPostfixExpression(this);
		}
	}
}


export class TupleComponentExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Numeral(): TerminalNode {
		return this.getToken(LeoParser.Numeral, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_tupleComponentExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTupleComponentExpression) {
	 		listener.enterTupleComponentExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTupleComponentExpression) {
	 		listener.exitTupleComponentExpression(this);
		}
	}
}


export class StructComponentExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_structComponentExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStructComponentExpression) {
	 		listener.enterStructComponentExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStructComponentExpression) {
	 		listener.exitStructComponentExpression(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public functionArguments(): FunctionArgumentsContext {
		return this.getTypedRuleContext(FunctionArgumentsContext, 0) as FunctionArgumentsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_methodCall;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterMethodCall) {
	 		listener.enterMethodCall(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitMethodCall) {
	 		listener.exitMethodCall(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_unaryExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
}


export class ExponentialExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public exponentialExpression(): ExponentialExpressionContext {
		return this.getTypedRuleContext(ExponentialExpressionContext, 0) as ExponentialExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_exponentialExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterExponentialExpression) {
	 		listener.enterExponentialExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitExponentialExpression) {
	 		listener.exitExponentialExpression(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exponentialExpression(): ExponentialExpressionContext {
		return this.getTypedRuleContext(ExponentialExpressionContext, 0) as ExponentialExpressionContext;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_additiveExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_shiftExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterShiftExpression) {
	 		listener.enterShiftExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitShiftExpression) {
	 		listener.exitShiftExpression(this);
		}
	}
}


export class ConjunctiveExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public conjunctiveExpression(): ConjunctiveExpressionContext {
		return this.getTypedRuleContext(ConjunctiveExpressionContext, 0) as ConjunctiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_conjunctiveExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConjunctiveExpression) {
	 		listener.enterConjunctiveExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConjunctiveExpression) {
	 		listener.exitConjunctiveExpression(this);
		}
	}
}


export class DisjunctiveExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conjunctiveExpression(): ConjunctiveExpressionContext {
		return this.getTypedRuleContext(ConjunctiveExpressionContext, 0) as ConjunctiveExpressionContext;
	}
	public disjunctiveExpression(): DisjunctiveExpressionContext {
		return this.getTypedRuleContext(DisjunctiveExpressionContext, 0) as DisjunctiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_disjunctiveExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterDisjunctiveExpression) {
	 		listener.enterDisjunctiveExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitDisjunctiveExpression) {
	 		listener.exitDisjunctiveExpression(this);
		}
	}
}


export class ExclusiveDisjunctiveExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public disjunctiveExpression(): DisjunctiveExpressionContext {
		return this.getTypedRuleContext(DisjunctiveExpressionContext, 0) as DisjunctiveExpressionContext;
	}
	public exclusiveDisjunctiveExpression(): ExclusiveDisjunctiveExpressionContext {
		return this.getTypedRuleContext(ExclusiveDisjunctiveExpressionContext, 0) as ExclusiveDisjunctiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_exclusiveDisjunctiveExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterExclusiveDisjunctiveExpression) {
	 		listener.enterExclusiveDisjunctiveExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitExclusiveDisjunctiveExpression) {
	 		listener.exitExclusiveDisjunctiveExpression(this);
		}
	}
}


export class OrderingExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exclusiveDisjunctiveExpression_list(): ExclusiveDisjunctiveExpressionContext[] {
		return this.getTypedRuleContexts(ExclusiveDisjunctiveExpressionContext) as ExclusiveDisjunctiveExpressionContext[];
	}
	public exclusiveDisjunctiveExpression(i: number): ExclusiveDisjunctiveExpressionContext {
		return this.getTypedRuleContext(ExclusiveDisjunctiveExpressionContext, i) as ExclusiveDisjunctiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_orderingExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOrderingExpression) {
	 		listener.enterOrderingExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOrderingExpression) {
	 		listener.exitOrderingExpression(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public orderingExpression_list(): OrderingExpressionContext[] {
		return this.getTypedRuleContexts(OrderingExpressionContext) as OrderingExpressionContext[];
	}
	public orderingExpression(i: number): OrderingExpressionContext {
		return this.getTypedRuleContext(OrderingExpressionContext, i) as OrderingExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_equalityExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
}


export class ConditionalConjunctiveExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public conditionalConjunctiveExpression(): ConditionalConjunctiveExpressionContext {
		return this.getTypedRuleContext(ConditionalConjunctiveExpressionContext, 0) as ConditionalConjunctiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_conditionalConjunctiveExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConditionalConjunctiveExpression) {
	 		listener.enterConditionalConjunctiveExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConditionalConjunctiveExpression) {
	 		listener.exitConditionalConjunctiveExpression(this);
		}
	}
}


export class ConditionalDisjunctiveExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalConjunctiveExpression(): ConditionalConjunctiveExpressionContext {
		return this.getTypedRuleContext(ConditionalConjunctiveExpressionContext, 0) as ConditionalConjunctiveExpressionContext;
	}
	public conditionalDisjunctiveExpression(): ConditionalDisjunctiveExpressionContext {
		return this.getTypedRuleContext(ConditionalDisjunctiveExpressionContext, 0) as ConditionalDisjunctiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_conditionalDisjunctiveExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConditionalDisjunctiveExpression) {
	 		listener.enterConditionalDisjunctiveExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConditionalDisjunctiveExpression) {
	 		listener.exitConditionalDisjunctiveExpression(this);
		}
	}
}


export class BinaryExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalDisjunctiveExpression(): ConditionalDisjunctiveExpressionContext {
		return this.getTypedRuleContext(ConditionalDisjunctiveExpressionContext, 0) as ConditionalDisjunctiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_binaryExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterBinaryExpression) {
	 		listener.enterBinaryExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitBinaryExpression) {
	 		listener.exitBinaryExpression(this);
		}
	}
}


export class ConditionalTernaryExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public binaryExpression(): BinaryExpressionContext {
		return this.getTypedRuleContext(BinaryExpressionContext, 0) as BinaryExpressionContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_conditionalTernaryExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConditionalTernaryExpression) {
	 		listener.enterConditionalTernaryExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConditionalTernaryExpression) {
	 		listener.exitConditionalTernaryExpression(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalTernaryExpression(): ConditionalTernaryExpressionContext {
		return this.getTypedRuleContext(ConditionalTernaryExpressionContext, 0) as ConditionalTernaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_loopStatement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterLoopStatement) {
	 		listener.enterLoopStatement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitLoopStatement) {
	 		listener.exitLoopStatement(this);
		}
	}
}


export class MappingAttributesContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_mappingAttributes;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterMappingAttributes) {
	 		listener.enterMappingAttributes(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitMappingAttributes) {
	 		listener.exitMappingAttributes(this);
		}
	}
}


export class UseMappingContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mappingAttributes(): MappingAttributesContext {
		return this.getTypedRuleContext(MappingAttributesContext, 0) as MappingAttributesContext;
	}
	public functionArguments(): FunctionArgumentsContext {
		return this.getTypedRuleContext(FunctionArgumentsContext, 0) as FunctionArgumentsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_useMapping;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterUseMapping) {
	 		listener.enterUseMapping(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitUseMapping) {
	 		listener.exitUseMapping(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public useMapping(): UseMappingContext {
		return this.getTypedRuleContext(UseMappingContext, 0) as UseMappingContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public conditionalStatement(): ConditionalStatementContext {
		return this.getTypedRuleContext(ConditionalStatementContext, 0) as ConditionalStatementContext;
	}
	public loopStatement(): LoopStatementContext {
		return this.getTypedRuleContext(LoopStatementContext, 0) as LoopStatementContext;
	}
	public assignmentStatement(): AssignmentStatementContext {
		return this.getTypedRuleContext(AssignmentStatementContext, 0) as AssignmentStatementContext;
	}
	public consoleStatement(): ConsoleStatementContext {
		return this.getTypedRuleContext(ConsoleStatementContext, 0) as ConsoleStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_statement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_block;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public functionArguments(): FunctionArgumentsContext {
		return this.getTypedRuleContext(FunctionArgumentsContext, 0) as FunctionArgumentsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_returnStatement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_expressionStatement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierOrIdentifiers(): IdentifierOrIdentifiersContext {
		return this.getTypedRuleContext(IdentifierOrIdentifiersContext, 0) as IdentifierOrIdentifiersContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_variableDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
}


export class IdentifierOrIdentifiersContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_identifierOrIdentifiers;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterIdentifierOrIdentifiers) {
	 		listener.enterIdentifierOrIdentifiers(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitIdentifierOrIdentifiers) {
	 		listener.exitIdentifierOrIdentifiers(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_branch;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterBranch) {
	 		listener.enterBranch(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitBranch) {
	 		listener.exitBranch(this);
		}
	}
}


export class ConditionalStatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public branch(): BranchContext {
		return this.getTypedRuleContext(BranchContext, 0) as BranchContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public conditionalStatement(): ConditionalStatementContext {
		return this.getTypedRuleContext(ConditionalStatementContext, 0) as ConditionalStatementContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_conditionalStatement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConditionalStatement) {
	 		listener.enterConditionalStatement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConditionalStatement) {
	 		listener.exitConditionalStatement(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_assignmentOperator;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_assignmentStatement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssignmentStatement) {
	 		listener.enterAssignmentStatement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssignmentStatement) {
	 		listener.exitAssignmentStatement(this);
		}
	}
}


export class ConsoleStatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public consoleCall(): ConsoleCallContext {
		return this.getTypedRuleContext(ConsoleCallContext, 0) as ConsoleCallContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_consoleStatement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConsoleStatement) {
	 		listener.enterConsoleStatement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConsoleStatement) {
	 		listener.exitConsoleStatement(this);
		}
	}
}


export class ConsoleCallContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assertCall(): AssertCallContext {
		return this.getTypedRuleContext(AssertCallContext, 0) as AssertCallContext;
	}
	public assertEqualCall(): AssertEqualCallContext {
		return this.getTypedRuleContext(AssertEqualCallContext, 0) as AssertEqualCallContext;
	}
	public assertNotEqualCall(): AssertNotEqualCallContext {
		return this.getTypedRuleContext(AssertNotEqualCallContext, 0) as AssertNotEqualCallContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_consoleCall;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConsoleCall) {
	 		listener.enterConsoleCall(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConsoleCall) {
	 		listener.exitConsoleCall(this);
		}
	}
}


export class AssertCallContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_assertCall;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssertCall) {
	 		listener.enterAssertCall(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssertCall) {
	 		listener.exitAssertCall(this);
		}
	}
}


export class AssertEqualCallContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_assertEqualCall;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssertEqualCall) {
	 		listener.enterAssertEqualCall(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssertEqualCall) {
	 		listener.exitAssertEqualCall(this);
		}
	}
}


export class AssertNotEqualCallContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_assertNotEqualCall;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssertNotEqualCall) {
	 		listener.enterAssertNotEqualCall(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssertNotEqualCall) {
	 		listener.exitAssertNotEqualCall(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public functionParameters(): FunctionParametersContext {
		return this.getTypedRuleContext(FunctionParametersContext, 0) as FunctionParametersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_functionDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
}


export class FunctionParametersContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionParameter_list(): FunctionParameterContext[] {
		return this.getTypedRuleContexts(FunctionParameterContext) as FunctionParameterContext[];
	}
	public functionParameter(i: number): FunctionParameterContext {
		return this.getTypedRuleContext(FunctionParameterContext, i) as FunctionParameterContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_functionParameters;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunctionParameters) {
	 		listener.enterFunctionParameters(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunctionParameters) {
	 		listener.exitFunctionParameters(this);
		}
	}
}


export class FunctionParameterContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_functionParameter;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunctionParameter) {
	 		listener.enterFunctionParameter(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunctionParameter) {
	 		listener.exitFunctionParameter(this);
		}
	}
}


export class InlineDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public functionParameters(): FunctionParametersContext {
		return this.getTypedRuleContext(FunctionParametersContext, 0) as FunctionParametersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inlineDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInlineDeclaration) {
	 		listener.enterInlineDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInlineDeclaration) {
	 		listener.exitInlineDeclaration(this);
		}
	}
}


export class TransitionDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public functionParameters(): FunctionParametersContext {
		return this.getTypedRuleContext(FunctionParametersContext, 0) as FunctionParametersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public finalizer(): FinalizerContext {
		return this.getTypedRuleContext(FinalizerContext, 0) as FinalizerContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_transitionDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTransitionDeclaration) {
	 		listener.enterTransitionDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTransitionDeclaration) {
	 		listener.exitTransitionDeclaration(this);
		}
	}
}


export class FinalizerContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public functionParameters(): FunctionParametersContext {
		return this.getTypedRuleContext(FunctionParametersContext, 0) as FunctionParametersContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_finalizer;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFinalizer) {
	 		listener.enterFinalizer(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFinalizer) {
	 		listener.exitFinalizer(this);
		}
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public structComponentDeclarations(): StructComponentDeclarationsContext {
		return this.getTypedRuleContext(StructComponentDeclarationsContext, 0) as StructComponentDeclarationsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_structDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStructDeclaration) {
	 		listener.enterStructDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStructDeclaration) {
	 		listener.exitStructDeclaration(this);
		}
	}
}


export class StructComponentDeclarationsContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public structComponentDeclaration_list(): StructComponentDeclarationContext[] {
		return this.getTypedRuleContexts(StructComponentDeclarationContext) as StructComponentDeclarationContext[];
	}
	public structComponentDeclaration(i: number): StructComponentDeclarationContext {
		return this.getTypedRuleContext(StructComponentDeclarationContext, i) as StructComponentDeclarationContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_structComponentDeclarations;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStructComponentDeclarations) {
	 		listener.enterStructComponentDeclarations(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStructComponentDeclarations) {
	 		listener.exitStructComponentDeclarations(this);
		}
	}
}


export class StructComponentDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_structComponentDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStructComponentDeclaration) {
	 		listener.enterStructComponentDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStructComponentDeclaration) {
	 		listener.exitStructComponentDeclaration(this);
		}
	}
}


export class RecordDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public structComponentDeclarations(): StructComponentDeclarationsContext {
		return this.getTypedRuleContext(StructComponentDeclarationsContext, 0) as StructComponentDeclarationsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_recordDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterRecordDeclaration) {
	 		listener.enterRecordDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitRecordDeclaration) {
	 		listener.exitRecordDeclaration(this);
		}
	}
}


export class MappingDeclarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_mappingDeclaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterMappingDeclaration) {
	 		listener.enterMappingDeclaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitMappingDeclaration) {
	 		listener.exitMappingDeclaration(this);
		}
	}
}


export class FileContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importDeclaration(): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, 0) as ImportDeclarationContext;
	}
	public programDeclaration(): ProgramDeclarationContext {
		return this.getTypedRuleContext(ProgramDeclarationContext, 0) as ProgramDeclarationContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_file;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
}


export class InputTypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inputType;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInputType) {
	 		listener.enterInputType(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInputType) {
	 		listener.exitInputType(this);
		}
	}
}


export class InputExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inputExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInputExpression) {
	 		listener.enterInputExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInputExpression) {
	 		listener.exitInputExpression(this);
		}
	}
}


export class InputItemContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public inputType(): InputTypeContext {
		return this.getTypedRuleContext(InputTypeContext, 0) as InputTypeContext;
	}
	public inputExpression(): InputExpressionContext {
		return this.getTypedRuleContext(InputExpressionContext, 0) as InputExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inputItem;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInputItem) {
	 		listener.enterInputItem(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInputItem) {
	 		listener.exitInputItem(this);
		}
	}
}


export class InputTitleContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inputTitle;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInputTitle) {
	 		listener.enterInputTitle(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInputTitle) {
	 		listener.exitInputTitle(this);
		}
	}
}


export class InputSectionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inputTitle(): InputTitleContext {
		return this.getTypedRuleContext(InputTitleContext, 0) as InputTitleContext;
	}
	public inputItem(): InputItemContext {
		return this.getTypedRuleContext(InputItemContext, 0) as InputItemContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inputSection;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInputSection) {
	 		listener.enterInputSection(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInputSection) {
	 		listener.exitInputSection(this);
		}
	}
}


export class InputFileContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inputSection(): InputSectionContext {
		return this.getTypedRuleContext(InputSectionContext, 0) as InputSectionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inputFile;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInputFile) {
	 		listener.enterInputFile(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInputFile) {
	 		listener.exitInputFile(this);
		}
	}
}


export class OutputExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_outputExpression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutputExpression) {
	 		listener.enterOutputExpression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutputExpression) {
	 		listener.exitOutputExpression(this);
		}
	}
}


export class OutputItemContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputExpression(): OutputExpressionContext {
		return this.getTypedRuleContext(OutputExpressionContext, 0) as OutputExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_outputItem;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutputItem) {
	 		listener.enterOutputItem(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutputItem) {
	 		listener.exitOutputItem(this);
		}
	}
}


export class OutputTitleContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_outputTitle;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutputTitle) {
	 		listener.enterOutputTitle(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutputTitle) {
	 		listener.exitOutputTitle(this);
		}
	}
}


export class OutputSectionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputTitle(): OutputTitleContext {
		return this.getTypedRuleContext(OutputTitleContext, 0) as OutputTitleContext;
	}
	public outputItem(): OutputItemContext {
		return this.getTypedRuleContext(OutputItemContext, 0) as OutputItemContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_outputSection;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutputSection) {
	 		listener.enterOutputSection(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutputSection) {
	 		listener.exitOutputSection(this);
		}
	}
}


export class OutputFileContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputSection(): OutputSectionContext {
		return this.getTypedRuleContext(OutputSectionContext, 0) as OutputSectionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_outputFile;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutputFile) {
	 		listener.enterOutputFile(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutputFile) {
	 		listener.exitOutputFile(this);
		}
	}
}
