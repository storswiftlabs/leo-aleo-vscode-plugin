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
	public static readonly THEN = 86;
	public static readonly Identifier = 87;
	public static readonly Digit = 88;
	public static readonly BOOLEAN_LITERAL = 89;
	public static readonly UNSIGNED_TYPE = 90;
	public static readonly SIGNED_TYPE = 91;
	public static readonly FIELD_TYPE = 92;
	public static readonly GROUP_TYPE = 93;
	public static readonly SCALAR_TYPE = 94;
	public static readonly BOOLEAN_TYPE = 95;
	public static readonly ADDRESS_TYPE = 96;
	public static readonly SELF_CALLER = 97;
	public static readonly BLOCK_HEIGHT = 98;
	public static readonly INPUT_TITLE = 99;
	public static readonly OUTPUT_TITLE = 100;
	public static readonly WS = 101;
	public static readonly COMMENT = 102;
	public static readonly LINE_COMMENT = 103;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_letter = 0;
	public static readonly RULE_bhp = 1;
	public static readonly RULE_pedersen = 2;
	public static readonly RULE_poseidon = 3;
	public static readonly RULE_identifier = 4;
	public static readonly RULE_numeral = 5;
	public static readonly RULE_unsigned_literal = 6;
	public static readonly RULE_signed_literal = 7;
	public static readonly RULE_field_literal = 8;
	public static readonly RULE_product_group_literal = 9;
	public static readonly RULE_scalar_literal = 10;
	public static readonly RULE_address_literal = 11;
	public static readonly RULE_addr_identifier = 12;
	public static readonly RULE_integer_literal = 13;
	public static readonly RULE_numeric_literal = 14;
	public static readonly RULE_atomic_literal = 15;
	public static readonly RULE_annotation = 16;
	public static readonly RULE_program_id = 17;
	public static readonly RULE_locator = 18;
	public static readonly RULE_integer_type = 19;
	public static readonly RULE_arithmetic_type = 20;
	public static readonly RULE_named_primitive_type = 21;
	public static readonly RULE_primitive_type = 22;
	public static readonly RULE_named_type = 23;
	public static readonly RULE_tuple_type = 24;
	public static readonly RULE_type = 25;
	public static readonly RULE_group_coordinate = 26;
	public static readonly RULE_affine_group_literal = 27;
	public static readonly RULE_literal = 28;
	public static readonly RULE_group_literal = 29;
	public static readonly RULE_primary_expression = 30;
	public static readonly RULE_variable = 31;
	public static readonly RULE_associated_constant = 32;
	public static readonly RULE_free_function_call = 33;
	public static readonly RULE_associated_function_call = 34;
	public static readonly RULE_function_arguments = 35;
	public static readonly RULE_tuple_expression = 36;
	public static readonly RULE_struct_expression = 37;
	public static readonly RULE_struct_component_initializer = 38;
	public static readonly RULE_postfix_expression = 39;
	public static readonly RULE_tuple_component_expression = 40;
	public static readonly RULE_struct_component_expression = 41;
	public static readonly RULE_method_call = 42;
	public static readonly RULE_expression = 43;
	public static readonly RULE_mappingAttributes = 44;
	public static readonly RULE_useMapping = 45;
	public static readonly RULE_chacha = 46;
	public static readonly RULE_associatedFunctionCall = 47;
	public static readonly RULE_statement = 48;
	public static readonly RULE_block = 49;
	public static readonly RULE_return_statement = 50;
	public static readonly RULE_expression_statement = 51;
	public static readonly RULE_variable_declaration = 52;
	public static readonly RULE_identifier_or_identifiers = 53;
	public static readonly RULE_branch = 54;
	public static readonly RULE_conditional_statement = 55;
	public static readonly RULE_loop_statement = 56;
	public static readonly RULE_console_statement = 57;
	public static readonly RULE_console_call = 58;
	public static readonly RULE_assert_call = 59;
	public static readonly RULE_assert_equal_call = 60;
	public static readonly RULE_assert_not_equal_call = 61;
	public static readonly RULE_function_declaration = 62;
	public static readonly RULE_function_parameters = 63;
	public static readonly RULE_function_parameter = 64;
	public static readonly RULE_inline_declaration = 65;
	public static readonly RULE_transition_declaration = 66;
	public static readonly RULE_finalizer = 67;
	public static readonly RULE_struct_declaration = 68;
	public static readonly RULE_struct_component_declarations = 69;
	public static readonly RULE_struct_component_declaration = 70;
	public static readonly RULE_record_declaration = 71;
	public static readonly RULE_mapping_declaration = 72;
	public static readonly RULE_program_item = 73;
	public static readonly RULE_program_declaration = 74;
	public static readonly RULE_import_declaration = 75;
	public static readonly RULE_sourceUnit = 76;
	public static readonly RULE_input_type = 77;
	public static readonly RULE_input_expression = 78;
	public static readonly RULE_input_item = 79;
	public static readonly RULE_input_section = 80;
	public static readonly RULE_input_file = 81;
	public static readonly RULE_output_expression = 82;
	public static readonly RULE_output_item = 83;
	public static readonly RULE_output_section = 84;
	public static readonly RULE_output_file = 85;
	public static readonly literalNames: (string | null)[] = [ null, "'BHP256'", 
                                                            "'BHP512'", 
                                                            "'BHP768'", 
                                                            "'BHP1024'", 
                                                            "'::'", "'Pedersen64'", 
                                                            "'Pedersen128'", 
                                                            "'Poseidon2'", 
                                                            "'Poseidon4'", 
                                                            "'Poseidon8'", 
                                                            "'_'", "'aleo1'", 
                                                            "'@'", "'.'", 
                                                            "'/'", "'('", 
                                                            "')'", "'record'", 
                                                            "','", "'-'", 
                                                            "'+'", "')group'", 
                                                            "':'", "'{'", 
                                                            "'}'", "'!'", 
                                                            "'~'", "'**'", 
                                                            "'*'", "'%'", 
                                                            "'<<'", "'>>'", 
                                                            "'&'", "'|'", 
                                                            "'^'", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'=='", 
                                                            "'!='", "'&&'", 
                                                            "'||'", "'?'", 
                                                            "'='", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'**='", "'<<='", 
                                                            "'>>='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'&&='", "'||='", 
                                                            "'get_or_use'", 
                                                            "'set'", "'get'", 
                                                            "'Mapping::'", 
                                                            "'ChaCha'", 
                                                            "'return'", 
                                                            "'finalize'", 
                                                            "';'", "'let'", 
                                                            "'if'", "'else'", 
                                                            "'for'", "'in'", 
                                                            "'console'", 
                                                            "'assert'", 
                                                            "'assert_eq'", 
                                                            "'assert_neq'", 
                                                            "'function'", 
                                                            "'public'", 
                                                            "'private'", 
                                                            "'constant'", 
                                                            "'inline'", 
                                                            "'transition'", 
                                                            "'struct'", 
                                                            "'mapping'", 
                                                            "'program'", 
                                                            "'import'", 
                                                            "'then'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'field'", "'group'", 
                                                            "'scalar'", 
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
                                                             "THEN", "Identifier", 
                                                             "Digit", "BOOLEAN_LITERAL", 
                                                             "UNSIGNED_TYPE", 
                                                             "SIGNED_TYPE", 
                                                             "FIELD_TYPE", 
                                                             "GROUP_TYPE", 
                                                             "SCALAR_TYPE", 
                                                             "BOOLEAN_TYPE", 
                                                             "ADDRESS_TYPE", 
                                                             "SELF_CALLER", 
                                                             "BLOCK_HEIGHT", 
                                                             "INPUT_TITLE", 
                                                             "OUTPUT_TITLE", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"letter", "bhp", "pedersen", "poseidon", "identifier", "numeral", "unsigned_literal", 
		"signed_literal", "field_literal", "product_group_literal", "scalar_literal", 
		"address_literal", "addr_identifier", "integer_literal", "numeric_literal", 
		"atomic_literal", "annotation", "program_id", "locator", "integer_type", 
		"arithmetic_type", "named_primitive_type", "primitive_type", "named_type", 
		"tuple_type", "type", "group_coordinate", "affine_group_literal", "literal", 
		"group_literal", "primary_expression", "variable", "associated_constant", 
		"free_function_call", "associated_function_call", "function_arguments", 
		"tuple_expression", "struct_expression", "struct_component_initializer", 
		"postfix_expression", "tuple_component_expression", "struct_component_expression", 
		"method_call", "expression", "mappingAttributes", "useMapping", "chacha", 
		"associatedFunctionCall", "statement", "block", "return_statement", "expression_statement", 
		"variable_declaration", "identifier_or_identifiers", "branch", "conditional_statement", 
		"loop_statement", "console_statement", "console_call", "assert_call", 
		"assert_equal_call", "assert_not_equal_call", "function_declaration", 
		"function_parameters", "function_parameter", "inline_declaration", "transition_declaration", 
		"finalizer", "struct_declaration", "struct_component_declarations", "struct_component_declaration", 
		"record_declaration", "mapping_declaration", "program_item", "program_declaration", 
		"import_declaration", "sourceUnit", "input_type", "input_expression", 
		"input_item", "input_section", "input_file", "output_expression", "output_item", 
		"output_section", "output_file",
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
	public letter(): LetterContext {
		let localctx: LetterContext = new LetterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LeoParser.RULE_letter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
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
	public bhp(): BhpContext {
		let localctx: BhpContext = new BhpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LeoParser.RULE_bhp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 175;
			this.match(LeoParser.T__4);
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
	public pedersen(): PedersenContext {
		let localctx: PedersenContext = new PedersenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LeoParser.RULE_pedersen);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===7)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 178;
			this.match(LeoParser.T__4);
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
	public poseidon(): PoseidonContext {
		let localctx: PoseidonContext = new PoseidonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LeoParser.RULE_poseidon);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 181;
			this.match(LeoParser.T__4);
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
		this.enterRule(localctx, 8, LeoParser.RULE_identifier);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this.letter();
			this.state = 189;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 187;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 87:
						{
						this.state = 184;
						this.letter();
						}
						break;
					case 88:
						{
						this.state = 185;
						this.match(LeoParser.Digit);
						}
						break;
					case 11:
						{
						this.state = 186;
						this.match(LeoParser.T__10);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
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
	public numeral(): NumeralContext {
		let localctx: NumeralContext = new NumeralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LeoParser.RULE_numeral);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 192;
					this.match(LeoParser.Digit);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public unsigned_literal(): Unsigned_literalContext {
		let localctx: Unsigned_literalContext = new Unsigned_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LeoParser.RULE_unsigned_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.numeral();
			this.state = 198;
			this.match(LeoParser.UNSIGNED_TYPE);
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
	public signed_literal(): Signed_literalContext {
		let localctx: Signed_literalContext = new Signed_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LeoParser.RULE_signed_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this.numeral();
			this.state = 201;
			this.match(LeoParser.SIGNED_TYPE);
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
	public field_literal(): Field_literalContext {
		let localctx: Field_literalContext = new Field_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LeoParser.RULE_field_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.numeral();
			this.state = 204;
			this.match(LeoParser.FIELD_TYPE);
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
	public product_group_literal(): Product_group_literalContext {
		let localctx: Product_group_literalContext = new Product_group_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LeoParser.RULE_product_group_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			this.numeral();
			this.state = 207;
			this.match(LeoParser.GROUP_TYPE);
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
	public scalar_literal(): Scalar_literalContext {
		let localctx: Scalar_literalContext = new Scalar_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LeoParser.RULE_scalar_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 209;
			this.numeral();
			this.state = 210;
			this.match(LeoParser.SCALAR_TYPE);
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
	public address_literal(): Address_literalContext {
		let localctx: Address_literalContext = new Address_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LeoParser.RULE_address_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.addr_identifier();
			this.state = 213;
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
	public addr_identifier(): Addr_identifierContext {
		let localctx: Addr_identifierContext = new Addr_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LeoParser.RULE_addr_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this.match(LeoParser.T__11);
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
	public integer_literal(): Integer_literalContext {
		let localctx: Integer_literalContext = new Integer_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LeoParser.RULE_integer_literal);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 217;
				this.unsigned_literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 218;
				this.signed_literal();
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
	public numeric_literal(): Numeric_literalContext {
		let localctx: Numeric_literalContext = new Numeric_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LeoParser.RULE_numeric_literal);
		try {
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 221;
				this.integer_literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 222;
				this.field_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 223;
				this.product_group_literal();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 224;
				this.scalar_literal();
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
	public atomic_literal(): Atomic_literalContext {
		let localctx: Atomic_literalContext = new Atomic_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LeoParser.RULE_atomic_literal);
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 88:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 227;
				this.numeric_literal();
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 228;
				this.match(LeoParser.BOOLEAN_LITERAL);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 229;
				this.address_literal();
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
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LeoParser.RULE_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			this.match(LeoParser.T__12);
			this.state = 233;
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
	public program_id(): Program_idContext {
		let localctx: Program_idContext = new Program_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LeoParser.RULE_program_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 235;
			this.identifier();
			this.state = 236;
			this.match(LeoParser.T__13);
			this.state = 237;
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
		this.enterRule(localctx, 36, LeoParser.RULE_locator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this.program_id();
			this.state = 240;
			this.match(LeoParser.T__14);
			this.state = 241;
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
	public integer_type(): Integer_typeContext {
		let localctx: Integer_typeContext = new Integer_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LeoParser.RULE_integer_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
			_la = this._input.LA(1);
			if(!(_la===90 || _la===91)) {
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
	public arithmetic_type(): Arithmetic_typeContext {
		let localctx: Arithmetic_typeContext = new Arithmetic_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LeoParser.RULE_arithmetic_type);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
			case 91:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 245;
				this.integer_type();
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 246;
				this.match(LeoParser.FIELD_TYPE);
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 247;
				this.match(LeoParser.GROUP_TYPE);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 248;
				this.match(LeoParser.SCALAR_TYPE);
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
	public named_primitive_type(): Named_primitive_typeContext {
		let localctx: Named_primitive_typeContext = new Named_primitive_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LeoParser.RULE_named_primitive_type);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 251;
				this.match(LeoParser.BOOLEAN_TYPE);
				}
				break;
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 252;
				this.arithmetic_type();
				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 253;
				this.match(LeoParser.ADDRESS_TYPE);
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
	public primitive_type(): Primitive_typeContext {
		let localctx: Primitive_typeContext = new Primitive_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LeoParser.RULE_primitive_type);
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 256;
				this.named_primitive_type();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 257;
				this.match(LeoParser.T__15);
				this.state = 258;
				this.match(LeoParser.T__16);
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
	public named_type(): Named_typeContext {
		let localctx: Named_typeContext = new Named_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, LeoParser.RULE_named_type);
		let _la: number;
		try {
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 261;
				this.named_primitive_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 262;
				this.identifier();
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 263;
					this.match(LeoParser.T__13);
					this.state = 264;
					this.match(LeoParser.T__17);
					}
				}

				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 267;
				this.locator();
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 268;
					this.match(LeoParser.T__13);
					this.state = 269;
					this.match(LeoParser.T__17);
					}
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
	public tuple_type(): Tuple_typeContext {
		let localctx: Tuple_typeContext = new Tuple_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LeoParser.RULE_tuple_type);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 274;
			this.match(LeoParser.T__15);
			this.state = 275;
			this.type_();
			this.state = 278;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 276;
					this.match(LeoParser.T__18);
					this.state = 277;
					this.type_();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 280;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 282;
				this.match(LeoParser.T__18);
				}
			}

			this.state = 285;
			this.match(LeoParser.T__16);
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
		this.enterRule(localctx, 50, LeoParser.RULE_type);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 287;
				this.named_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 288;
				this.match(LeoParser.T__15);
				this.state = 289;
				this.match(LeoParser.T__16);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 290;
				this.tuple_type();
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
	public group_coordinate(): Group_coordinateContext {
		let localctx: Group_coordinateContext = new Group_coordinateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LeoParser.RULE_group_coordinate);
		let _la: number;
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 293;
					this.match(LeoParser.T__19);
					}
				}

				this.state = 296;
				this.numeral();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 297;
				this.match(LeoParser.T__20);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 298;
				this.match(LeoParser.T__19);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 299;
				this.match(LeoParser.T__10);
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
	public affine_group_literal(): Affine_group_literalContext {
		let localctx: Affine_group_literalContext = new Affine_group_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LeoParser.RULE_affine_group_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.match(LeoParser.T__15);
			this.state = 303;
			this.group_coordinate();
			this.state = 304;
			this.match(LeoParser.T__18);
			this.state = 305;
			this.group_coordinate();
			this.state = 306;
			this.match(LeoParser.T__21);
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
		this.enterRule(localctx, 56, LeoParser.RULE_literal);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 88:
			case 89:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 308;
				this.atomic_literal();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 309;
				this.affine_group_literal();
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
	public group_literal(): Group_literalContext {
		let localctx: Group_literalContext = new Group_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LeoParser.RULE_group_literal);
		try {
			this.state = 314;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 88:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 312;
				this.product_group_literal();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 313;
				this.affine_group_literal();
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
	public primary_expression(): Primary_expressionContext {
		let localctx: Primary_expressionContext = new Primary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, LeoParser.RULE_primary_expression);
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 316;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 317;
				this.variable();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 318;
				this.associated_constant();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 319;
				this.match(LeoParser.T__15);
				this.state = 320;
				this.expression(0);
				this.state = 321;
				this.match(LeoParser.T__16);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 323;
				this.free_function_call();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 324;
				this.associated_function_call();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 325;
				this.match(LeoParser.T__15);
				this.state = 326;
				this.match(LeoParser.T__16);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 327;
				this.tuple_expression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 328;
				this.struct_expression();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 329;
				this.match(LeoParser.SELF_CALLER);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 330;
				this.match(LeoParser.BLOCK_HEIGHT);
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
		this.enterRule(localctx, 62, LeoParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
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
	public associated_constant(): Associated_constantContext {
		let localctx: Associated_constantContext = new Associated_constantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, LeoParser.RULE_associated_constant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 335;
			this.named_type();
			{
			this.state = 336;
			this.match(LeoParser.T__22);
			this.state = 337;
			this.match(LeoParser.T__22);
			}
			this.state = 339;
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
	public free_function_call(): Free_function_callContext {
		let localctx: Free_function_callContext = new Free_function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LeoParser.RULE_free_function_call);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 341;
				this.identifier();
				this.state = 342;
				this.function_arguments();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 344;
				this.locator();
				this.state = 345;
				this.function_arguments();
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
	public associated_function_call(): Associated_function_callContext {
		let localctx: Associated_function_callContext = new Associated_function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LeoParser.RULE_associated_function_call);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			this.named_type();
			{
			this.state = 350;
			this.match(LeoParser.T__22);
			this.state = 351;
			this.match(LeoParser.T__22);
			}
			this.state = 353;
			this.identifier();
			this.state = 354;
			this.function_arguments();
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
	public function_arguments(): Function_argumentsContext {
		let localctx: Function_argumentsContext = new Function_argumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, LeoParser.RULE_function_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 356;
				this.match(LeoParser.T__15);
				{
				this.state = 357;
				this.expression(0);
				this.state = 362;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 358;
						this.match(LeoParser.T__18);
						this.state = 359;
						this.expression(0);
						}
						}
					}
					this.state = 364;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 365;
					this.match(LeoParser.T__18);
					}
				}

				}
				this.state = 368;
				this.match(LeoParser.T__16);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 370;
				this.match(LeoParser.T__15);
				this.state = 371;
				this.match(LeoParser.T__16);
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
	public tuple_expression(): Tuple_expressionContext {
		let localctx: Tuple_expressionContext = new Tuple_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, LeoParser.RULE_tuple_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.match(LeoParser.T__15);
			this.state = 375;
			this.expression(0);
			this.state = 378;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 376;
					this.match(LeoParser.T__18);
					this.state = 377;
					this.expression(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 380;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 382;
				this.match(LeoParser.T__18);
				}
			}

			this.state = 385;
			this.match(LeoParser.T__16);
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
	public struct_expression(): Struct_expressionContext {
		let localctx: Struct_expressionContext = new Struct_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, LeoParser.RULE_struct_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 387;
			this.identifier();
			this.state = 388;
			this.match(LeoParser.T__23);
			this.state = 389;
			this.struct_component_initializer();
			this.state = 394;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 390;
					this.match(LeoParser.T__18);
					this.state = 391;
					this.struct_component_initializer();
					}
					}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 397;
				this.match(LeoParser.T__18);
				}
			}

			this.state = 400;
			this.match(LeoParser.T__24);
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
	public struct_component_initializer(): Struct_component_initializerContext {
		let localctx: Struct_component_initializerContext = new Struct_component_initializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, LeoParser.RULE_struct_component_initializer);
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 402;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 403;
				this.identifier();
				this.state = 404;
				this.match(LeoParser.T__22);
				this.state = 405;
				this.expression(0);
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
	public postfix_expression(): Postfix_expressionContext {
		let localctx: Postfix_expressionContext = new Postfix_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, LeoParser.RULE_postfix_expression);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 409;
				this.primary_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 410;
				this.useMapping();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 411;
				this.chacha();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 412;
				this.associatedFunctionCall();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 413;
				this.tuple_component_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 414;
				this.struct_component_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 415;
				this.method_call();
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
	public tuple_component_expression(): Tuple_component_expressionContext {
		let localctx: Tuple_component_expressionContext = new Tuple_component_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, LeoParser.RULE_tuple_component_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 418;
			this.identifier();
			this.state = 419;
			this.match(LeoParser.T__13);
			this.state = 420;
			this.numeral();
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
	public struct_component_expression(): Struct_component_expressionContext {
		let localctx: Struct_component_expressionContext = new Struct_component_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, LeoParser.RULE_struct_component_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 422;
			this.identifier();
			this.state = 425;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 423;
					this.match(LeoParser.T__13);
					this.state = 424;
					this.identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 427;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public method_call(): Method_callContext {
		let localctx: Method_callContext = new Method_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, LeoParser.RULE_method_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 429;
			this.identifier();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 430;
				this.match(LeoParser.T__13);
				this.state = 431;
				this.identifier();
				}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===14);
			this.state = 436;
			this.function_arguments();
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 86;
		this.enterRecursionRule(localctx, 86, LeoParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 443;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 439;
				this.postfix_expression();
				}
				break;
			case 2:
				{
				this.state = 440;
				_la = this._input.LA(1);
				if(!(_la===26 || _la===27)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 441;
				this.expression(15);
				}
				break;
			case 3:
				{
				this.state = 442;
				this.primary_expression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 489;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 487;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 445;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 446;
						this.match(LeoParser.T__27);
						this.state = 447;
						this.expression(15);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 448;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 449;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1610645504) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 450;
						this.expression(14);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 451;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 452;
						_la = this._input.LA(1);
						if(!(_la===20 || _la===21)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 453;
						this.expression(13);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 454;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 455;
						_la = this._input.LA(1);
						if(!(_la===31 || _la===32)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 456;
						this.expression(12);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 457;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 458;
						this.match(LeoParser.T__32);
						this.state = 459;
						this.expression(11);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 460;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 461;
						this.match(LeoParser.T__33);
						this.state = 462;
						this.expression(10);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 463;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 464;
						this.match(LeoParser.T__34);
						this.state = 465;
						this.expression(9);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 466;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 467;
						_la = this._input.LA(1);
						if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 468;
						this.expression(8);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 469;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 470;
						_la = this._input.LA(1);
						if(!(_la===40 || _la===41)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 471;
						this.expression(7);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 472;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 473;
						this.match(LeoParser.T__41);
						this.state = 474;
						this.expression(6);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 475;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 476;
						this.match(LeoParser.T__42);
						this.state = 477;
						this.expression(5);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 478;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 479;
						this.match(LeoParser.T__43);
						this.state = 480;
						this.expression(0);
						this.state = 481;
						this.match(LeoParser.T__22);
						this.state = 482;
						this.expression(4);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LeoParser.RULE_expression);
						this.state = 484;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 485;
						_la = this._input.LA(1);
						if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 16383) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 486;
						this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 491;
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
	// @RuleVersion(0)
	public mappingAttributes(): MappingAttributesContext {
		let localctx: MappingAttributesContext = new MappingAttributesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, LeoParser.RULE_mappingAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 492;
			_la = this._input.LA(1);
			if(!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 7) !== 0))) {
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
		this.enterRule(localctx, 90, LeoParser.RULE_useMapping);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 494;
			this.match(LeoParser.T__61);
			this.state = 495;
			this.mappingAttributes();
			this.state = 496;
			this.function_arguments();
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
	public chacha(): ChachaContext {
		let localctx: ChachaContext = new ChachaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, LeoParser.RULE_chacha);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.match(LeoParser.T__62);
			this.state = 499;
			this.match(LeoParser.T__4);
			this.state = 500;
			this.identifier();
			this.state = 501;
			this.function_arguments();
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
		this.enterRule(localctx, 94, LeoParser.RULE_associatedFunctionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 506;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
				{
				this.state = 503;
				this.bhp();
				}
				break;
			case 6:
			case 7:
				{
				this.state = 504;
				this.pedersen();
				}
				break;
			case 8:
			case 9:
			case 10:
				{
				this.state = 505;
				this.poseidon();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 508;
			this.identifier();
			this.state = 509;
			this.function_arguments();
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
		this.enterRule(localctx, 96, LeoParser.RULE_statement);
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 511;
				this.useMapping();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 512;
				this.expression_statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 513;
				this.variable_declaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 514;
				this.conditional_statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 515;
				this.loop_statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 516;
				this.console_statement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 517;
				this.return_statement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 518;
				this.block();
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
		this.enterRule(localctx, 98, LeoParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 521;
			this.match(LeoParser.T__23);
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 218175454) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & 4261428583) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 31) !== 0)) {
				{
				{
				this.state = 522;
				this.statement();
				}
				}
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 528;
			this.match(LeoParser.T__24);
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
	public return_statement(): Return_statementContext {
		let localctx: Return_statementContext = new Return_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, LeoParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 530;
			this.match(LeoParser.T__63);
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201398238) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & 4261412867) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 31) !== 0)) {
				{
				{
				this.state = 531;
				this.expression(0);
				}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===86) {
				{
				this.state = 537;
				this.match(LeoParser.THEN);
				this.state = 538;
				this.match(LeoParser.T__64);
				this.state = 539;
				this.function_arguments();
				}
			}

			this.state = 542;
			this.match(LeoParser.T__65);
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
	public expression_statement(): Expression_statementContext {
		let localctx: Expression_statementContext = new Expression_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, LeoParser.RULE_expression_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 544;
			this.expression(0);
			this.state = 545;
			this.match(LeoParser.T__65);
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
	public variable_declaration(): Variable_declarationContext {
		let localctx: Variable_declarationContext = new Variable_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, LeoParser.RULE_variable_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 547;
			this.match(LeoParser.T__66);
			this.state = 548;
			this.identifier_or_identifiers();
			this.state = 549;
			this.match(LeoParser.T__22);
			this.state = 550;
			this.type_();
			this.state = 551;
			this.match(LeoParser.T__44);
			this.state = 552;
			this.expression(0);
			this.state = 553;
			this.match(LeoParser.T__65);
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
	public identifier_or_identifiers(): Identifier_or_identifiersContext {
		let localctx: Identifier_or_identifiersContext = new Identifier_or_identifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, LeoParser.RULE_identifier_or_identifiers);
		let _la: number;
		try {
			let _alt: number;
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 87:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 555;
				this.identifier();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 556;
				this.match(LeoParser.T__15);
				this.state = 557;
				this.identifier();
				this.state = 560;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 558;
						this.match(LeoParser.T__18);
						this.state = 559;
						this.identifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 562;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 564;
					this.match(LeoParser.T__18);
					}
				}

				this.state = 567;
				this.match(LeoParser.T__16);
				}
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
		this.enterRule(localctx, 108, LeoParser.RULE_branch);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 571;
			this.match(LeoParser.T__67);
			this.state = 572;
			this.expression(0);
			this.state = 573;
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
	public conditional_statement(): Conditional_statementContext {
		let localctx: Conditional_statementContext = new Conditional_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, LeoParser.RULE_conditional_statement);
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 575;
				this.branch();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 576;
				this.branch();
				this.state = 577;
				this.match(LeoParser.T__68);
				this.state = 578;
				this.block();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 580;
				this.branch();
				this.state = 581;
				this.match(LeoParser.T__68);
				this.state = 582;
				this.conditional_statement();
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
	public loop_statement(): Loop_statementContext {
		let localctx: Loop_statementContext = new Loop_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, LeoParser.RULE_loop_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 586;
			this.match(LeoParser.T__69);
			this.state = 587;
			this.identifier();
			this.state = 588;
			this.match(LeoParser.T__22);
			this.state = 589;
			this.type_();
			this.state = 590;
			this.match(LeoParser.T__70);
			this.state = 591;
			this.expression(0);
			{
			this.state = 592;
			this.match(LeoParser.T__13);
			this.state = 593;
			this.match(LeoParser.T__13);
			}
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 595;
				this.match(LeoParser.T__44);
				}
			}

			this.state = 598;
			this.expression(0);
			this.state = 599;
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
	public console_statement(): Console_statementContext {
		let localctx: Console_statementContext = new Console_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, LeoParser.RULE_console_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===72) {
				{
				this.state = 601;
				this.match(LeoParser.T__71);
				this.state = 602;
				this.match(LeoParser.T__13);
				}
			}

			this.state = 605;
			this.console_call();
			this.state = 606;
			this.match(LeoParser.T__65);
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
	public console_call(): Console_callContext {
		let localctx: Console_callContext = new Console_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, LeoParser.RULE_console_call);
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 608;
				this.assert_call();
				}
				break;
			case 74:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 609;
				this.assert_equal_call();
				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 610;
				this.assert_not_equal_call();
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
	public assert_call(): Assert_callContext {
		let localctx: Assert_callContext = new Assert_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, LeoParser.RULE_assert_call);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 613;
			this.match(LeoParser.T__72);
			this.state = 614;
			this.match(LeoParser.T__15);
			this.state = 615;
			this.expression(0);
			this.state = 616;
			this.match(LeoParser.T__16);
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
	public assert_equal_call(): Assert_equal_callContext {
		let localctx: Assert_equal_callContext = new Assert_equal_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, LeoParser.RULE_assert_equal_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.match(LeoParser.T__73);
			this.state = 619;
			this.match(LeoParser.T__15);
			this.state = 620;
			this.expression(0);
			this.state = 621;
			this.match(LeoParser.T__18);
			this.state = 622;
			this.expression(0);
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 623;
				this.match(LeoParser.T__18);
				}
			}

			this.state = 626;
			this.match(LeoParser.T__16);
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
	public assert_not_equal_call(): Assert_not_equal_callContext {
		let localctx: Assert_not_equal_callContext = new Assert_not_equal_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, LeoParser.RULE_assert_not_equal_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 628;
			this.match(LeoParser.T__74);
			this.state = 629;
			this.match(LeoParser.T__15);
			this.state = 630;
			this.expression(0);
			this.state = 631;
			this.match(LeoParser.T__18);
			this.state = 632;
			this.expression(0);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 633;
				this.match(LeoParser.T__18);
				}
			}

			this.state = 636;
			this.match(LeoParser.T__16);
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
	public function_declaration(): Function_declarationContext {
		let localctx: Function_declarationContext = new Function_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, LeoParser.RULE_function_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 638;
				this.annotation();
				}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 644;
			this.match(LeoParser.T__75);
			this.state = 645;
			this.identifier();
			this.state = 646;
			this.match(LeoParser.T__15);
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 1031) !== 0)) {
				{
				this.state = 647;
				this.function_parameters();
				}
			}

			this.state = 650;
			this.match(LeoParser.T__16);
			this.state = 655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				{
				this.state = 651;
				this.match(LeoParser.T__19);
				this.state = 652;
				this.match(LeoParser.T__36);
				}
				this.state = 654;
				this.type_();
				}
			}

			this.state = 657;
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
	public function_parameters(): Function_parametersContext {
		let localctx: Function_parametersContext = new Function_parametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, LeoParser.RULE_function_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 659;
			this.function_parameter();
			this.state = 664;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 660;
					this.match(LeoParser.T__18);
					this.state = 661;
					this.function_parameter();
					}
					}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 667;
				this.match(LeoParser.T__18);
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
	public function_parameter(): Function_parameterContext {
		let localctx: Function_parameterContext = new Function_parameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, LeoParser.RULE_function_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0)) {
				{
				this.state = 670;
				_la = this._input.LA(1);
				if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 673;
			this.identifier();
			this.state = 674;
			this.match(LeoParser.T__22);
			this.state = 675;
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
	public inline_declaration(): Inline_declarationContext {
		let localctx: Inline_declarationContext = new Inline_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, LeoParser.RULE_inline_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 677;
				this.annotation();
				}
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 683;
			this.match(LeoParser.T__79);
			this.state = 684;
			this.identifier();
			this.state = 685;
			this.match(LeoParser.T__15);
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 1031) !== 0)) {
				{
				this.state = 686;
				this.function_parameters();
				}
			}

			this.state = 689;
			this.match(LeoParser.T__16);
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				{
				this.state = 690;
				this.match(LeoParser.T__19);
				this.state = 691;
				this.match(LeoParser.T__36);
				}
				this.state = 693;
				this.type_();
				}
			}

			this.state = 696;
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
	public transition_declaration(): Transition_declarationContext {
		let localctx: Transition_declarationContext = new Transition_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, LeoParser.RULE_transition_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 698;
				this.annotation();
				}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 704;
			this.match(LeoParser.T__80);
			this.state = 705;
			this.identifier();
			this.state = 706;
			this.match(LeoParser.T__15);
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 1031) !== 0)) {
				{
				this.state = 707;
				this.function_parameters();
				}
			}

			this.state = 710;
			this.match(LeoParser.T__16);
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				{
				this.state = 711;
				this.match(LeoParser.T__19);
				this.state = 712;
				this.match(LeoParser.T__36);
				}
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0)) {
					{
					this.state = 714;
					_la = this._input.LA(1);
					if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 717;
				this.type_();
				}
			}

			this.state = 720;
			this.block();
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===65) {
				{
				this.state = 721;
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
		this.enterRule(localctx, 134, LeoParser.RULE_finalizer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 724;
			this.match(LeoParser.T__64);
			this.state = 725;
			this.identifier();
			this.state = 726;
			this.match(LeoParser.T__15);
			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 1031) !== 0)) {
				{
				this.state = 727;
				this.function_parameters();
				}
			}

			this.state = 730;
			this.match(LeoParser.T__16);
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				{
				this.state = 731;
				this.match(LeoParser.T__19);
				this.state = 732;
				this.match(LeoParser.T__36);
				}
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0)) {
					{
					this.state = 734;
					_la = this._input.LA(1);
					if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 737;
				this.type_();
				}
			}

			this.state = 740;
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
	public struct_declaration(): Struct_declarationContext {
		let localctx: Struct_declarationContext = new Struct_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, LeoParser.RULE_struct_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 742;
			this.match(LeoParser.T__81);
			this.state = 743;
			this.identifier();
			this.state = 744;
			this.match(LeoParser.T__23);
			this.state = 745;
			this.struct_component_declarations();
			this.state = 746;
			this.match(LeoParser.T__24);
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
	public struct_component_declarations(): Struct_component_declarationsContext {
		let localctx: Struct_component_declarationsContext = new Struct_component_declarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, LeoParser.RULE_struct_component_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 748;
			this.struct_component_declaration();
			this.state = 753;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 749;
					this.match(LeoParser.T__18);
					this.state = 750;
					this.struct_component_declaration();
					}
					}
				}
				this.state = 755;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 756;
				this.match(LeoParser.T__18);
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
	public struct_component_declaration(): Struct_component_declarationContext {
		let localctx: Struct_component_declarationContext = new Struct_component_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, LeoParser.RULE_struct_component_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0)) {
				{
				this.state = 759;
				_la = this._input.LA(1);
				if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 762;
			this.identifier();
			this.state = 763;
			this.match(LeoParser.T__22);
			this.state = 764;
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
	public record_declaration(): Record_declarationContext {
		let localctx: Record_declarationContext = new Record_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, LeoParser.RULE_record_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 766;
			this.match(LeoParser.T__17);
			this.state = 767;
			this.identifier();
			this.state = 768;
			this.match(LeoParser.T__23);
			this.state = 769;
			this.struct_component_declarations();
			this.state = 770;
			this.match(LeoParser.T__24);
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
	public mapping_declaration(): Mapping_declarationContext {
		let localctx: Mapping_declarationContext = new Mapping_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, LeoParser.RULE_mapping_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 772;
			this.match(LeoParser.T__82);
			this.state = 773;
			this.identifier();
			this.state = 774;
			this.match(LeoParser.T__22);
			this.state = 775;
			this.type_();
			{
			this.state = 776;
			this.match(LeoParser.T__44);
			this.state = 777;
			this.match(LeoParser.T__36);
			}
			this.state = 779;
			this.type_();
			this.state = 780;
			this.match(LeoParser.T__65);
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
	public program_item(): Program_itemContext {
		let localctx: Program_itemContext = new Program_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, LeoParser.RULE_program_item);
		try {
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 782;
				this.function_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 783;
				this.inline_declaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 784;
				this.transition_declaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 785;
				this.struct_declaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 786;
				this.record_declaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 787;
				this.mapping_declaration();
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
	public program_declaration(): Program_declarationContext {
		let localctx: Program_declarationContext = new Program_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, LeoParser.RULE_program_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 790;
			this.match(LeoParser.T__83);
			this.state = 791;
			this.program_id();
			this.state = 792;
			this.match(LeoParser.T__23);
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13 || _la===18 || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 241) !== 0)) {
				{
				{
				this.state = 793;
				this.program_item();
				}
				}
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 799;
			this.match(LeoParser.T__24);
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
	public import_declaration(): Import_declarationContext {
		let localctx: Import_declarationContext = new Import_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, LeoParser.RULE_import_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 801;
			this.match(LeoParser.T__84);
			this.state = 802;
			this.program_id();
			this.state = 803;
			this.match(LeoParser.T__65);
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
	public sourceUnit(): SourceUnitContext {
		let localctx: SourceUnitContext = new SourceUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, LeoParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 805;
				this.import_declaration();
				}
				}
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 811;
			this.program_declaration();
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
	public input_type(): Input_typeContext {
		let localctx: Input_typeContext = new Input_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, LeoParser.RULE_input_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 813;
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
	public input_expression(): Input_expressionContext {
		let localctx: Input_expressionContext = new Input_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, LeoParser.RULE_input_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 815;
			this.expression(0);
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
	public input_item(): Input_itemContext {
		let localctx: Input_itemContext = new Input_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, LeoParser.RULE_input_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 817;
			this.identifier();
			this.state = 818;
			this.match(LeoParser.T__22);
			this.state = 819;
			this.input_type();
			this.state = 820;
			this.match(LeoParser.T__44);
			this.state = 821;
			this.input_expression();
			this.state = 822;
			this.match(LeoParser.T__65);
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
	public input_section(): Input_sectionContext {
		let localctx: Input_sectionContext = new Input_sectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, LeoParser.RULE_input_section);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 824;
			this.match(LeoParser.INPUT_TITLE);
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===87) {
				{
				{
				this.state = 825;
				this.input_item();
				}
				}
				this.state = 830;
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
	public input_file(): Input_fileContext {
		let localctx: Input_fileContext = new Input_fileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, LeoParser.RULE_input_file);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99) {
				{
				{
				this.state = 831;
				this.input_section();
				}
				}
				this.state = 836;
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
	public output_expression(): Output_expressionContext {
		let localctx: Output_expressionContext = new Output_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, LeoParser.RULE_output_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 837;
			this.expression(0);
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
	public output_item(): Output_itemContext {
		let localctx: Output_itemContext = new Output_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, LeoParser.RULE_output_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 839;
			this.output_expression();
			this.state = 840;
			this.match(LeoParser.T__65);
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
	public output_section(): Output_sectionContext {
		let localctx: Output_sectionContext = new Output_sectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, LeoParser.RULE_output_section);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			this.match(LeoParser.OUTPUT_TITLE);
			this.state = 843;
			this.output_item();
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
	public output_file(): Output_fileContext {
		let localctx: Output_fileContext = new Output_fileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, LeoParser.RULE_output_file);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 845;
			this.output_section();
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
		case 43:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 7);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 4);
		case 11:
			return this.precpred(this._ctx, 3);
		case 12:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,103,848,2,0,7,0,
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
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,
	1,3,1,3,1,4,1,4,1,4,1,4,5,4,188,8,4,10,4,12,4,191,9,4,1,5,4,5,194,8,5,11,
	5,12,5,195,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,
	10,1,11,1,11,1,11,1,12,1,12,1,13,1,13,3,13,220,8,13,1,14,1,14,1,14,1,14,
	3,14,226,8,14,1,15,1,15,1,15,3,15,231,8,15,1,16,1,16,1,16,1,17,1,17,1,17,
	1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,3,20,250,8,20,1,
	21,1,21,1,21,3,21,255,8,21,1,22,1,22,1,22,3,22,260,8,22,1,23,1,23,1,23,
	1,23,3,23,266,8,23,1,23,1,23,1,23,3,23,271,8,23,3,23,273,8,23,1,24,1,24,
	1,24,1,24,4,24,279,8,24,11,24,12,24,280,1,24,3,24,284,8,24,1,24,1,24,1,
	25,1,25,1,25,1,25,3,25,292,8,25,1,26,3,26,295,8,26,1,26,1,26,1,26,1,26,
	3,26,301,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,3,28,311,8,28,1,29,
	1,29,3,29,315,8,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
	30,1,30,1,30,1,30,1,30,3,30,332,8,30,1,31,1,31,1,32,1,32,1,32,1,32,1,32,
	1,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,348,8,33,1,34,1,34,1,34,1,34,1,
	34,1,34,1,34,1,35,1,35,1,35,1,35,5,35,361,8,35,10,35,12,35,364,9,35,1,35,
	3,35,367,8,35,1,35,1,35,1,35,1,35,3,35,373,8,35,1,36,1,36,1,36,1,36,4,36,
	379,8,36,11,36,12,36,380,1,36,3,36,384,8,36,1,36,1,36,1,37,1,37,1,37,1,
	37,1,37,5,37,393,8,37,10,37,12,37,396,9,37,1,37,3,37,399,8,37,1,37,1,37,
	1,38,1,38,1,38,1,38,1,38,3,38,408,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,
	39,3,39,417,8,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,4,41,426,8,41,11,41,
	12,41,427,1,42,1,42,1,42,4,42,433,8,42,11,42,12,42,434,1,42,1,42,1,43,1,
	43,1,43,1,43,1,43,3,43,444,8,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
	1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
	43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
	1,43,1,43,1,43,1,43,1,43,5,43,488,8,43,10,43,12,43,491,9,43,1,44,1,44,1,
	45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,3,47,507,8,47,
	1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,520,8,48,1,
	49,1,49,5,49,524,8,49,10,49,12,49,527,9,49,1,49,1,49,1,50,1,50,5,50,533,
	8,50,10,50,12,50,536,9,50,1,50,1,50,1,50,3,50,541,8,50,1,50,1,50,1,51,1,
	51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,
	4,53,561,8,53,11,53,12,53,562,1,53,3,53,566,8,53,1,53,1,53,3,53,570,8,53,
	1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,585,
	8,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,3,56,597,8,56,1,
	56,1,56,1,56,1,57,1,57,3,57,604,8,57,1,57,1,57,1,57,1,58,1,58,1,58,3,58,
	612,8,58,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,625,
	8,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,3,61,635,8,61,1,61,1,61,1,
	62,5,62,640,8,62,10,62,12,62,643,9,62,1,62,1,62,1,62,1,62,3,62,649,8,62,
	1,62,1,62,1,62,1,62,1,62,3,62,656,8,62,1,62,1,62,1,63,1,63,1,63,5,63,663,
	8,63,10,63,12,63,666,9,63,1,63,3,63,669,8,63,1,64,3,64,672,8,64,1,64,1,
	64,1,64,1,64,1,65,5,65,679,8,65,10,65,12,65,682,9,65,1,65,1,65,1,65,1,65,
	3,65,688,8,65,1,65,1,65,1,65,1,65,1,65,3,65,695,8,65,1,65,1,65,1,66,5,66,
	700,8,66,10,66,12,66,703,9,66,1,66,1,66,1,66,1,66,3,66,709,8,66,1,66,1,
	66,1,66,1,66,1,66,3,66,716,8,66,1,66,3,66,719,8,66,1,66,1,66,3,66,723,8,
	66,1,67,1,67,1,67,1,67,3,67,729,8,67,1,67,1,67,1,67,1,67,1,67,3,67,736,
	8,67,1,67,3,67,739,8,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,
	69,1,69,5,69,752,8,69,10,69,12,69,755,9,69,1,69,3,69,758,8,69,1,70,3,70,
	761,8,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,
	72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,3,73,
	789,8,73,1,74,1,74,1,74,1,74,5,74,795,8,74,10,74,12,74,798,9,74,1,74,1,
	74,1,75,1,75,1,75,1,75,1,76,5,76,807,8,76,10,76,12,76,810,9,76,1,76,1,76,
	1,77,1,77,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,5,80,827,
	8,80,10,80,12,80,830,9,80,1,81,5,81,833,8,81,10,81,12,81,836,9,81,1,82,
	1,82,1,83,1,83,1,83,1,84,1,84,1,84,1,85,1,85,1,85,0,1,86,86,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
	106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
	142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,0,13,1,0,1,
	4,1,0,6,7,1,0,8,10,1,0,90,91,1,0,26,27,2,0,15,15,29,30,1,0,20,21,1,0,31,
	32,1,0,36,39,1,0,40,41,1,0,45,58,1,0,59,61,1,0,77,79,885,0,172,1,0,0,0,
	2,174,1,0,0,0,4,177,1,0,0,0,6,180,1,0,0,0,8,183,1,0,0,0,10,193,1,0,0,0,
	12,197,1,0,0,0,14,200,1,0,0,0,16,203,1,0,0,0,18,206,1,0,0,0,20,209,1,0,
	0,0,22,212,1,0,0,0,24,215,1,0,0,0,26,219,1,0,0,0,28,225,1,0,0,0,30,230,
	1,0,0,0,32,232,1,0,0,0,34,235,1,0,0,0,36,239,1,0,0,0,38,243,1,0,0,0,40,
	249,1,0,0,0,42,254,1,0,0,0,44,259,1,0,0,0,46,272,1,0,0,0,48,274,1,0,0,0,
	50,291,1,0,0,0,52,300,1,0,0,0,54,302,1,0,0,0,56,310,1,0,0,0,58,314,1,0,
	0,0,60,331,1,0,0,0,62,333,1,0,0,0,64,335,1,0,0,0,66,347,1,0,0,0,68,349,
	1,0,0,0,70,372,1,0,0,0,72,374,1,0,0,0,74,387,1,0,0,0,76,407,1,0,0,0,78,
	416,1,0,0,0,80,418,1,0,0,0,82,422,1,0,0,0,84,429,1,0,0,0,86,443,1,0,0,0,
	88,492,1,0,0,0,90,494,1,0,0,0,92,498,1,0,0,0,94,506,1,0,0,0,96,519,1,0,
	0,0,98,521,1,0,0,0,100,530,1,0,0,0,102,544,1,0,0,0,104,547,1,0,0,0,106,
	569,1,0,0,0,108,571,1,0,0,0,110,584,1,0,0,0,112,586,1,0,0,0,114,603,1,0,
	0,0,116,611,1,0,0,0,118,613,1,0,0,0,120,618,1,0,0,0,122,628,1,0,0,0,124,
	641,1,0,0,0,126,659,1,0,0,0,128,671,1,0,0,0,130,680,1,0,0,0,132,701,1,0,
	0,0,134,724,1,0,0,0,136,742,1,0,0,0,138,748,1,0,0,0,140,760,1,0,0,0,142,
	766,1,0,0,0,144,772,1,0,0,0,146,788,1,0,0,0,148,790,1,0,0,0,150,801,1,0,
	0,0,152,808,1,0,0,0,154,813,1,0,0,0,156,815,1,0,0,0,158,817,1,0,0,0,160,
	824,1,0,0,0,162,834,1,0,0,0,164,837,1,0,0,0,166,839,1,0,0,0,168,842,1,0,
	0,0,170,845,1,0,0,0,172,173,5,87,0,0,173,1,1,0,0,0,174,175,7,0,0,0,175,
	176,5,5,0,0,176,3,1,0,0,0,177,178,7,1,0,0,178,179,5,5,0,0,179,5,1,0,0,0,
	180,181,7,2,0,0,181,182,5,5,0,0,182,7,1,0,0,0,183,189,3,0,0,0,184,188,3,
	0,0,0,185,188,5,88,0,0,186,188,5,11,0,0,187,184,1,0,0,0,187,185,1,0,0,0,
	187,186,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,9,1,
	0,0,0,191,189,1,0,0,0,192,194,5,88,0,0,193,192,1,0,0,0,194,195,1,0,0,0,
	195,193,1,0,0,0,195,196,1,0,0,0,196,11,1,0,0,0,197,198,3,10,5,0,198,199,
	5,90,0,0,199,13,1,0,0,0,200,201,3,10,5,0,201,202,5,91,0,0,202,15,1,0,0,
	0,203,204,3,10,5,0,204,205,5,92,0,0,205,17,1,0,0,0,206,207,3,10,5,0,207,
	208,5,93,0,0,208,19,1,0,0,0,209,210,3,10,5,0,210,211,5,94,0,0,211,21,1,
	0,0,0,212,213,3,24,12,0,213,214,5,87,0,0,214,23,1,0,0,0,215,216,5,12,0,
	0,216,25,1,0,0,0,217,220,3,12,6,0,218,220,3,14,7,0,219,217,1,0,0,0,219,
	218,1,0,0,0,220,27,1,0,0,0,221,226,3,26,13,0,222,226,3,16,8,0,223,226,3,
	18,9,0,224,226,3,20,10,0,225,221,1,0,0,0,225,222,1,0,0,0,225,223,1,0,0,
	0,225,224,1,0,0,0,226,29,1,0,0,0,227,231,3,28,14,0,228,231,5,89,0,0,229,
	231,3,22,11,0,230,227,1,0,0,0,230,228,1,0,0,0,230,229,1,0,0,0,231,31,1,
	0,0,0,232,233,5,13,0,0,233,234,3,8,4,0,234,33,1,0,0,0,235,236,3,8,4,0,236,
	237,5,14,0,0,237,238,3,8,4,0,238,35,1,0,0,0,239,240,3,34,17,0,240,241,5,
	15,0,0,241,242,3,8,4,0,242,37,1,0,0,0,243,244,7,3,0,0,244,39,1,0,0,0,245,
	250,3,38,19,0,246,250,5,92,0,0,247,250,5,93,0,0,248,250,5,94,0,0,249,245,
	1,0,0,0,249,246,1,0,0,0,249,247,1,0,0,0,249,248,1,0,0,0,250,41,1,0,0,0,
	251,255,5,95,0,0,252,255,3,40,20,0,253,255,5,96,0,0,254,251,1,0,0,0,254,
	252,1,0,0,0,254,253,1,0,0,0,255,43,1,0,0,0,256,260,3,42,21,0,257,258,5,
	16,0,0,258,260,5,17,0,0,259,256,1,0,0,0,259,257,1,0,0,0,260,45,1,0,0,0,
	261,273,3,42,21,0,262,265,3,8,4,0,263,264,5,14,0,0,264,266,5,18,0,0,265,
	263,1,0,0,0,265,266,1,0,0,0,266,273,1,0,0,0,267,270,3,36,18,0,268,269,5,
	14,0,0,269,271,5,18,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,273,1,0,0,0,
	272,261,1,0,0,0,272,262,1,0,0,0,272,267,1,0,0,0,273,47,1,0,0,0,274,275,
	5,16,0,0,275,278,3,50,25,0,276,277,5,19,0,0,277,279,3,50,25,0,278,276,1,
	0,0,0,279,280,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,283,1,0,0,0,282,
	284,5,19,0,0,283,282,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,286,5,
	17,0,0,286,49,1,0,0,0,287,292,3,46,23,0,288,289,5,16,0,0,289,292,5,17,0,
	0,290,292,3,48,24,0,291,287,1,0,0,0,291,288,1,0,0,0,291,290,1,0,0,0,292,
	51,1,0,0,0,293,295,5,20,0,0,294,293,1,0,0,0,294,295,1,0,0,0,295,296,1,0,
	0,0,296,301,3,10,5,0,297,301,5,21,0,0,298,301,5,20,0,0,299,301,5,11,0,0,
	300,294,1,0,0,0,300,297,1,0,0,0,300,298,1,0,0,0,300,299,1,0,0,0,301,53,
	1,0,0,0,302,303,5,16,0,0,303,304,3,52,26,0,304,305,5,19,0,0,305,306,3,52,
	26,0,306,307,5,22,0,0,307,55,1,0,0,0,308,311,3,30,15,0,309,311,3,54,27,
	0,310,308,1,0,0,0,310,309,1,0,0,0,311,57,1,0,0,0,312,315,3,18,9,0,313,315,
	3,54,27,0,314,312,1,0,0,0,314,313,1,0,0,0,315,59,1,0,0,0,316,332,3,56,28,
	0,317,332,3,62,31,0,318,332,3,64,32,0,319,320,5,16,0,0,320,321,3,86,43,
	0,321,322,5,17,0,0,322,332,1,0,0,0,323,332,3,66,33,0,324,332,3,68,34,0,
	325,326,5,16,0,0,326,332,5,17,0,0,327,332,3,72,36,0,328,332,3,74,37,0,329,
	332,5,97,0,0,330,332,5,98,0,0,331,316,1,0,0,0,331,317,1,0,0,0,331,318,1,
	0,0,0,331,319,1,0,0,0,331,323,1,0,0,0,331,324,1,0,0,0,331,325,1,0,0,0,331,
	327,1,0,0,0,331,328,1,0,0,0,331,329,1,0,0,0,331,330,1,0,0,0,332,61,1,0,
	0,0,333,334,3,8,4,0,334,63,1,0,0,0,335,336,3,46,23,0,336,337,5,23,0,0,337,
	338,5,23,0,0,338,339,1,0,0,0,339,340,3,8,4,0,340,65,1,0,0,0,341,342,3,8,
	4,0,342,343,3,70,35,0,343,348,1,0,0,0,344,345,3,36,18,0,345,346,3,70,35,
	0,346,348,1,0,0,0,347,341,1,0,0,0,347,344,1,0,0,0,348,67,1,0,0,0,349,350,
	3,46,23,0,350,351,5,23,0,0,351,352,5,23,0,0,352,353,1,0,0,0,353,354,3,8,
	4,0,354,355,3,70,35,0,355,69,1,0,0,0,356,357,5,16,0,0,357,362,3,86,43,0,
	358,359,5,19,0,0,359,361,3,86,43,0,360,358,1,0,0,0,361,364,1,0,0,0,362,
	360,1,0,0,0,362,363,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,365,367,5,19,
	0,0,366,365,1,0,0,0,366,367,1,0,0,0,367,368,1,0,0,0,368,369,5,17,0,0,369,
	373,1,0,0,0,370,371,5,16,0,0,371,373,5,17,0,0,372,356,1,0,0,0,372,370,1,
	0,0,0,373,71,1,0,0,0,374,375,5,16,0,0,375,378,3,86,43,0,376,377,5,19,0,
	0,377,379,3,86,43,0,378,376,1,0,0,0,379,380,1,0,0,0,380,378,1,0,0,0,380,
	381,1,0,0,0,381,383,1,0,0,0,382,384,5,19,0,0,383,382,1,0,0,0,383,384,1,
	0,0,0,384,385,1,0,0,0,385,386,5,17,0,0,386,73,1,0,0,0,387,388,3,8,4,0,388,
	389,5,24,0,0,389,394,3,76,38,0,390,391,5,19,0,0,391,393,3,76,38,0,392,390,
	1,0,0,0,393,396,1,0,0,0,394,392,1,0,0,0,394,395,1,0,0,0,395,398,1,0,0,0,
	396,394,1,0,0,0,397,399,5,19,0,0,398,397,1,0,0,0,398,399,1,0,0,0,399,400,
	1,0,0,0,400,401,5,25,0,0,401,75,1,0,0,0,402,408,3,8,4,0,403,404,3,8,4,0,
	404,405,5,23,0,0,405,406,3,86,43,0,406,408,1,0,0,0,407,402,1,0,0,0,407,
	403,1,0,0,0,408,77,1,0,0,0,409,417,3,60,30,0,410,417,3,90,45,0,411,417,
	3,92,46,0,412,417,3,94,47,0,413,417,3,80,40,0,414,417,3,82,41,0,415,417,
	3,84,42,0,416,409,1,0,0,0,416,410,1,0,0,0,416,411,1,0,0,0,416,412,1,0,0,
	0,416,413,1,0,0,0,416,414,1,0,0,0,416,415,1,0,0,0,417,79,1,0,0,0,418,419,
	3,8,4,0,419,420,5,14,0,0,420,421,3,10,5,0,421,81,1,0,0,0,422,425,3,8,4,
	0,423,424,5,14,0,0,424,426,3,8,4,0,425,423,1,0,0,0,426,427,1,0,0,0,427,
	425,1,0,0,0,427,428,1,0,0,0,428,83,1,0,0,0,429,432,3,8,4,0,430,431,5,14,
	0,0,431,433,3,8,4,0,432,430,1,0,0,0,433,434,1,0,0,0,434,432,1,0,0,0,434,
	435,1,0,0,0,435,436,1,0,0,0,436,437,3,70,35,0,437,85,1,0,0,0,438,439,6,
	43,-1,0,439,444,3,78,39,0,440,441,7,4,0,0,441,444,3,86,43,15,442,444,3,
	60,30,0,443,438,1,0,0,0,443,440,1,0,0,0,443,442,1,0,0,0,444,489,1,0,0,0,
	445,446,10,14,0,0,446,447,5,28,0,0,447,488,3,86,43,15,448,449,10,13,0,0,
	449,450,7,5,0,0,450,488,3,86,43,14,451,452,10,12,0,0,452,453,7,6,0,0,453,
	488,3,86,43,13,454,455,10,11,0,0,455,456,7,7,0,0,456,488,3,86,43,12,457,
	458,10,10,0,0,458,459,5,33,0,0,459,488,3,86,43,11,460,461,10,9,0,0,461,
	462,5,34,0,0,462,488,3,86,43,10,463,464,10,8,0,0,464,465,5,35,0,0,465,488,
	3,86,43,9,466,467,10,7,0,0,467,468,7,8,0,0,468,488,3,86,43,8,469,470,10,
	6,0,0,470,471,7,9,0,0,471,488,3,86,43,7,472,473,10,5,0,0,473,474,5,42,0,
	0,474,488,3,86,43,6,475,476,10,4,0,0,476,477,5,43,0,0,477,488,3,86,43,5,
	478,479,10,3,0,0,479,480,5,44,0,0,480,481,3,86,43,0,481,482,5,23,0,0,482,
	483,3,86,43,4,483,488,1,0,0,0,484,485,10,2,0,0,485,486,7,10,0,0,486,488,
	3,86,43,3,487,445,1,0,0,0,487,448,1,0,0,0,487,451,1,0,0,0,487,454,1,0,0,
	0,487,457,1,0,0,0,487,460,1,0,0,0,487,463,1,0,0,0,487,466,1,0,0,0,487,469,
	1,0,0,0,487,472,1,0,0,0,487,475,1,0,0,0,487,478,1,0,0,0,487,484,1,0,0,0,
	488,491,1,0,0,0,489,487,1,0,0,0,489,490,1,0,0,0,490,87,1,0,0,0,491,489,
	1,0,0,0,492,493,7,11,0,0,493,89,1,0,0,0,494,495,5,62,0,0,495,496,3,88,44,
	0,496,497,3,70,35,0,497,91,1,0,0,0,498,499,5,63,0,0,499,500,5,5,0,0,500,
	501,3,8,4,0,501,502,3,70,35,0,502,93,1,0,0,0,503,507,3,2,1,0,504,507,3,
	4,2,0,505,507,3,6,3,0,506,503,1,0,0,0,506,504,1,0,0,0,506,505,1,0,0,0,507,
	508,1,0,0,0,508,509,3,8,4,0,509,510,3,70,35,0,510,95,1,0,0,0,511,520,3,
	90,45,0,512,520,3,102,51,0,513,520,3,104,52,0,514,520,3,110,55,0,515,520,
	3,112,56,0,516,520,3,114,57,0,517,520,3,100,50,0,518,520,3,98,49,0,519,
	511,1,0,0,0,519,512,1,0,0,0,519,513,1,0,0,0,519,514,1,0,0,0,519,515,1,0,
	0,0,519,516,1,0,0,0,519,517,1,0,0,0,519,518,1,0,0,0,520,97,1,0,0,0,521,
	525,5,24,0,0,522,524,3,96,48,0,523,522,1,0,0,0,524,527,1,0,0,0,525,523,
	1,0,0,0,525,526,1,0,0,0,526,528,1,0,0,0,527,525,1,0,0,0,528,529,5,25,0,
	0,529,99,1,0,0,0,530,534,5,64,0,0,531,533,3,86,43,0,532,531,1,0,0,0,533,
	536,1,0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,540,1,0,0,0,536,534,1,0,
	0,0,537,538,5,86,0,0,538,539,5,65,0,0,539,541,3,70,35,0,540,537,1,0,0,0,
	540,541,1,0,0,0,541,542,1,0,0,0,542,543,5,66,0,0,543,101,1,0,0,0,544,545,
	3,86,43,0,545,546,5,66,0,0,546,103,1,0,0,0,547,548,5,67,0,0,548,549,3,106,
	53,0,549,550,5,23,0,0,550,551,3,50,25,0,551,552,5,45,0,0,552,553,3,86,43,
	0,553,554,5,66,0,0,554,105,1,0,0,0,555,570,3,8,4,0,556,557,5,16,0,0,557,
	560,3,8,4,0,558,559,5,19,0,0,559,561,3,8,4,0,560,558,1,0,0,0,561,562,1,
	0,0,0,562,560,1,0,0,0,562,563,1,0,0,0,563,565,1,0,0,0,564,566,5,19,0,0,
	565,564,1,0,0,0,565,566,1,0,0,0,566,567,1,0,0,0,567,568,5,17,0,0,568,570,
	1,0,0,0,569,555,1,0,0,0,569,556,1,0,0,0,570,107,1,0,0,0,571,572,5,68,0,
	0,572,573,3,86,43,0,573,574,3,98,49,0,574,109,1,0,0,0,575,585,3,108,54,
	0,576,577,3,108,54,0,577,578,5,69,0,0,578,579,3,98,49,0,579,585,1,0,0,0,
	580,581,3,108,54,0,581,582,5,69,0,0,582,583,3,110,55,0,583,585,1,0,0,0,
	584,575,1,0,0,0,584,576,1,0,0,0,584,580,1,0,0,0,585,111,1,0,0,0,586,587,
	5,70,0,0,587,588,3,8,4,0,588,589,5,23,0,0,589,590,3,50,25,0,590,591,5,71,
	0,0,591,592,3,86,43,0,592,593,5,14,0,0,593,594,5,14,0,0,594,596,1,0,0,0,
	595,597,5,45,0,0,596,595,1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,599,
	3,86,43,0,599,600,3,98,49,0,600,113,1,0,0,0,601,602,5,72,0,0,602,604,5,
	14,0,0,603,601,1,0,0,0,603,604,1,0,0,0,604,605,1,0,0,0,605,606,3,116,58,
	0,606,607,5,66,0,0,607,115,1,0,0,0,608,612,3,118,59,0,609,612,3,120,60,
	0,610,612,3,122,61,0,611,608,1,0,0,0,611,609,1,0,0,0,611,610,1,0,0,0,612,
	117,1,0,0,0,613,614,5,73,0,0,614,615,5,16,0,0,615,616,3,86,43,0,616,617,
	5,17,0,0,617,119,1,0,0,0,618,619,5,74,0,0,619,620,5,16,0,0,620,621,3,86,
	43,0,621,622,5,19,0,0,622,624,3,86,43,0,623,625,5,19,0,0,624,623,1,0,0,
	0,624,625,1,0,0,0,625,626,1,0,0,0,626,627,5,17,0,0,627,121,1,0,0,0,628,
	629,5,75,0,0,629,630,5,16,0,0,630,631,3,86,43,0,631,632,5,19,0,0,632,634,
	3,86,43,0,633,635,5,19,0,0,634,633,1,0,0,0,634,635,1,0,0,0,635,636,1,0,
	0,0,636,637,5,17,0,0,637,123,1,0,0,0,638,640,3,32,16,0,639,638,1,0,0,0,
	640,643,1,0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,644,1,0,0,0,643,641,
	1,0,0,0,644,645,5,76,0,0,645,646,3,8,4,0,646,648,5,16,0,0,647,649,3,126,
	63,0,648,647,1,0,0,0,648,649,1,0,0,0,649,650,1,0,0,0,650,655,5,17,0,0,651,
	652,5,20,0,0,652,653,5,37,0,0,653,654,1,0,0,0,654,656,3,50,25,0,655,651,
	1,0,0,0,655,656,1,0,0,0,656,657,1,0,0,0,657,658,3,98,49,0,658,125,1,0,0,
	0,659,664,3,128,64,0,660,661,5,19,0,0,661,663,3,128,64,0,662,660,1,0,0,
	0,663,666,1,0,0,0,664,662,1,0,0,0,664,665,1,0,0,0,665,668,1,0,0,0,666,664,
	1,0,0,0,667,669,5,19,0,0,668,667,1,0,0,0,668,669,1,0,0,0,669,127,1,0,0,
	0,670,672,7,12,0,0,671,670,1,0,0,0,671,672,1,0,0,0,672,673,1,0,0,0,673,
	674,3,8,4,0,674,675,5,23,0,0,675,676,3,50,25,0,676,129,1,0,0,0,677,679,
	3,32,16,0,678,677,1,0,0,0,679,682,1,0,0,0,680,678,1,0,0,0,680,681,1,0,0,
	0,681,683,1,0,0,0,682,680,1,0,0,0,683,684,5,80,0,0,684,685,3,8,4,0,685,
	687,5,16,0,0,686,688,3,126,63,0,687,686,1,0,0,0,687,688,1,0,0,0,688,689,
	1,0,0,0,689,694,5,17,0,0,690,691,5,20,0,0,691,692,5,37,0,0,692,693,1,0,
	0,0,693,695,3,50,25,0,694,690,1,0,0,0,694,695,1,0,0,0,695,696,1,0,0,0,696,
	697,3,98,49,0,697,131,1,0,0,0,698,700,3,32,16,0,699,698,1,0,0,0,700,703,
	1,0,0,0,701,699,1,0,0,0,701,702,1,0,0,0,702,704,1,0,0,0,703,701,1,0,0,0,
	704,705,5,81,0,0,705,706,3,8,4,0,706,708,5,16,0,0,707,709,3,126,63,0,708,
	707,1,0,0,0,708,709,1,0,0,0,709,710,1,0,0,0,710,718,5,17,0,0,711,712,5,
	20,0,0,712,713,5,37,0,0,713,715,1,0,0,0,714,716,7,12,0,0,715,714,1,0,0,
	0,715,716,1,0,0,0,716,717,1,0,0,0,717,719,3,50,25,0,718,711,1,0,0,0,718,
	719,1,0,0,0,719,720,1,0,0,0,720,722,3,98,49,0,721,723,3,134,67,0,722,721,
	1,0,0,0,722,723,1,0,0,0,723,133,1,0,0,0,724,725,5,65,0,0,725,726,3,8,4,
	0,726,728,5,16,0,0,727,729,3,126,63,0,728,727,1,0,0,0,728,729,1,0,0,0,729,
	730,1,0,0,0,730,738,5,17,0,0,731,732,5,20,0,0,732,733,5,37,0,0,733,735,
	1,0,0,0,734,736,7,12,0,0,735,734,1,0,0,0,735,736,1,0,0,0,736,737,1,0,0,
	0,737,739,3,50,25,0,738,731,1,0,0,0,738,739,1,0,0,0,739,740,1,0,0,0,740,
	741,3,98,49,0,741,135,1,0,0,0,742,743,5,82,0,0,743,744,3,8,4,0,744,745,
	5,24,0,0,745,746,3,138,69,0,746,747,5,25,0,0,747,137,1,0,0,0,748,753,3,
	140,70,0,749,750,5,19,0,0,750,752,3,140,70,0,751,749,1,0,0,0,752,755,1,
	0,0,0,753,751,1,0,0,0,753,754,1,0,0,0,754,757,1,0,0,0,755,753,1,0,0,0,756,
	758,5,19,0,0,757,756,1,0,0,0,757,758,1,0,0,0,758,139,1,0,0,0,759,761,7,
	12,0,0,760,759,1,0,0,0,760,761,1,0,0,0,761,762,1,0,0,0,762,763,3,8,4,0,
	763,764,5,23,0,0,764,765,3,50,25,0,765,141,1,0,0,0,766,767,5,18,0,0,767,
	768,3,8,4,0,768,769,5,24,0,0,769,770,3,138,69,0,770,771,5,25,0,0,771,143,
	1,0,0,0,772,773,5,83,0,0,773,774,3,8,4,0,774,775,5,23,0,0,775,776,3,50,
	25,0,776,777,5,45,0,0,777,778,5,37,0,0,778,779,1,0,0,0,779,780,3,50,25,
	0,780,781,5,66,0,0,781,145,1,0,0,0,782,789,3,124,62,0,783,789,3,130,65,
	0,784,789,3,132,66,0,785,789,3,136,68,0,786,789,3,142,71,0,787,789,3,144,
	72,0,788,782,1,0,0,0,788,783,1,0,0,0,788,784,1,0,0,0,788,785,1,0,0,0,788,
	786,1,0,0,0,788,787,1,0,0,0,789,147,1,0,0,0,790,791,5,84,0,0,791,792,3,
	34,17,0,792,796,5,24,0,0,793,795,3,146,73,0,794,793,1,0,0,0,795,798,1,0,
	0,0,796,794,1,0,0,0,796,797,1,0,0,0,797,799,1,0,0,0,798,796,1,0,0,0,799,
	800,5,25,0,0,800,149,1,0,0,0,801,802,5,85,0,0,802,803,3,34,17,0,803,804,
	5,66,0,0,804,151,1,0,0,0,805,807,3,150,75,0,806,805,1,0,0,0,807,810,1,0,
	0,0,808,806,1,0,0,0,808,809,1,0,0,0,809,811,1,0,0,0,810,808,1,0,0,0,811,
	812,3,148,74,0,812,153,1,0,0,0,813,814,3,50,25,0,814,155,1,0,0,0,815,816,
	3,86,43,0,816,157,1,0,0,0,817,818,3,8,4,0,818,819,5,23,0,0,819,820,3,154,
	77,0,820,821,5,45,0,0,821,822,3,156,78,0,822,823,5,66,0,0,823,159,1,0,0,
	0,824,828,5,99,0,0,825,827,3,158,79,0,826,825,1,0,0,0,827,830,1,0,0,0,828,
	826,1,0,0,0,828,829,1,0,0,0,829,161,1,0,0,0,830,828,1,0,0,0,831,833,3,160,
	80,0,832,831,1,0,0,0,833,836,1,0,0,0,834,832,1,0,0,0,834,835,1,0,0,0,835,
	163,1,0,0,0,836,834,1,0,0,0,837,838,3,86,43,0,838,165,1,0,0,0,839,840,3,
	164,82,0,840,841,5,66,0,0,841,167,1,0,0,0,842,843,5,100,0,0,843,844,3,166,
	83,0,844,169,1,0,0,0,845,846,3,168,84,0,846,171,1,0,0,0,74,187,189,195,
	219,225,230,249,254,259,265,270,272,280,283,291,294,300,310,314,331,347,
	362,366,372,380,383,394,398,407,416,427,434,443,487,489,506,519,525,534,
	540,562,565,569,584,596,603,611,624,634,641,648,655,664,668,671,680,687,
	694,701,708,715,718,722,728,735,738,753,757,760,788,796,808,828,834];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LeoParser.__ATN) {
			LeoParser.__ATN = new ATNDeserializer().deserialize(LeoParser._serializedATN);
		}

		return LeoParser.__ATN;
	}


	static DecisionsToDFA = LeoParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class LetterContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LeoParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_letter;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterLetter) {
	 		listener.enterLetter(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitLetter) {
	 		listener.exitLetter(this);
		}
	}
}


export class BhpContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_bhp;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterBhp) {
	 		listener.enterBhp(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitBhp) {
	 		listener.exitBhp(this);
		}
	}
}


export class PedersenContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_pedersen;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPedersen) {
	 		listener.enterPedersen(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPedersen) {
	 		listener.exitPedersen(this);
		}
	}
}


export class PoseidonContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_poseidon;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPoseidon) {
	 		listener.enterPoseidon(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPoseidon) {
	 		listener.exitPoseidon(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public letter_list(): LetterContext[] {
		return this.getTypedRuleContexts(LetterContext) as LetterContext[];
	}
	public letter(i: number): LetterContext {
		return this.getTypedRuleContext(LetterContext, i) as LetterContext;
	}
	public Digit_list(): TerminalNode[] {
	    	return this.getTokens(LeoParser.Digit);
	}
	public Digit(i: number): TerminalNode {
		return this.getToken(LeoParser.Digit, i);
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


export class NumeralContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Digit_list(): TerminalNode[] {
	    	return this.getTokens(LeoParser.Digit);
	}
	public Digit(i: number): TerminalNode {
		return this.getToken(LeoParser.Digit, i);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_numeral;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterNumeral) {
	 		listener.enterNumeral(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitNumeral) {
	 		listener.exitNumeral(this);
		}
	}
}


export class Unsigned_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numeral(): NumeralContext {
		return this.getTypedRuleContext(NumeralContext, 0) as NumeralContext;
	}
	public UNSIGNED_TYPE(): TerminalNode {
		return this.getToken(LeoParser.UNSIGNED_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_unsigned_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterUnsigned_literal) {
	 		listener.enterUnsigned_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitUnsigned_literal) {
	 		listener.exitUnsigned_literal(this);
		}
	}
}


export class Signed_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numeral(): NumeralContext {
		return this.getTypedRuleContext(NumeralContext, 0) as NumeralContext;
	}
	public SIGNED_TYPE(): TerminalNode {
		return this.getToken(LeoParser.SIGNED_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_signed_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterSigned_literal) {
	 		listener.enterSigned_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitSigned_literal) {
	 		listener.exitSigned_literal(this);
		}
	}
}


export class Field_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numeral(): NumeralContext {
		return this.getTypedRuleContext(NumeralContext, 0) as NumeralContext;
	}
	public FIELD_TYPE(): TerminalNode {
		return this.getToken(LeoParser.FIELD_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_field_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterField_literal) {
	 		listener.enterField_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitField_literal) {
	 		listener.exitField_literal(this);
		}
	}
}


export class Product_group_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numeral(): NumeralContext {
		return this.getTypedRuleContext(NumeralContext, 0) as NumeralContext;
	}
	public GROUP_TYPE(): TerminalNode {
		return this.getToken(LeoParser.GROUP_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_product_group_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterProduct_group_literal) {
	 		listener.enterProduct_group_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitProduct_group_literal) {
	 		listener.exitProduct_group_literal(this);
		}
	}
}


export class Scalar_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numeral(): NumeralContext {
		return this.getTypedRuleContext(NumeralContext, 0) as NumeralContext;
	}
	public SCALAR_TYPE(): TerminalNode {
		return this.getToken(LeoParser.SCALAR_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_scalar_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterScalar_literal) {
	 		listener.enterScalar_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitScalar_literal) {
	 		listener.exitScalar_literal(this);
		}
	}
}


export class Address_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addr_identifier(): Addr_identifierContext {
		return this.getTypedRuleContext(Addr_identifierContext, 0) as Addr_identifierContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LeoParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_address_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAddress_literal) {
	 		listener.enterAddress_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAddress_literal) {
	 		listener.exitAddress_literal(this);
		}
	}
}


export class Addr_identifierContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_addr_identifier;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAddr_identifier) {
	 		listener.enterAddr_identifier(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAddr_identifier) {
	 		listener.exitAddr_identifier(this);
		}
	}
}


export class Integer_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unsigned_literal(): Unsigned_literalContext {
		return this.getTypedRuleContext(Unsigned_literalContext, 0) as Unsigned_literalContext;
	}
	public signed_literal(): Signed_literalContext {
		return this.getTypedRuleContext(Signed_literalContext, 0) as Signed_literalContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_integer_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInteger_literal) {
	 		listener.enterInteger_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInteger_literal) {
	 		listener.exitInteger_literal(this);
		}
	}
}


export class Numeric_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integer_literal(): Integer_literalContext {
		return this.getTypedRuleContext(Integer_literalContext, 0) as Integer_literalContext;
	}
	public field_literal(): Field_literalContext {
		return this.getTypedRuleContext(Field_literalContext, 0) as Field_literalContext;
	}
	public product_group_literal(): Product_group_literalContext {
		return this.getTypedRuleContext(Product_group_literalContext, 0) as Product_group_literalContext;
	}
	public scalar_literal(): Scalar_literalContext {
		return this.getTypedRuleContext(Scalar_literalContext, 0) as Scalar_literalContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_numeric_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterNumeric_literal) {
	 		listener.enterNumeric_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitNumeric_literal) {
	 		listener.exitNumeric_literal(this);
		}
	}
}


export class Atomic_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numeric_literal(): Numeric_literalContext {
		return this.getTypedRuleContext(Numeric_literalContext, 0) as Numeric_literalContext;
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(LeoParser.BOOLEAN_LITERAL, 0);
	}
	public address_literal(): Address_literalContext {
		return this.getTypedRuleContext(Address_literalContext, 0) as Address_literalContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_atomic_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAtomic_literal) {
	 		listener.enterAtomic_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAtomic_literal) {
	 		listener.exitAtomic_literal(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
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


export class Program_idContext extends ParserRuleContext {
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
    	return LeoParser.RULE_program_id;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterProgram_id) {
	 		listener.enterProgram_id(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitProgram_id) {
	 		listener.exitProgram_id(this);
		}
	}
}


export class LocatorContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public program_id(): Program_idContext {
		return this.getTypedRuleContext(Program_idContext, 0) as Program_idContext;
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


export class Integer_typeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNSIGNED_TYPE(): TerminalNode {
		return this.getToken(LeoParser.UNSIGNED_TYPE, 0);
	}
	public SIGNED_TYPE(): TerminalNode {
		return this.getToken(LeoParser.SIGNED_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_integer_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInteger_type) {
	 		listener.enterInteger_type(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInteger_type) {
	 		listener.exitInteger_type(this);
		}
	}
}


export class Arithmetic_typeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integer_type(): Integer_typeContext {
		return this.getTypedRuleContext(Integer_typeContext, 0) as Integer_typeContext;
	}
	public FIELD_TYPE(): TerminalNode {
		return this.getToken(LeoParser.FIELD_TYPE, 0);
	}
	public GROUP_TYPE(): TerminalNode {
		return this.getToken(LeoParser.GROUP_TYPE, 0);
	}
	public SCALAR_TYPE(): TerminalNode {
		return this.getToken(LeoParser.SCALAR_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_arithmetic_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterArithmetic_type) {
	 		listener.enterArithmetic_type(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitArithmetic_type) {
	 		listener.exitArithmetic_type(this);
		}
	}
}


export class Named_primitive_typeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOLEAN_TYPE(): TerminalNode {
		return this.getToken(LeoParser.BOOLEAN_TYPE, 0);
	}
	public arithmetic_type(): Arithmetic_typeContext {
		return this.getTypedRuleContext(Arithmetic_typeContext, 0) as Arithmetic_typeContext;
	}
	public ADDRESS_TYPE(): TerminalNode {
		return this.getToken(LeoParser.ADDRESS_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_named_primitive_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterNamed_primitive_type) {
	 		listener.enterNamed_primitive_type(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitNamed_primitive_type) {
	 		listener.exitNamed_primitive_type(this);
		}
	}
}


export class Primitive_typeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public named_primitive_type(): Named_primitive_typeContext {
		return this.getTypedRuleContext(Named_primitive_typeContext, 0) as Named_primitive_typeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_primitive_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPrimitive_type) {
	 		listener.enterPrimitive_type(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPrimitive_type) {
	 		listener.exitPrimitive_type(this);
		}
	}
}


export class Named_typeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public named_primitive_type(): Named_primitive_typeContext {
		return this.getTypedRuleContext(Named_primitive_typeContext, 0) as Named_primitive_typeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_named_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterNamed_type) {
	 		listener.enterNamed_type(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitNamed_type) {
	 		listener.exitNamed_type(this);
		}
	}
}


export class Tuple_typeContext extends ParserRuleContext {
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
    	return LeoParser.RULE_tuple_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTuple_type) {
	 		listener.enterTuple_type(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTuple_type) {
	 		listener.exitTuple_type(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public named_type(): Named_typeContext {
		return this.getTypedRuleContext(Named_typeContext, 0) as Named_typeContext;
	}
	public tuple_type(): Tuple_typeContext {
		return this.getTypedRuleContext(Tuple_typeContext, 0) as Tuple_typeContext;
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


export class Group_coordinateContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numeral(): NumeralContext {
		return this.getTypedRuleContext(NumeralContext, 0) as NumeralContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_group_coordinate;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterGroup_coordinate) {
	 		listener.enterGroup_coordinate(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitGroup_coordinate) {
	 		listener.exitGroup_coordinate(this);
		}
	}
}


export class Affine_group_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public group_coordinate_list(): Group_coordinateContext[] {
		return this.getTypedRuleContexts(Group_coordinateContext) as Group_coordinateContext[];
	}
	public group_coordinate(i: number): Group_coordinateContext {
		return this.getTypedRuleContext(Group_coordinateContext, i) as Group_coordinateContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_affine_group_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAffine_group_literal) {
	 		listener.enterAffine_group_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAffine_group_literal) {
	 		listener.exitAffine_group_literal(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atomic_literal(): Atomic_literalContext {
		return this.getTypedRuleContext(Atomic_literalContext, 0) as Atomic_literalContext;
	}
	public affine_group_literal(): Affine_group_literalContext {
		return this.getTypedRuleContext(Affine_group_literalContext, 0) as Affine_group_literalContext;
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


export class Group_literalContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public product_group_literal(): Product_group_literalContext {
		return this.getTypedRuleContext(Product_group_literalContext, 0) as Product_group_literalContext;
	}
	public affine_group_literal(): Affine_group_literalContext {
		return this.getTypedRuleContext(Affine_group_literalContext, 0) as Affine_group_literalContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_group_literal;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterGroup_literal) {
	 		listener.enterGroup_literal(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitGroup_literal) {
	 		listener.exitGroup_literal(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
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
	public associated_constant(): Associated_constantContext {
		return this.getTypedRuleContext(Associated_constantContext, 0) as Associated_constantContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public free_function_call(): Free_function_callContext {
		return this.getTypedRuleContext(Free_function_callContext, 0) as Free_function_callContext;
	}
	public associated_function_call(): Associated_function_callContext {
		return this.getTypedRuleContext(Associated_function_callContext, 0) as Associated_function_callContext;
	}
	public tuple_expression(): Tuple_expressionContext {
		return this.getTypedRuleContext(Tuple_expressionContext, 0) as Tuple_expressionContext;
	}
	public struct_expression(): Struct_expressionContext {
		return this.getTypedRuleContext(Struct_expressionContext, 0) as Struct_expressionContext;
	}
	public SELF_CALLER(): TerminalNode {
		return this.getToken(LeoParser.SELF_CALLER, 0);
	}
	public BLOCK_HEIGHT(): TerminalNode {
		return this.getToken(LeoParser.BLOCK_HEIGHT, 0);
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_primary_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPrimary_expression) {
	 		listener.enterPrimary_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPrimary_expression) {
	 		listener.exitPrimary_expression(this);
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


export class Associated_constantContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public named_type(): Named_typeContext {
		return this.getTypedRuleContext(Named_typeContext, 0) as Named_typeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_associated_constant;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssociated_constant) {
	 		listener.enterAssociated_constant(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssociated_constant) {
	 		listener.exitAssociated_constant(this);
		}
	}
}


export class Free_function_callContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public function_arguments(): Function_argumentsContext {
		return this.getTypedRuleContext(Function_argumentsContext, 0) as Function_argumentsContext;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_free_function_call;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFree_function_call) {
	 		listener.enterFree_function_call(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFree_function_call) {
	 		listener.exitFree_function_call(this);
		}
	}
}


export class Associated_function_callContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public named_type(): Named_typeContext {
		return this.getTypedRuleContext(Named_typeContext, 0) as Named_typeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public function_arguments(): Function_argumentsContext {
		return this.getTypedRuleContext(Function_argumentsContext, 0) as Function_argumentsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_associated_function_call;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssociated_function_call) {
	 		listener.enterAssociated_function_call(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssociated_function_call) {
	 		listener.exitAssociated_function_call(this);
		}
	}
}


export class Function_argumentsContext extends ParserRuleContext {
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
    	return LeoParser.RULE_function_arguments;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunction_arguments) {
	 		listener.enterFunction_arguments(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunction_arguments) {
	 		listener.exitFunction_arguments(this);
		}
	}
}


export class Tuple_expressionContext extends ParserRuleContext {
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
    	return LeoParser.RULE_tuple_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTuple_expression) {
	 		listener.enterTuple_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTuple_expression) {
	 		listener.exitTuple_expression(this);
		}
	}
}


export class Struct_expressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public struct_component_initializer_list(): Struct_component_initializerContext[] {
		return this.getTypedRuleContexts(Struct_component_initializerContext) as Struct_component_initializerContext[];
	}
	public struct_component_initializer(i: number): Struct_component_initializerContext {
		return this.getTypedRuleContext(Struct_component_initializerContext, i) as Struct_component_initializerContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_struct_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStruct_expression) {
	 		listener.enterStruct_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStruct_expression) {
	 		listener.exitStruct_expression(this);
		}
	}
}


export class Struct_component_initializerContext extends ParserRuleContext {
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
    	return LeoParser.RULE_struct_component_initializer;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStruct_component_initializer) {
	 		listener.enterStruct_component_initializer(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStruct_component_initializer) {
	 		listener.exitStruct_component_initializer(this);
		}
	}
}


export class Postfix_expressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary_expression(): Primary_expressionContext {
		return this.getTypedRuleContext(Primary_expressionContext, 0) as Primary_expressionContext;
	}
	public useMapping(): UseMappingContext {
		return this.getTypedRuleContext(UseMappingContext, 0) as UseMappingContext;
	}
	public chacha(): ChachaContext {
		return this.getTypedRuleContext(ChachaContext, 0) as ChachaContext;
	}
	public associatedFunctionCall(): AssociatedFunctionCallContext {
		return this.getTypedRuleContext(AssociatedFunctionCallContext, 0) as AssociatedFunctionCallContext;
	}
	public tuple_component_expression(): Tuple_component_expressionContext {
		return this.getTypedRuleContext(Tuple_component_expressionContext, 0) as Tuple_component_expressionContext;
	}
	public struct_component_expression(): Struct_component_expressionContext {
		return this.getTypedRuleContext(Struct_component_expressionContext, 0) as Struct_component_expressionContext;
	}
	public method_call(): Method_callContext {
		return this.getTypedRuleContext(Method_callContext, 0) as Method_callContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_postfix_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterPostfix_expression) {
	 		listener.enterPostfix_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitPostfix_expression) {
	 		listener.exitPostfix_expression(this);
		}
	}
}


export class Tuple_component_expressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public numeral(): NumeralContext {
		return this.getTypedRuleContext(NumeralContext, 0) as NumeralContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_tuple_component_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTuple_component_expression) {
	 		listener.enterTuple_component_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTuple_component_expression) {
	 		listener.exitTuple_component_expression(this);
		}
	}
}


export class Struct_component_expressionContext extends ParserRuleContext {
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
    	return LeoParser.RULE_struct_component_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStruct_component_expression) {
	 		listener.enterStruct_component_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStruct_component_expression) {
	 		listener.exitStruct_component_expression(this);
		}
	}
}


export class Method_callContext extends ParserRuleContext {
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
	public function_arguments(): Function_argumentsContext {
		return this.getTypedRuleContext(Function_argumentsContext, 0) as Function_argumentsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_method_call;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterMethod_call) {
	 		listener.enterMethod_call(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitMethod_call) {
	 		listener.exitMethod_call(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfix_expression(): Postfix_expressionContext {
		return this.getTypedRuleContext(Postfix_expressionContext, 0) as Postfix_expressionContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public primary_expression(): Primary_expressionContext {
		return this.getTypedRuleContext(Primary_expressionContext, 0) as Primary_expressionContext;
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
	public function_arguments(): Function_argumentsContext {
		return this.getTypedRuleContext(Function_argumentsContext, 0) as Function_argumentsContext;
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


export class ChachaContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public function_arguments(): Function_argumentsContext {
		return this.getTypedRuleContext(Function_argumentsContext, 0) as Function_argumentsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_chacha;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterChacha) {
	 		listener.enterChacha(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitChacha) {
	 		listener.exitChacha(this);
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
	public function_arguments(): Function_argumentsContext {
		return this.getTypedRuleContext(Function_argumentsContext, 0) as Function_argumentsContext;
	}
	public bhp(): BhpContext {
		return this.getTypedRuleContext(BhpContext, 0) as BhpContext;
	}
	public pedersen(): PedersenContext {
		return this.getTypedRuleContext(PedersenContext, 0) as PedersenContext;
	}
	public poseidon(): PoseidonContext {
		return this.getTypedRuleContext(PoseidonContext, 0) as PoseidonContext;
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


export class StatementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public useMapping(): UseMappingContext {
		return this.getTypedRuleContext(UseMappingContext, 0) as UseMappingContext;
	}
	public expression_statement(): Expression_statementContext {
		return this.getTypedRuleContext(Expression_statementContext, 0) as Expression_statementContext;
	}
	public variable_declaration(): Variable_declarationContext {
		return this.getTypedRuleContext(Variable_declarationContext, 0) as Variable_declarationContext;
	}
	public conditional_statement(): Conditional_statementContext {
		return this.getTypedRuleContext(Conditional_statementContext, 0) as Conditional_statementContext;
	}
	public loop_statement(): Loop_statementContext {
		return this.getTypedRuleContext(Loop_statementContext, 0) as Loop_statementContext;
	}
	public console_statement(): Console_statementContext {
		return this.getTypedRuleContext(Console_statementContext, 0) as Console_statementContext;
	}
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
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


export class Return_statementContext extends ParserRuleContext {
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
	public THEN(): TerminalNode {
		return this.getToken(LeoParser.THEN, 0);
	}
	public function_arguments(): Function_argumentsContext {
		return this.getTypedRuleContext(Function_argumentsContext, 0) as Function_argumentsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_return_statement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterReturn_statement) {
	 		listener.enterReturn_statement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitReturn_statement) {
	 		listener.exitReturn_statement(this);
		}
	}
}


export class Expression_statementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_expression_statement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterExpression_statement) {
	 		listener.enterExpression_statement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitExpression_statement) {
	 		listener.exitExpression_statement(this);
		}
	}
}


export class Variable_declarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_or_identifiers(): Identifier_or_identifiersContext {
		return this.getTypedRuleContext(Identifier_or_identifiersContext, 0) as Identifier_or_identifiersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_variable_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterVariable_declaration) {
	 		listener.enterVariable_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitVariable_declaration) {
	 		listener.exitVariable_declaration(this);
		}
	}
}


export class Identifier_or_identifiersContext extends ParserRuleContext {
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
    	return LeoParser.RULE_identifier_or_identifiers;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterIdentifier_or_identifiers) {
	 		listener.enterIdentifier_or_identifiers(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitIdentifier_or_identifiers) {
	 		listener.exitIdentifier_or_identifiers(this);
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


export class Conditional_statementContext extends ParserRuleContext {
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
	public conditional_statement(): Conditional_statementContext {
		return this.getTypedRuleContext(Conditional_statementContext, 0) as Conditional_statementContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_conditional_statement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConditional_statement) {
	 		listener.enterConditional_statement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConditional_statement) {
	 		listener.exitConditional_statement(this);
		}
	}
}


export class Loop_statementContext extends ParserRuleContext {
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
    	return LeoParser.RULE_loop_statement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterLoop_statement) {
	 		listener.enterLoop_statement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitLoop_statement) {
	 		listener.exitLoop_statement(this);
		}
	}
}


export class Console_statementContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public console_call(): Console_callContext {
		return this.getTypedRuleContext(Console_callContext, 0) as Console_callContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_console_statement;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConsole_statement) {
	 		listener.enterConsole_statement(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConsole_statement) {
	 		listener.exitConsole_statement(this);
		}
	}
}


export class Console_callContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assert_call(): Assert_callContext {
		return this.getTypedRuleContext(Assert_callContext, 0) as Assert_callContext;
	}
	public assert_equal_call(): Assert_equal_callContext {
		return this.getTypedRuleContext(Assert_equal_callContext, 0) as Assert_equal_callContext;
	}
	public assert_not_equal_call(): Assert_not_equal_callContext {
		return this.getTypedRuleContext(Assert_not_equal_callContext, 0) as Assert_not_equal_callContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_console_call;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterConsole_call) {
	 		listener.enterConsole_call(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitConsole_call) {
	 		listener.exitConsole_call(this);
		}
	}
}


export class Assert_callContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_assert_call;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssert_call) {
	 		listener.enterAssert_call(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssert_call) {
	 		listener.exitAssert_call(this);
		}
	}
}


export class Assert_equal_callContext extends ParserRuleContext {
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
    	return LeoParser.RULE_assert_equal_call;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssert_equal_call) {
	 		listener.enterAssert_equal_call(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssert_equal_call) {
	 		listener.exitAssert_equal_call(this);
		}
	}
}


export class Assert_not_equal_callContext extends ParserRuleContext {
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
    	return LeoParser.RULE_assert_not_equal_call;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterAssert_not_equal_call) {
	 		listener.enterAssert_not_equal_call(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitAssert_not_equal_call) {
	 		listener.exitAssert_not_equal_call(this);
		}
	}
}


export class Function_declarationContext extends ParserRuleContext {
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
	public function_parameters(): Function_parametersContext {
		return this.getTypedRuleContext(Function_parametersContext, 0) as Function_parametersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_function_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunction_declaration) {
	 		listener.enterFunction_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunction_declaration) {
	 		listener.exitFunction_declaration(this);
		}
	}
}


export class Function_parametersContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_parameter_list(): Function_parameterContext[] {
		return this.getTypedRuleContexts(Function_parameterContext) as Function_parameterContext[];
	}
	public function_parameter(i: number): Function_parameterContext {
		return this.getTypedRuleContext(Function_parameterContext, i) as Function_parameterContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_function_parameters;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunction_parameters) {
	 		listener.enterFunction_parameters(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunction_parameters) {
	 		listener.exitFunction_parameters(this);
		}
	}
}


export class Function_parameterContext extends ParserRuleContext {
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
    	return LeoParser.RULE_function_parameter;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterFunction_parameter) {
	 		listener.enterFunction_parameter(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitFunction_parameter) {
	 		listener.exitFunction_parameter(this);
		}
	}
}


export class Inline_declarationContext extends ParserRuleContext {
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
	public function_parameters(): Function_parametersContext {
		return this.getTypedRuleContext(Function_parametersContext, 0) as Function_parametersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_inline_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInline_declaration) {
	 		listener.enterInline_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInline_declaration) {
	 		listener.exitInline_declaration(this);
		}
	}
}


export class Transition_declarationContext extends ParserRuleContext {
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
	public function_parameters(): Function_parametersContext {
		return this.getTypedRuleContext(Function_parametersContext, 0) as Function_parametersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public finalizer(): FinalizerContext {
		return this.getTypedRuleContext(FinalizerContext, 0) as FinalizerContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_transition_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterTransition_declaration) {
	 		listener.enterTransition_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitTransition_declaration) {
	 		listener.exitTransition_declaration(this);
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
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public function_parameters(): Function_parametersContext {
		return this.getTypedRuleContext(Function_parametersContext, 0) as Function_parametersContext;
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


export class Struct_declarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public struct_component_declarations(): Struct_component_declarationsContext {
		return this.getTypedRuleContext(Struct_component_declarationsContext, 0) as Struct_component_declarationsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_struct_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStruct_declaration) {
	 		listener.enterStruct_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStruct_declaration) {
	 		listener.exitStruct_declaration(this);
		}
	}
}


export class Struct_component_declarationsContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public struct_component_declaration_list(): Struct_component_declarationContext[] {
		return this.getTypedRuleContexts(Struct_component_declarationContext) as Struct_component_declarationContext[];
	}
	public struct_component_declaration(i: number): Struct_component_declarationContext {
		return this.getTypedRuleContext(Struct_component_declarationContext, i) as Struct_component_declarationContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_struct_component_declarations;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStruct_component_declarations) {
	 		listener.enterStruct_component_declarations(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStruct_component_declarations) {
	 		listener.exitStruct_component_declarations(this);
		}
	}
}


export class Struct_component_declarationContext extends ParserRuleContext {
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
    	return LeoParser.RULE_struct_component_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterStruct_component_declaration) {
	 		listener.enterStruct_component_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitStruct_component_declaration) {
	 		listener.exitStruct_component_declaration(this);
		}
	}
}


export class Record_declarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public struct_component_declarations(): Struct_component_declarationsContext {
		return this.getTypedRuleContext(Struct_component_declarationsContext, 0) as Struct_component_declarationsContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_record_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterRecord_declaration) {
	 		listener.enterRecord_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitRecord_declaration) {
	 		listener.exitRecord_declaration(this);
		}
	}
}


export class Mapping_declarationContext extends ParserRuleContext {
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
    	return LeoParser.RULE_mapping_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterMapping_declaration) {
	 		listener.enterMapping_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitMapping_declaration) {
	 		listener.exitMapping_declaration(this);
		}
	}
}


export class Program_itemContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_declaration(): Function_declarationContext {
		return this.getTypedRuleContext(Function_declarationContext, 0) as Function_declarationContext;
	}
	public inline_declaration(): Inline_declarationContext {
		return this.getTypedRuleContext(Inline_declarationContext, 0) as Inline_declarationContext;
	}
	public transition_declaration(): Transition_declarationContext {
		return this.getTypedRuleContext(Transition_declarationContext, 0) as Transition_declarationContext;
	}
	public struct_declaration(): Struct_declarationContext {
		return this.getTypedRuleContext(Struct_declarationContext, 0) as Struct_declarationContext;
	}
	public record_declaration(): Record_declarationContext {
		return this.getTypedRuleContext(Record_declarationContext, 0) as Record_declarationContext;
	}
	public mapping_declaration(): Mapping_declarationContext {
		return this.getTypedRuleContext(Mapping_declarationContext, 0) as Mapping_declarationContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_program_item;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterProgram_item) {
	 		listener.enterProgram_item(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitProgram_item) {
	 		listener.exitProgram_item(this);
		}
	}
}


export class Program_declarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public program_id(): Program_idContext {
		return this.getTypedRuleContext(Program_idContext, 0) as Program_idContext;
	}
	public program_item_list(): Program_itemContext[] {
		return this.getTypedRuleContexts(Program_itemContext) as Program_itemContext[];
	}
	public program_item(i: number): Program_itemContext {
		return this.getTypedRuleContext(Program_itemContext, i) as Program_itemContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_program_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterProgram_declaration) {
	 		listener.enterProgram_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitProgram_declaration) {
	 		listener.exitProgram_declaration(this);
		}
	}
}


export class Import_declarationContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public program_id(): Program_idContext {
		return this.getTypedRuleContext(Program_idContext, 0) as Program_idContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_import_declaration;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterImport_declaration) {
	 		listener.enterImport_declaration(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitImport_declaration) {
	 		listener.exitImport_declaration(this);
		}
	}
}


export class SourceUnitContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public program_declaration(): Program_declarationContext {
		return this.getTypedRuleContext(Program_declarationContext, 0) as Program_declarationContext;
	}
	public import_declaration_list(): Import_declarationContext[] {
		return this.getTypedRuleContexts(Import_declarationContext) as Import_declarationContext[];
	}
	public import_declaration(i: number): Import_declarationContext {
		return this.getTypedRuleContext(Import_declarationContext, i) as Import_declarationContext;
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


export class Input_typeContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_input_type;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInput_type) {
	 		listener.enterInput_type(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInput_type) {
	 		listener.exitInput_type(this);
		}
	}
}


export class Input_expressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_input_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInput_expression) {
	 		listener.enterInput_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInput_expression) {
	 		listener.exitInput_expression(this);
		}
	}
}


export class Input_itemContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public input_type(): Input_typeContext {
		return this.getTypedRuleContext(Input_typeContext, 0) as Input_typeContext;
	}
	public input_expression(): Input_expressionContext {
		return this.getTypedRuleContext(Input_expressionContext, 0) as Input_expressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_input_item;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInput_item) {
	 		listener.enterInput_item(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInput_item) {
	 		listener.exitInput_item(this);
		}
	}
}


export class Input_sectionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INPUT_TITLE(): TerminalNode {
		return this.getToken(LeoParser.INPUT_TITLE, 0);
	}
	public input_item_list(): Input_itemContext[] {
		return this.getTypedRuleContexts(Input_itemContext) as Input_itemContext[];
	}
	public input_item(i: number): Input_itemContext {
		return this.getTypedRuleContext(Input_itemContext, i) as Input_itemContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_input_section;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInput_section) {
	 		listener.enterInput_section(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInput_section) {
	 		listener.exitInput_section(this);
		}
	}
}


export class Input_fileContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_section_list(): Input_sectionContext[] {
		return this.getTypedRuleContexts(Input_sectionContext) as Input_sectionContext[];
	}
	public input_section(i: number): Input_sectionContext {
		return this.getTypedRuleContext(Input_sectionContext, i) as Input_sectionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_input_file;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterInput_file) {
	 		listener.enterInput_file(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitInput_file) {
	 		listener.exitInput_file(this);
		}
	}
}


export class Output_expressionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_output_expression;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutput_expression) {
	 		listener.enterOutput_expression(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutput_expression) {
	 		listener.exitOutput_expression(this);
		}
	}
}


export class Output_itemContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public output_expression(): Output_expressionContext {
		return this.getTypedRuleContext(Output_expressionContext, 0) as Output_expressionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_output_item;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutput_item) {
	 		listener.enterOutput_item(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutput_item) {
	 		listener.exitOutput_item(this);
		}
	}
}


export class Output_sectionContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OUTPUT_TITLE(): TerminalNode {
		return this.getToken(LeoParser.OUTPUT_TITLE, 0);
	}
	public output_item(): Output_itemContext {
		return this.getTypedRuleContext(Output_itemContext, 0) as Output_itemContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_output_section;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutput_section) {
	 		listener.enterOutput_section(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutput_section) {
	 		listener.exitOutput_section(this);
		}
	}
}


export class Output_fileContext extends ParserRuleContext {
	constructor(parser?: LeoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public output_section(): Output_sectionContext {
		return this.getTypedRuleContext(Output_sectionContext, 0) as Output_sectionContext;
	}
    public get ruleIndex(): number {
    	return LeoParser.RULE_output_file;
	}
	public enterRule(listener: LeoListener): void {
	    if(listener.enterOutput_file) {
	 		listener.enterOutput_file(this);
		}
	}
	public exitRule(listener: LeoListener): void {
	    if(listener.exitOutput_file) {
	 		listener.exitOutput_file(this);
		}
	}
}
