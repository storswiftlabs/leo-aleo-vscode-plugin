// Generated from Aleo.g4 by ANTLR 4.13.0
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
import AleoListener from "./AleoListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class AleoParser extends Parser {
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
	public static readonly DIGIT = 79;
	public static readonly Addressliteral = 80;
	public static readonly ADDRESS_TYPE = 81;
	public static readonly FIELD_TYPE = 82;
	public static readonly GROUP_TYPE = 83;
	public static readonly SCALAR_TYPE = 84;
	public static readonly BRANCH_OP = 85;
	public static readonly UNSIGNED_TYPE = 86;
	public static readonly SIGNED_TYPE = 87;
	public static readonly BOOLEAN_TYPE = 88;
	public static readonly STRING_TYPE = 89;
	public static readonly Ternary_op = 90;
	public static readonly Commit_op = 91;
	public static readonly Hash_op = 92;
	public static readonly CAST_OP = 93;
	public static readonly Identifier = 94;
	public static readonly Signed_literal = 95;
	public static readonly Unsigned_literal = 96;
	public static readonly Field_literal = 97;
	public static readonly Group_literal = 98;
	public static readonly Scalar_literal = 99;
	public static readonly BOOLEAN_LITERAL = 100;
	public static readonly WS = 101;
	public static readonly COMMENT = 102;
	public static readonly LINE_COMMENT = 103;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_unarp_op = 0;
	public static readonly RULE_binary_op = 1;
	public static readonly RULE_is_op = 2;
	public static readonly RULE_assert_op = 3;
	public static readonly RULE_letter = 4;
	public static readonly RULE_register = 5;
	public static readonly RULE_register_access = 6;
	public static readonly RULE_identifier = 7;
	public static readonly RULE_program_name = 8;
	public static readonly RULE_program_domain = 9;
	public static readonly RULE_program_id = 10;
	public static readonly RULE_locator = 11;
	public static readonly RULE_integer_literal = 12;
	public static readonly RULE_arithmetic_literal = 13;
	public static readonly RULE_literal = 14;
	public static readonly RULE_operand = 15;
	public static readonly RULE_integer_type = 16;
	public static readonly RULE_arithmetic_type = 17;
	public static readonly RULE_literal_type = 18;
	public static readonly RULE_plaintext_type = 19;
	public static readonly RULE_value_type = 20;
	public static readonly RULE_finalize_type = 21;
	public static readonly RULE_entry_type = 22;
	public static readonly RULE_register_type = 23;
	public static readonly RULE_import_1 = 24;
	public static readonly RULE_mapping = 25;
	public static readonly RULE_mapping_key = 26;
	public static readonly RULE_mapping_value = 27;
	public static readonly RULE_struct_1 = 28;
	public static readonly RULE_tuple = 29;
	public static readonly RULE_record = 30;
	public static readonly RULE_entry = 31;
	public static readonly RULE_cast_destination = 32;
	public static readonly RULE_unary = 33;
	public static readonly RULE_binary = 34;
	public static readonly RULE_ternary = 35;
	public static readonly RULE_is_1 = 36;
	public static readonly RULE_assert_1 = 37;
	public static readonly RULE_commit = 38;
	public static readonly RULE_hash = 39;
	public static readonly RULE_cast = 40;
	public static readonly RULE_call = 41;
	public static readonly RULE_instruction = 42;
	public static readonly RULE_contains = 43;
	public static readonly RULE_get = 44;
	public static readonly RULE_get_or_use = 45;
	public static readonly RULE_set = 46;
	public static readonly RULE_remove = 47;
	public static readonly RULE_random = 48;
	public static readonly RULE_label = 49;
	public static readonly RULE_position = 50;
	public static readonly RULE_branch = 51;
	public static readonly RULE_command = 52;
	public static readonly RULE_finalize_command = 53;
	public static readonly RULE_closure = 54;
	public static readonly RULE_closure_input = 55;
	public static readonly RULE_closure_output = 56;
	public static readonly RULE_function = 57;
	public static readonly RULE_function_input = 58;
	public static readonly RULE_function_output = 59;
	public static readonly RULE_finalize = 60;
	public static readonly RULE_finalize_input = 61;
	public static readonly RULE_finalize_output = 62;
	public static readonly RULE_sourceUnit = 63;
	public static readonly literalNames: (string | null)[] = [ null, "'abs'", 
                                                            "'abs.w'", "'double'", 
                                                            "'inv'", "'neg'", 
                                                            "'not'", "'square'", 
                                                            "'sqrt'", "'add'", 
                                                            "'add.w'", "'sub'", 
                                                            "'sub.w'", "'mul'", 
                                                            "'mul.w'", "'div'", 
                                                            "'div.w'", "'rem'", 
                                                            "'rem.w'", "'mod'", 
                                                            "'pow'", "'pow.w'", 
                                                            "'shl'", "'shl.w'", 
                                                            "'shr'", "'shr.w'", 
                                                            "'and'", "'or'", 
                                                            "'xor'", "'nand'", 
                                                            "'nor'", "'gt'", 
                                                            "'gte'", "'lt'", 
                                                            "'lte'", "'is.eq'", 
                                                            "'is.neq'", 
                                                            "'assert.eq'", 
                                                            "'assert.neq'", 
                                                            "'.'", "'owner'", 
                                                            "'_'", "'/'", 
                                                            "'group::GEN'", 
                                                            "'self.caller'", 
                                                            "'block.height'", 
                                                            "'.constant'", 
                                                            "'.public'", 
                                                            "'.private'", 
                                                            "'.record'", 
                                                            "'import'", 
                                                            "';'", "'mapping'", 
                                                            "':'", "'key'", 
                                                            "'as'", "'value'", 
                                                            "'struct'", 
                                                            "'record'", 
                                                            "'gates'", "'group.x'", 
                                                            "'group.y'", 
                                                            "'into'", "'call'", 
                                                            "'contains'", 
                                                            "'['", "']'", 
                                                            "'get'", "'get.or_use'", 
                                                            "'set'", "'remove'", 
                                                            "'rand.chacha'", 
                                                            "'position'", 
                                                            "'finalize'", 
                                                            "'closure'", 
                                                            "'input'", "'output'", 
                                                            "'function'", 
                                                            "'program'", 
                                                            null, null, 
                                                            "'address'", 
                                                            "'field'", "'group'", 
                                                            "'scalar'", 
                                                            null, null, 
                                                            null, "'boolean'", 
                                                            "'string'", 
                                                            "'ternary'", 
                                                            null, null, 
                                                            "'cast'" ];
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
                                                             null, "DIGIT", 
                                                             "Addressliteral", 
                                                             "ADDRESS_TYPE", 
                                                             "FIELD_TYPE", 
                                                             "GROUP_TYPE", 
                                                             "SCALAR_TYPE", 
                                                             "BRANCH_OP", 
                                                             "UNSIGNED_TYPE", 
                                                             "SIGNED_TYPE", 
                                                             "BOOLEAN_TYPE", 
                                                             "STRING_TYPE", 
                                                             "Ternary_op", 
                                                             "Commit_op", 
                                                             "Hash_op", 
                                                             "CAST_OP", 
                                                             "Identifier", 
                                                             "Signed_literal", 
                                                             "Unsigned_literal", 
                                                             "Field_literal", 
                                                             "Group_literal", 
                                                             "Scalar_literal", 
                                                             "BOOLEAN_LITERAL", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"unarp_op", "binary_op", "is_op", "assert_op", "letter", "register", "register_access", 
		"identifier", "program_name", "program_domain", "program_id", "locator", 
		"integer_literal", "arithmetic_literal", "literal", "operand", "integer_type", 
		"arithmetic_type", "literal_type", "plaintext_type", "value_type", "finalize_type", 
		"entry_type", "register_type", "import_1", "mapping", "mapping_key", "mapping_value", 
		"struct_1", "tuple", "record", "entry", "cast_destination", "unary", "binary", 
		"ternary", "is_1", "assert_1", "commit", "hash", "cast", "call", "instruction", 
		"contains", "get", "get_or_use", "set", "remove", "random", "label", "position", 
		"branch", "command", "finalize_command", "closure", "closure_input", "closure_output", 
		"function", "function_input", "function_output", "finalize", "finalize_input", 
		"finalize_output", "sourceUnit",
	];
	public get grammarFileName(): string { return "Aleo.g4"; }
	public get literalNames(): (string | null)[] { return AleoParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return AleoParser.symbolicNames; }
	public get ruleNames(): string[] { return AleoParser.ruleNames; }
	public get serializedATN(): number[] { return AleoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, AleoParser._ATN, AleoParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public unarp_op(): Unarp_opContext {
		let localctx: Unarp_opContext = new Unarp_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, AleoParser.RULE_unarp_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0))) {
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
	public binary_op(): Binary_opContext {
		let localctx: Binary_opContext = new Binary_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, AleoParser.RULE_binary_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			_la = this._input.LA(1);
			if(!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & 67108863) !== 0))) {
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
	public is_op(): Is_opContext {
		let localctx: Is_opContext = new Is_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, AleoParser.RULE_is_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			_la = this._input.LA(1);
			if(!(_la===35 || _la===36)) {
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
	public assert_op(): Assert_opContext {
		let localctx: Assert_opContext = new Assert_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, AleoParser.RULE_assert_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
			_la = this._input.LA(1);
			if(!(_la===37 || _la===38)) {
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
	public letter(): LetterContext {
		let localctx: LetterContext = new LetterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, AleoParser.RULE_letter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this.match(AleoParser.Identifier);
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
	public register(): RegisterContext {
		let localctx: RegisterContext = new RegisterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, AleoParser.RULE_register);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this.match(AleoParser.Identifier);
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
	public register_access(): Register_accessContext {
		let localctx: Register_accessContext = new Register_accessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, AleoParser.RULE_register_access);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			this.register();
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===39) {
				{
				{
				this.state = 141;
				this.match(AleoParser.T__38);
				this.state = 144;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 40:
					{
					this.state = 142;
					this.match(AleoParser.T__39);
					}
					break;
				case 94:
					{
					this.state = 143;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 150;
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
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, AleoParser.RULE_identifier);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.letter();
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 155;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 94:
						{
						this.state = 152;
						this.letter();
						}
						break;
					case 79:
						{
						this.state = 153;
						this.match(AleoParser.DIGIT);
						}
						break;
					case 41:
						{
						this.state = 154;
						this.match(AleoParser.T__40);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
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
	public program_name(): Program_nameContext {
		let localctx: Program_nameContext = new Program_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, AleoParser.RULE_program_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
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
	public program_domain(): Program_domainContext {
		let localctx: Program_domainContext = new Program_domainContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, AleoParser.RULE_program_domain);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
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
		this.enterRule(localctx, 20, AleoParser.RULE_program_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this.program_name();
			this.state = 165;
			this.match(AleoParser.T__38);
			this.state = 166;
			this.program_domain();
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
		this.enterRule(localctx, 22, AleoParser.RULE_locator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 168;
			this.program_id();
			this.state = 169;
			this.match(AleoParser.T__41);
			this.state = 170;
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
	public integer_literal(): Integer_literalContext {
		let localctx: Integer_literalContext = new Integer_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, AleoParser.RULE_integer_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
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
	public arithmetic_literal(): Arithmetic_literalContext {
		let localctx: Arithmetic_literalContext = new Arithmetic_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, AleoParser.RULE_arithmetic_literal);
		try {
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 174;
				this.integer_literal();
				}
				break;
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 175;
				this.match(AleoParser.Field_literal);
				}
				break;
			case 98:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 176;
				this.match(AleoParser.Group_literal);
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 177;
				this.match(AleoParser.Scalar_literal);
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
		this.enterRule(localctx, 28, AleoParser.RULE_literal);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 180;
				this.arithmetic_literal();
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 181;
				this.match(AleoParser.Addressliteral);
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 182;
				this.match(AleoParser.BOOLEAN_LITERAL);
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
	public operand(): OperandContext {
		let localctx: OperandContext = new OperandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, AleoParser.RULE_operand);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 185;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 186;
				this.register_access();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 187;
				this.program_id();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 188;
				this.match(AleoParser.T__42);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 189;
				this.match(AleoParser.T__43);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 190;
				this.match(AleoParser.T__44);
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
	public integer_type(): Integer_typeContext {
		let localctx: Integer_typeContext = new Integer_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, AleoParser.RULE_integer_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			_la = this._input.LA(1);
			if(!(_la===86 || _la===87)) {
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
		this.enterRule(localctx, 34, AleoParser.RULE_arithmetic_type);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
			case 87:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 195;
				this.integer_type();
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 196;
				this.match(AleoParser.FIELD_TYPE);
				}
				break;
			case 83:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 197;
				this.match(AleoParser.GROUP_TYPE);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 198;
				this.match(AleoParser.SCALAR_TYPE);
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
	public literal_type(): Literal_typeContext {
		let localctx: Literal_typeContext = new Literal_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, AleoParser.RULE_literal_type);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 82:
			case 83:
			case 84:
			case 86:
			case 87:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 201;
				this.arithmetic_type();
				}
				break;
			case 81:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 202;
				this.match(AleoParser.ADDRESS_TYPE);
				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 203;
				this.match(AleoParser.BOOLEAN_TYPE);
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 204;
				this.match(AleoParser.STRING_TYPE);
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
	public plaintext_type(): Plaintext_typeContext {
		let localctx: Plaintext_typeContext = new Plaintext_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, AleoParser.RULE_plaintext_type);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 87:
			case 88:
			case 89:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 207;
				this.literal_type();
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 208;
				this.identifier();
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
	public value_type(): Value_typeContext {
		let localctx: Value_typeContext = new Value_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, AleoParser.RULE_value_type);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 211;
				this.plaintext_type();
				this.state = 212;
				this.match(AleoParser.T__45);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 214;
				this.plaintext_type();
				this.state = 215;
				this.match(AleoParser.T__46);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 217;
				this.plaintext_type();
				this.state = 218;
				this.match(AleoParser.T__47);
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 220;
				this.identifier();
				this.state = 221;
				this.match(AleoParser.T__48);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				{
				this.state = 223;
				this.locator();
				this.state = 224;
				this.match(AleoParser.T__48);
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
	public finalize_type(): Finalize_typeContext {
		let localctx: Finalize_typeContext = new Finalize_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, AleoParser.RULE_finalize_type);
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 228;
				this.plaintext_type();
				this.state = 229;
				this.match(AleoParser.T__46);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 231;
				this.identifier();
				this.state = 232;
				this.match(AleoParser.T__48);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 234;
				this.locator();
				this.state = 235;
				this.match(AleoParser.T__48);
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
	public entry_type(): Entry_typeContext {
		let localctx: Entry_typeContext = new Entry_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, AleoParser.RULE_entry_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this.plaintext_type();
			this.state = 240;
			_la = this._input.LA(1);
			if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
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
	public register_type(): Register_typeContext {
		let localctx: Register_typeContext = new Register_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, AleoParser.RULE_register_type);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 242;
				this.locator();
				this.state = 243;
				this.match(AleoParser.T__48);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 245;
				this.identifier();
				this.state = 246;
				this.match(AleoParser.T__48);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 248;
				this.plaintext_type();
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
	public import_1(): Import_1Context {
		let localctx: Import_1Context = new Import_1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 48, AleoParser.RULE_import_1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.match(AleoParser.T__49);
			this.state = 252;
			this.program_id();
			this.state = 253;
			this.match(AleoParser.T__50);
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
	public mapping(): MappingContext {
		let localctx: MappingContext = new MappingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, AleoParser.RULE_mapping);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this.match(AleoParser.T__51);
			this.state = 256;
			this.identifier();
			this.state = 257;
			this.match(AleoParser.T__52);
			this.state = 258;
			this.mapping_key();
			this.state = 259;
			this.mapping_value();
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
	public mapping_key(): Mapping_keyContext {
		let localctx: Mapping_keyContext = new Mapping_keyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, AleoParser.RULE_mapping_key);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(AleoParser.T__53);
			this.state = 262;
			this.identifier();
			this.state = 263;
			this.match(AleoParser.T__54);
			this.state = 264;
			this.finalize_type();
			this.state = 265;
			this.match(AleoParser.T__50);
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
	public mapping_value(): Mapping_valueContext {
		let localctx: Mapping_valueContext = new Mapping_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, AleoParser.RULE_mapping_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this.match(AleoParser.T__55);
			this.state = 268;
			this.identifier();
			this.state = 269;
			this.match(AleoParser.T__54);
			this.state = 270;
			this.finalize_type();
			this.state = 271;
			this.match(AleoParser.T__50);
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
	public struct_1(): Struct_1Context {
		let localctx: Struct_1Context = new Struct_1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 56, AleoParser.RULE_struct_1);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 273;
			this.match(AleoParser.T__56);
			this.state = 274;
			this.identifier();
			this.state = 275;
			this.match(AleoParser.T__52);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 276;
				this.tuple();
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===94);
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
	public tuple(): TupleContext {
		let localctx: TupleContext = new TupleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, AleoParser.RULE_tuple);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this.identifier();
			this.state = 282;
			this.match(AleoParser.T__54);
			this.state = 283;
			this.plaintext_type();
			this.state = 284;
			this.match(AleoParser.T__50);
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
	public record(): RecordContext {
		let localctx: RecordContext = new RecordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, AleoParser.RULE_record);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			this.match(AleoParser.T__57);
			this.state = 287;
			this.identifier();
			this.state = 288;
			this.match(AleoParser.T__52);
			this.state = 289;
			this.match(AleoParser.T__39);
			this.state = 290;
			this.match(AleoParser.T__54);
			this.state = 291;
			this.match(AleoParser.ADDRESS_TYPE);
			this.state = 292;
			_la = this._input.LA(1);
			if(!(_la===47 || _la===48)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 293;
			this.match(AleoParser.T__50);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===59) {
				{
				{
				this.state = 294;
				this.match(AleoParser.T__58);
				this.state = 295;
				this.match(AleoParser.T__54);
				this.state = 296;
				this.value_type();
				this.state = 297;
				this.match(AleoParser.T__50);
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 304;
				this.entry();
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===94);
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
	public entry(): EntryContext {
		let localctx: EntryContext = new EntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, AleoParser.RULE_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this.identifier();
			this.state = 310;
			this.match(AleoParser.T__54);
			this.state = 311;
			this.entry_type();
			this.state = 312;
			this.match(AleoParser.T__50);
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
	public cast_destination(): Cast_destinationContext {
		let localctx: Cast_destinationContext = new Cast_destinationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, AleoParser.RULE_cast_destination);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 87:
			case 88:
			case 89:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 314;
				this.register_type();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 315;
				this.match(AleoParser.T__59);
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 316;
				this.match(AleoParser.T__60);
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
	public unary(): UnaryContext {
		let localctx: UnaryContext = new UnaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, AleoParser.RULE_unary);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 319;
			this.unarp_op();
			{
			this.state = 320;
			this.operand();
			}
			this.state = 321;
			this.match(AleoParser.T__61);
			this.state = 322;
			this.register();
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
	public binary(): BinaryContext {
		let localctx: BinaryContext = new BinaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, AleoParser.RULE_binary);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.binary_op();
			{
			{
			this.state = 325;
			this.operand();
			}
			{
			this.state = 326;
			this.operand();
			}
			}
			this.state = 328;
			this.match(AleoParser.T__61);
			this.state = 329;
			this.register();
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
	public ternary(): TernaryContext {
		let localctx: TernaryContext = new TernaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, AleoParser.RULE_ternary);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 331;
			this.match(AleoParser.Ternary_op);
			{
			{
			this.state = 332;
			this.operand();
			}
			{
			this.state = 333;
			this.operand();
			}
			{
			this.state = 334;
			this.operand();
			}
			}
			this.state = 336;
			this.match(AleoParser.T__61);
			this.state = 337;
			this.register();
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
	public is_1(): Is_1Context {
		let localctx: Is_1Context = new Is_1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 72, AleoParser.RULE_is_1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 339;
			this.is_op();
			this.state = 340;
			this.operand();
			this.state = 341;
			this.operand();
			this.state = 342;
			this.match(AleoParser.T__61);
			this.state = 343;
			this.register();
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
	public assert_1(): Assert_1Context {
		let localctx: Assert_1Context = new Assert_1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 74, AleoParser.RULE_assert_1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 345;
			this.assert_op();
			this.state = 346;
			this.operand();
			this.state = 347;
			this.operand();
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
	public commit(): CommitContext {
		let localctx: CommitContext = new CommitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, AleoParser.RULE_commit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			this.match(AleoParser.Commit_op);
			this.state = 350;
			this.operand();
			this.state = 351;
			this.operand();
			this.state = 352;
			this.match(AleoParser.T__61);
			this.state = 353;
			this.register();
			this.state = 354;
			this.match(AleoParser.T__54);
			this.state = 355;
			_la = this._input.LA(1);
			if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 7) !== 0))) {
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
	public hash(): HashContext {
		let localctx: HashContext = new HashContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, AleoParser.RULE_hash);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			this.match(AleoParser.Hash_op);
			this.state = 358;
			this.operand();
			this.state = 359;
			this.match(AleoParser.T__61);
			this.state = 360;
			this.register();
			this.state = 361;
			this.match(AleoParser.T__54);
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 82:
			case 83:
			case 84:
			case 86:
			case 87:
				{
				this.state = 362;
				this.arithmetic_type();
				}
				break;
			case 81:
				{
				this.state = 363;
				this.match(AleoParser.ADDRESS_TYPE);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public cast(): CastContext {
		let localctx: CastContext = new CastContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, AleoParser.RULE_cast);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.match(AleoParser.CAST_OP);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 367;
				this.operand();
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2080769) !== 0));
			this.state = 372;
			this.match(AleoParser.T__61);
			this.state = 373;
			this.register();
			this.state = 374;
			this.match(AleoParser.T__54);
			this.state = 375;
			this.cast_destination();
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
	public call(): CallContext {
		let localctx: CallContext = new CallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, AleoParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 377;
			this.match(AleoParser.T__62);
			this.state = 380;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 378;
				this.locator();
				}
				break;
			case 2:
				{
				this.state = 379;
				this.identifier();
				}
				break;
			}
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2080769) !== 0)) {
				{
				{
				this.state = 382;
				this.operand();
				}
				}
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 388;
			this.match(AleoParser.T__61);
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 389;
				this.register();
				}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===94);
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
	public instruction(): InstructionContext {
		let localctx: InstructionContext = new InstructionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, AleoParser.RULE_instruction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 403;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				{
				this.state = 394;
				this.unary();
				}
				break;
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
				{
				this.state = 395;
				this.binary();
				}
				break;
			case 90:
				{
				this.state = 396;
				this.ternary();
				}
				break;
			case 35:
			case 36:
				{
				this.state = 397;
				this.is_1();
				}
				break;
			case 37:
			case 38:
				{
				this.state = 398;
				this.assert_1();
				}
				break;
			case 91:
				{
				this.state = 399;
				this.commit();
				}
				break;
			case 92:
				{
				this.state = 400;
				this.hash();
				}
				break;
			case 93:
				{
				this.state = 401;
				this.cast();
				}
				break;
			case 63:
				{
				this.state = 402;
				this.call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 405;
			this.match(AleoParser.T__50);
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
	public contains(): ContainsContext {
		let localctx: ContainsContext = new ContainsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, AleoParser.RULE_contains);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.match(AleoParser.T__63);
			this.state = 408;
			this.identifier();
			this.state = 409;
			this.match(AleoParser.T__64);
			this.state = 410;
			this.operand();
			this.state = 411;
			this.match(AleoParser.T__65);
			this.state = 412;
			this.match(AleoParser.T__61);
			this.state = 413;
			this.register();
			this.state = 414;
			this.match(AleoParser.T__50);
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
	public get_(): GetContext {
		let localctx: GetContext = new GetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, AleoParser.RULE_get);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 416;
			this.match(AleoParser.T__66);
			this.state = 417;
			this.identifier();
			this.state = 418;
			this.match(AleoParser.T__64);
			this.state = 419;
			this.operand();
			this.state = 420;
			this.match(AleoParser.T__65);
			this.state = 421;
			this.match(AleoParser.T__61);
			this.state = 422;
			this.register();
			this.state = 423;
			this.match(AleoParser.T__50);
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
	public get_or_use(): Get_or_useContext {
		let localctx: Get_or_useContext = new Get_or_useContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, AleoParser.RULE_get_or_use);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this.match(AleoParser.T__67);
			this.state = 426;
			this.identifier();
			this.state = 427;
			this.match(AleoParser.T__64);
			this.state = 428;
			this.operand();
			this.state = 429;
			this.match(AleoParser.T__65);
			this.state = 430;
			this.operand();
			this.state = 431;
			this.match(AleoParser.T__61);
			this.state = 432;
			this.register();
			this.state = 433;
			this.match(AleoParser.T__50);
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
	public set_(): SetContext {
		let localctx: SetContext = new SetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, AleoParser.RULE_set);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 435;
			this.match(AleoParser.T__68);
			this.state = 436;
			this.operand();
			this.state = 437;
			this.match(AleoParser.T__61);
			this.state = 438;
			this.identifier();
			this.state = 439;
			this.match(AleoParser.T__64);
			this.state = 440;
			this.operand();
			this.state = 441;
			this.match(AleoParser.T__65);
			this.state = 442;
			this.match(AleoParser.T__50);
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
	public remove(): RemoveContext {
		let localctx: RemoveContext = new RemoveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, AleoParser.RULE_remove);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 444;
			this.match(AleoParser.T__69);
			this.state = 445;
			this.identifier();
			this.state = 446;
			this.match(AleoParser.T__64);
			this.state = 447;
			this.operand();
			this.state = 448;
			this.match(AleoParser.T__65);
			this.state = 449;
			this.match(AleoParser.T__50);
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
	public random(): RandomContext {
		let localctx: RandomContext = new RandomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, AleoParser.RULE_random);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 451;
			this.match(AleoParser.T__70);
			{
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				{
				{
				this.state = 452;
				this.operand();
				}
				{
				this.state = 453;
				this.operand();
				}
				}
				}
				break;
			case 2:
				{
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2080769) !== 0)) {
					{
					this.state = 455;
					this.operand();
					}
				}

				}
				break;
			}
			}
			this.state = 460;
			this.match(AleoParser.T__61);
			this.state = 461;
			this.register();
			this.state = 462;
			this.match(AleoParser.T__54);
			this.state = 463;
			this.literal_type();
			this.state = 464;
			this.match(AleoParser.T__50);
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
	public label(): LabelContext {
		let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, AleoParser.RULE_label);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 466;
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
	public position(): PositionContext {
		let localctx: PositionContext = new PositionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, AleoParser.RULE_position);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 468;
			this.match(AleoParser.T__71);
			this.state = 469;
			this.label();
			this.state = 470;
			this.match(AleoParser.T__50);
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
		this.enterRule(localctx, 102, AleoParser.RULE_branch);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 472;
			this.match(AleoParser.BRANCH_OP);
			this.state = 473;
			this.operand();
			this.state = 474;
			this.operand();
			this.state = 475;
			this.label();
			this.state = 476;
			this.match(AleoParser.T__50);
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
	public command(): CommandContext {
		let localctx: CommandContext = new CommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, AleoParser.RULE_command);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 478;
				this.contains();
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 479;
				this.get_();
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 480;
				this.get_or_use();
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 481;
				this.set_();
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 482;
				this.remove();
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 483;
				this.random();
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 484;
				this.position();
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 485;
				this.branch();
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 63:
			case 90:
			case 91:
			case 92:
			case 93:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 486;
				this.instruction();
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
	public finalize_command(): Finalize_commandContext {
		let localctx: Finalize_commandContext = new Finalize_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, AleoParser.RULE_finalize_command);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 489;
			this.match(AleoParser.T__72);
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2080769) !== 0)) {
				{
				{
				this.state = 490;
				this.operand();
				}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 496;
			this.match(AleoParser.T__50);
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
	public closure(): ClosureContext {
		let localctx: ClosureContext = new ClosureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, AleoParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.match(AleoParser.T__73);
			this.state = 499;
			this.identifier();
			this.state = 500;
			this.match(AleoParser.T__52);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===75) {
				{
				{
				this.state = 501;
				this.closure_input();
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 507;
				this.instruction();
				}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2147483775) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0));
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===76) {
				{
				{
				this.state = 512;
				this.closure_output();
				}
				}
				this.state = 517;
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
	public closure_input(): Closure_inputContext {
		let localctx: Closure_inputContext = new Closure_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, AleoParser.RULE_closure_input);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 518;
			this.match(AleoParser.T__74);
			this.state = 519;
			this.register();
			this.state = 520;
			this.match(AleoParser.T__54);
			this.state = 521;
			this.register_type();
			this.state = 522;
			this.match(AleoParser.T__50);
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
	public closure_output(): Closure_outputContext {
		let localctx: Closure_outputContext = new Closure_outputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, AleoParser.RULE_closure_output);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 524;
			this.match(AleoParser.T__75);
			this.state = 525;
			this.operand();
			this.state = 526;
			this.match(AleoParser.T__54);
			this.state = 527;
			this.register_type();
			this.state = 528;
			this.match(AleoParser.T__50);
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
	public function_(): FunctionContext {
		let localctx: FunctionContext = new FunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, AleoParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 530;
			this.match(AleoParser.T__76);
			this.state = 531;
			this.identifier();
			this.state = 532;
			this.match(AleoParser.T__52);
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===75) {
				{
				{
				this.state = 533;
				this.function_input();
				}
				}
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2147483775) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
				{
				{
				this.state = 539;
				this.instruction();
				}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===76) {
				{
				{
				this.state = 545;
				this.function_output();
				}
				}
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 551;
				this.finalize_command();
				this.state = 552;
				this.finalize();
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
	public function_input(): Function_inputContext {
		let localctx: Function_inputContext = new Function_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, AleoParser.RULE_function_input);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 556;
			this.match(AleoParser.T__74);
			this.state = 557;
			this.register();
			this.state = 558;
			this.match(AleoParser.T__54);
			this.state = 559;
			this.value_type();
			this.state = 560;
			this.match(AleoParser.T__50);
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
	public function_output(): Function_outputContext {
		let localctx: Function_outputContext = new Function_outputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, AleoParser.RULE_function_output);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 562;
			this.match(AleoParser.T__75);
			this.state = 563;
			this.operand();
			this.state = 564;
			this.match(AleoParser.T__54);
			this.state = 565;
			this.value_type();
			this.state = 566;
			this.match(AleoParser.T__50);
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
	public finalize(): FinalizeContext {
		let localctx: FinalizeContext = new FinalizeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, AleoParser.RULE_finalize);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this.match(AleoParser.T__72);
			this.state = 569;
			this.identifier();
			this.state = 570;
			this.match(AleoParser.T__52);
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===75) {
				{
				{
				this.state = 571;
				this.finalize_input();
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 577;
				this.command();
				}
				}
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2147483775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1008730617) !== 0));
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===76) {
				{
				{
				this.state = 582;
				this.finalize_output();
				}
				}
				this.state = 587;
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
	public finalize_input(): Finalize_inputContext {
		let localctx: Finalize_inputContext = new Finalize_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, AleoParser.RULE_finalize_input);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 588;
			this.match(AleoParser.T__74);
			this.state = 589;
			this.register();
			this.state = 590;
			this.match(AleoParser.T__54);
			this.state = 591;
			this.finalize_type();
			this.state = 592;
			this.match(AleoParser.T__50);
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
	public finalize_output(): Finalize_outputContext {
		let localctx: Finalize_outputContext = new Finalize_outputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, AleoParser.RULE_finalize_output);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 594;
			this.match(AleoParser.T__75);
			this.state = 595;
			this.operand();
			this.state = 596;
			this.match(AleoParser.T__54);
			this.state = 597;
			this.finalize_type();
			this.state = 598;
			this.match(AleoParser.T__50);
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
		this.enterRule(localctx, 126, AleoParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
			case 50:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===50) {
					{
					{
					this.state = 600;
					this.import_1();
					}
					}
					this.state = 605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 78:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 606;
				this.match(AleoParser.T__77);
				this.state = 607;
				this.program_id();
				this.state = 608;
				this.match(AleoParser.T__50);
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 614;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 52:
						{
						this.state = 609;
						this.mapping();
						}
						break;
					case 57:
						{
						this.state = 610;
						this.struct_1();
						}
						break;
					case 58:
						{
						this.state = 611;
						this.record();
						}
						break;
					case 74:
						{
						this.state = 612;
						this.closure();
						}
						break;
					case 77:
						{
						this.state = 613;
						this.function_();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 616;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 37748833) !== 0));
				this.state = 618;
				this.match(AleoParser.EOF);
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

	public static readonly _serializedATN: number[] = [4,1,103,623,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,
	4,1,5,1,5,1,6,1,6,1,6,1,6,3,6,145,8,6,5,6,147,8,6,10,6,12,6,150,9,6,1,7,
	1,7,1,7,1,7,5,7,156,8,7,10,7,12,7,159,9,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,
	1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,3,13,179,8,13,1,
	14,1,14,1,14,3,14,184,8,14,1,15,1,15,1,15,1,15,1,15,1,15,3,15,192,8,15,
	1,16,1,16,1,17,1,17,1,17,1,17,3,17,200,8,17,1,18,1,18,1,18,1,18,3,18,206,
	8,18,1,19,1,19,3,19,210,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
	20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,227,8,20,1,21,1,21,1,21,1,21,1,21,
	1,21,1,21,1,21,1,21,3,21,238,8,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,
	23,1,23,1,23,3,23,250,8,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,
	1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,
	28,1,28,1,28,4,28,278,8,28,11,28,12,28,279,1,29,1,29,1,29,1,29,1,29,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,300,8,
	30,10,30,12,30,303,9,30,1,30,4,30,306,8,30,11,30,12,30,307,1,31,1,31,1,
	31,1,31,1,31,1,32,1,32,1,32,3,32,318,8,32,1,33,1,33,1,33,1,33,1,33,1,34,
	1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,
	1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,365,8,39,1,40,1,
	40,4,40,369,8,40,11,40,12,40,370,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,
	3,41,381,8,41,1,41,5,41,384,8,41,10,41,12,41,387,9,41,1,41,1,41,4,41,391,
	8,41,11,41,12,41,392,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,
	404,8,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,
	44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
	1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,
	47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,3,48,457,8,48,3,48,459,
	8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,50,1,50,1,50,1,50,1,51,1,
	51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,
	488,8,52,1,53,1,53,5,53,492,8,53,10,53,12,53,495,9,53,1,53,1,53,1,54,1,
	54,1,54,1,54,5,54,503,8,54,10,54,12,54,506,9,54,1,54,4,54,509,8,54,11,54,
	12,54,510,1,54,5,54,514,8,54,10,54,12,54,517,9,54,1,55,1,55,1,55,1,55,1,
	55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,5,57,535,8,57,
	10,57,12,57,538,9,57,1,57,5,57,541,8,57,10,57,12,57,544,9,57,1,57,5,57,
	547,8,57,10,57,12,57,550,9,57,1,57,1,57,1,57,3,57,555,8,57,1,58,1,58,1,
	58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,5,60,
	573,8,60,10,60,12,60,576,9,60,1,60,4,60,579,8,60,11,60,12,60,580,1,60,5,
	60,584,8,60,10,60,12,60,587,9,60,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,
	1,62,1,62,1,62,1,62,1,63,5,63,602,8,63,10,63,12,63,605,9,63,1,63,1,63,1,
	63,1,63,1,63,1,63,1,63,1,63,4,63,615,8,63,11,63,12,63,616,1,63,1,63,3,63,
	621,8,63,1,63,0,0,64,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
	86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
	126,0,9,1,0,1,8,1,0,9,34,1,0,35,36,1,0,37,38,1,0,95,96,1,0,86,87,1,0,46,
	48,1,0,47,48,1,0,81,83,634,0,128,1,0,0,0,2,130,1,0,0,0,4,132,1,0,0,0,6,
	134,1,0,0,0,8,136,1,0,0,0,10,138,1,0,0,0,12,140,1,0,0,0,14,151,1,0,0,0,
	16,160,1,0,0,0,18,162,1,0,0,0,20,164,1,0,0,0,22,168,1,0,0,0,24,172,1,0,
	0,0,26,178,1,0,0,0,28,183,1,0,0,0,30,191,1,0,0,0,32,193,1,0,0,0,34,199,
	1,0,0,0,36,205,1,0,0,0,38,209,1,0,0,0,40,226,1,0,0,0,42,237,1,0,0,0,44,
	239,1,0,0,0,46,249,1,0,0,0,48,251,1,0,0,0,50,255,1,0,0,0,52,261,1,0,0,0,
	54,267,1,0,0,0,56,273,1,0,0,0,58,281,1,0,0,0,60,286,1,0,0,0,62,309,1,0,
	0,0,64,317,1,0,0,0,66,319,1,0,0,0,68,324,1,0,0,0,70,331,1,0,0,0,72,339,
	1,0,0,0,74,345,1,0,0,0,76,349,1,0,0,0,78,357,1,0,0,0,80,366,1,0,0,0,82,
	377,1,0,0,0,84,403,1,0,0,0,86,407,1,0,0,0,88,416,1,0,0,0,90,425,1,0,0,0,
	92,435,1,0,0,0,94,444,1,0,0,0,96,451,1,0,0,0,98,466,1,0,0,0,100,468,1,0,
	0,0,102,472,1,0,0,0,104,487,1,0,0,0,106,489,1,0,0,0,108,498,1,0,0,0,110,
	518,1,0,0,0,112,524,1,0,0,0,114,530,1,0,0,0,116,556,1,0,0,0,118,562,1,0,
	0,0,120,568,1,0,0,0,122,588,1,0,0,0,124,594,1,0,0,0,126,620,1,0,0,0,128,
	129,7,0,0,0,129,1,1,0,0,0,130,131,7,1,0,0,131,3,1,0,0,0,132,133,7,2,0,0,
	133,5,1,0,0,0,134,135,7,3,0,0,135,7,1,0,0,0,136,137,5,94,0,0,137,9,1,0,
	0,0,138,139,5,94,0,0,139,11,1,0,0,0,140,148,3,10,5,0,141,144,5,39,0,0,142,
	145,5,40,0,0,143,145,3,14,7,0,144,142,1,0,0,0,144,143,1,0,0,0,145,147,1,
	0,0,0,146,141,1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,
	13,1,0,0,0,150,148,1,0,0,0,151,157,3,8,4,0,152,156,3,8,4,0,153,156,5,79,
	0,0,154,156,5,41,0,0,155,152,1,0,0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,
	159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,15,1,0,0,0,159,157,1,0,
	0,0,160,161,3,14,7,0,161,17,1,0,0,0,162,163,3,14,7,0,163,19,1,0,0,0,164,
	165,3,16,8,0,165,166,5,39,0,0,166,167,3,18,9,0,167,21,1,0,0,0,168,169,3,
	20,10,0,169,170,5,42,0,0,170,171,3,14,7,0,171,23,1,0,0,0,172,173,7,4,0,
	0,173,25,1,0,0,0,174,179,3,24,12,0,175,179,5,97,0,0,176,179,5,98,0,0,177,
	179,5,99,0,0,178,174,1,0,0,0,178,175,1,0,0,0,178,176,1,0,0,0,178,177,1,
	0,0,0,179,27,1,0,0,0,180,184,3,26,13,0,181,184,5,80,0,0,182,184,5,100,0,
	0,183,180,1,0,0,0,183,181,1,0,0,0,183,182,1,0,0,0,184,29,1,0,0,0,185,192,
	3,28,14,0,186,192,3,12,6,0,187,192,3,20,10,0,188,192,5,43,0,0,189,192,5,
	44,0,0,190,192,5,45,0,0,191,185,1,0,0,0,191,186,1,0,0,0,191,187,1,0,0,0,
	191,188,1,0,0,0,191,189,1,0,0,0,191,190,1,0,0,0,192,31,1,0,0,0,193,194,
	7,5,0,0,194,33,1,0,0,0,195,200,3,32,16,0,196,200,5,82,0,0,197,200,5,83,
	0,0,198,200,5,84,0,0,199,195,1,0,0,0,199,196,1,0,0,0,199,197,1,0,0,0,199,
	198,1,0,0,0,200,35,1,0,0,0,201,206,3,34,17,0,202,206,5,81,0,0,203,206,5,
	88,0,0,204,206,5,89,0,0,205,201,1,0,0,0,205,202,1,0,0,0,205,203,1,0,0,0,
	205,204,1,0,0,0,206,37,1,0,0,0,207,210,3,36,18,0,208,210,3,14,7,0,209,207,
	1,0,0,0,209,208,1,0,0,0,210,39,1,0,0,0,211,212,3,38,19,0,212,213,5,46,0,
	0,213,227,1,0,0,0,214,215,3,38,19,0,215,216,5,47,0,0,216,227,1,0,0,0,217,
	218,3,38,19,0,218,219,5,48,0,0,219,227,1,0,0,0,220,221,3,14,7,0,221,222,
	5,49,0,0,222,227,1,0,0,0,223,224,3,22,11,0,224,225,5,49,0,0,225,227,1,0,
	0,0,226,211,1,0,0,0,226,214,1,0,0,0,226,217,1,0,0,0,226,220,1,0,0,0,226,
	223,1,0,0,0,227,41,1,0,0,0,228,229,3,38,19,0,229,230,5,47,0,0,230,238,1,
	0,0,0,231,232,3,14,7,0,232,233,5,49,0,0,233,238,1,0,0,0,234,235,3,22,11,
	0,235,236,5,49,0,0,236,238,1,0,0,0,237,228,1,0,0,0,237,231,1,0,0,0,237,
	234,1,0,0,0,238,43,1,0,0,0,239,240,3,38,19,0,240,241,7,6,0,0,241,45,1,0,
	0,0,242,243,3,22,11,0,243,244,5,49,0,0,244,250,1,0,0,0,245,246,3,14,7,0,
	246,247,5,49,0,0,247,250,1,0,0,0,248,250,3,38,19,0,249,242,1,0,0,0,249,
	245,1,0,0,0,249,248,1,0,0,0,250,47,1,0,0,0,251,252,5,50,0,0,252,253,3,20,
	10,0,253,254,5,51,0,0,254,49,1,0,0,0,255,256,5,52,0,0,256,257,3,14,7,0,
	257,258,5,53,0,0,258,259,3,52,26,0,259,260,3,54,27,0,260,51,1,0,0,0,261,
	262,5,54,0,0,262,263,3,14,7,0,263,264,5,55,0,0,264,265,3,42,21,0,265,266,
	5,51,0,0,266,53,1,0,0,0,267,268,5,56,0,0,268,269,3,14,7,0,269,270,5,55,
	0,0,270,271,3,42,21,0,271,272,5,51,0,0,272,55,1,0,0,0,273,274,5,57,0,0,
	274,275,3,14,7,0,275,277,5,53,0,0,276,278,3,58,29,0,277,276,1,0,0,0,278,
	279,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,57,1,0,0,0,281,282,3,14,
	7,0,282,283,5,55,0,0,283,284,3,38,19,0,284,285,5,51,0,0,285,59,1,0,0,0,
	286,287,5,58,0,0,287,288,3,14,7,0,288,289,5,53,0,0,289,290,5,40,0,0,290,
	291,5,55,0,0,291,292,5,81,0,0,292,293,7,7,0,0,293,301,5,51,0,0,294,295,
	5,59,0,0,295,296,5,55,0,0,296,297,3,40,20,0,297,298,5,51,0,0,298,300,1,
	0,0,0,299,294,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,
	305,1,0,0,0,303,301,1,0,0,0,304,306,3,62,31,0,305,304,1,0,0,0,306,307,1,
	0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,61,1,0,0,0,309,310,3,14,7,0,310,
	311,5,55,0,0,311,312,3,44,22,0,312,313,5,51,0,0,313,63,1,0,0,0,314,318,
	3,46,23,0,315,318,5,60,0,0,316,318,5,61,0,0,317,314,1,0,0,0,317,315,1,0,
	0,0,317,316,1,0,0,0,318,65,1,0,0,0,319,320,3,0,0,0,320,321,3,30,15,0,321,
	322,5,62,0,0,322,323,3,10,5,0,323,67,1,0,0,0,324,325,3,2,1,0,325,326,3,
	30,15,0,326,327,3,30,15,0,327,328,1,0,0,0,328,329,5,62,0,0,329,330,3,10,
	5,0,330,69,1,0,0,0,331,332,5,90,0,0,332,333,3,30,15,0,333,334,3,30,15,0,
	334,335,3,30,15,0,335,336,1,0,0,0,336,337,5,62,0,0,337,338,3,10,5,0,338,
	71,1,0,0,0,339,340,3,4,2,0,340,341,3,30,15,0,341,342,3,30,15,0,342,343,
	5,62,0,0,343,344,3,10,5,0,344,73,1,0,0,0,345,346,3,6,3,0,346,347,3,30,15,
	0,347,348,3,30,15,0,348,75,1,0,0,0,349,350,5,91,0,0,350,351,3,30,15,0,351,
	352,3,30,15,0,352,353,5,62,0,0,353,354,3,10,5,0,354,355,5,55,0,0,355,356,
	7,8,0,0,356,77,1,0,0,0,357,358,5,92,0,0,358,359,3,30,15,0,359,360,5,62,
	0,0,360,361,3,10,5,0,361,364,5,55,0,0,362,365,3,34,17,0,363,365,5,81,0,
	0,364,362,1,0,0,0,364,363,1,0,0,0,365,79,1,0,0,0,366,368,5,93,0,0,367,369,
	3,30,15,0,368,367,1,0,0,0,369,370,1,0,0,0,370,368,1,0,0,0,370,371,1,0,0,
	0,371,372,1,0,0,0,372,373,5,62,0,0,373,374,3,10,5,0,374,375,5,55,0,0,375,
	376,3,64,32,0,376,81,1,0,0,0,377,380,5,63,0,0,378,381,3,22,11,0,379,381,
	3,14,7,0,380,378,1,0,0,0,380,379,1,0,0,0,381,385,1,0,0,0,382,384,3,30,15,
	0,383,382,1,0,0,0,384,387,1,0,0,0,385,383,1,0,0,0,385,386,1,0,0,0,386,388,
	1,0,0,0,387,385,1,0,0,0,388,390,5,62,0,0,389,391,3,10,5,0,390,389,1,0,0,
	0,391,392,1,0,0,0,392,390,1,0,0,0,392,393,1,0,0,0,393,83,1,0,0,0,394,404,
	3,66,33,0,395,404,3,68,34,0,396,404,3,70,35,0,397,404,3,72,36,0,398,404,
	3,74,37,0,399,404,3,76,38,0,400,404,3,78,39,0,401,404,3,80,40,0,402,404,
	3,82,41,0,403,394,1,0,0,0,403,395,1,0,0,0,403,396,1,0,0,0,403,397,1,0,0,
	0,403,398,1,0,0,0,403,399,1,0,0,0,403,400,1,0,0,0,403,401,1,0,0,0,403,402,
	1,0,0,0,404,405,1,0,0,0,405,406,5,51,0,0,406,85,1,0,0,0,407,408,5,64,0,
	0,408,409,3,14,7,0,409,410,5,65,0,0,410,411,3,30,15,0,411,412,5,66,0,0,
	412,413,5,62,0,0,413,414,3,10,5,0,414,415,5,51,0,0,415,87,1,0,0,0,416,417,
	5,67,0,0,417,418,3,14,7,0,418,419,5,65,0,0,419,420,3,30,15,0,420,421,5,
	66,0,0,421,422,5,62,0,0,422,423,3,10,5,0,423,424,5,51,0,0,424,89,1,0,0,
	0,425,426,5,68,0,0,426,427,3,14,7,0,427,428,5,65,0,0,428,429,3,30,15,0,
	429,430,5,66,0,0,430,431,3,30,15,0,431,432,5,62,0,0,432,433,3,10,5,0,433,
	434,5,51,0,0,434,91,1,0,0,0,435,436,5,69,0,0,436,437,3,30,15,0,437,438,
	5,62,0,0,438,439,3,14,7,0,439,440,5,65,0,0,440,441,3,30,15,0,441,442,5,
	66,0,0,442,443,5,51,0,0,443,93,1,0,0,0,444,445,5,70,0,0,445,446,3,14,7,
	0,446,447,5,65,0,0,447,448,3,30,15,0,448,449,5,66,0,0,449,450,5,51,0,0,
	450,95,1,0,0,0,451,458,5,71,0,0,452,453,3,30,15,0,453,454,3,30,15,0,454,
	459,1,0,0,0,455,457,3,30,15,0,456,455,1,0,0,0,456,457,1,0,0,0,457,459,1,
	0,0,0,458,452,1,0,0,0,458,456,1,0,0,0,459,460,1,0,0,0,460,461,5,62,0,0,
	461,462,3,10,5,0,462,463,5,55,0,0,463,464,3,36,18,0,464,465,5,51,0,0,465,
	97,1,0,0,0,466,467,3,14,7,0,467,99,1,0,0,0,468,469,5,72,0,0,469,470,3,98,
	49,0,470,471,5,51,0,0,471,101,1,0,0,0,472,473,5,85,0,0,473,474,3,30,15,
	0,474,475,3,30,15,0,475,476,3,98,49,0,476,477,5,51,0,0,477,103,1,0,0,0,
	478,488,3,86,43,0,479,488,3,88,44,0,480,488,3,90,45,0,481,488,3,92,46,0,
	482,488,3,94,47,0,483,488,3,96,48,0,484,488,3,100,50,0,485,488,3,102,51,
	0,486,488,3,84,42,0,487,478,1,0,0,0,487,479,1,0,0,0,487,480,1,0,0,0,487,
	481,1,0,0,0,487,482,1,0,0,0,487,483,1,0,0,0,487,484,1,0,0,0,487,485,1,0,
	0,0,487,486,1,0,0,0,488,105,1,0,0,0,489,493,5,73,0,0,490,492,3,30,15,0,
	491,490,1,0,0,0,492,495,1,0,0,0,493,491,1,0,0,0,493,494,1,0,0,0,494,496,
	1,0,0,0,495,493,1,0,0,0,496,497,5,51,0,0,497,107,1,0,0,0,498,499,5,74,0,
	0,499,500,3,14,7,0,500,504,5,53,0,0,501,503,3,110,55,0,502,501,1,0,0,0,
	503,506,1,0,0,0,504,502,1,0,0,0,504,505,1,0,0,0,505,508,1,0,0,0,506,504,
	1,0,0,0,507,509,3,84,42,0,508,507,1,0,0,0,509,510,1,0,0,0,510,508,1,0,0,
	0,510,511,1,0,0,0,511,515,1,0,0,0,512,514,3,112,56,0,513,512,1,0,0,0,514,
	517,1,0,0,0,515,513,1,0,0,0,515,516,1,0,0,0,516,109,1,0,0,0,517,515,1,0,
	0,0,518,519,5,75,0,0,519,520,3,10,5,0,520,521,5,55,0,0,521,522,3,46,23,
	0,522,523,5,51,0,0,523,111,1,0,0,0,524,525,5,76,0,0,525,526,3,30,15,0,526,
	527,5,55,0,0,527,528,3,46,23,0,528,529,5,51,0,0,529,113,1,0,0,0,530,531,
	5,77,0,0,531,532,3,14,7,0,532,536,5,53,0,0,533,535,3,116,58,0,534,533,1,
	0,0,0,535,538,1,0,0,0,536,534,1,0,0,0,536,537,1,0,0,0,537,542,1,0,0,0,538,
	536,1,0,0,0,539,541,3,84,42,0,540,539,1,0,0,0,541,544,1,0,0,0,542,540,1,
	0,0,0,542,543,1,0,0,0,543,548,1,0,0,0,544,542,1,0,0,0,545,547,3,118,59,
	0,546,545,1,0,0,0,547,550,1,0,0,0,548,546,1,0,0,0,548,549,1,0,0,0,549,554,
	1,0,0,0,550,548,1,0,0,0,551,552,3,106,53,0,552,553,3,120,60,0,553,555,1,
	0,0,0,554,551,1,0,0,0,554,555,1,0,0,0,555,115,1,0,0,0,556,557,5,75,0,0,
	557,558,3,10,5,0,558,559,5,55,0,0,559,560,3,40,20,0,560,561,5,51,0,0,561,
	117,1,0,0,0,562,563,5,76,0,0,563,564,3,30,15,0,564,565,5,55,0,0,565,566,
	3,40,20,0,566,567,5,51,0,0,567,119,1,0,0,0,568,569,5,73,0,0,569,570,3,14,
	7,0,570,574,5,53,0,0,571,573,3,122,61,0,572,571,1,0,0,0,573,576,1,0,0,0,
	574,572,1,0,0,0,574,575,1,0,0,0,575,578,1,0,0,0,576,574,1,0,0,0,577,579,
	3,104,52,0,578,577,1,0,0,0,579,580,1,0,0,0,580,578,1,0,0,0,580,581,1,0,
	0,0,581,585,1,0,0,0,582,584,3,124,62,0,583,582,1,0,0,0,584,587,1,0,0,0,
	585,583,1,0,0,0,585,586,1,0,0,0,586,121,1,0,0,0,587,585,1,0,0,0,588,589,
	5,75,0,0,589,590,3,10,5,0,590,591,5,55,0,0,591,592,3,42,21,0,592,593,5,
	51,0,0,593,123,1,0,0,0,594,595,5,76,0,0,595,596,3,30,15,0,596,597,5,55,
	0,0,597,598,3,42,21,0,598,599,5,51,0,0,599,125,1,0,0,0,600,602,3,48,24,
	0,601,600,1,0,0,0,602,605,1,0,0,0,603,601,1,0,0,0,603,604,1,0,0,0,604,621,
	1,0,0,0,605,603,1,0,0,0,606,607,5,78,0,0,607,608,3,20,10,0,608,614,5,51,
	0,0,609,615,3,50,25,0,610,615,3,56,28,0,611,615,3,60,30,0,612,615,3,108,
	54,0,613,615,3,114,57,0,614,609,1,0,0,0,614,610,1,0,0,0,614,611,1,0,0,0,
	614,612,1,0,0,0,614,613,1,0,0,0,615,616,1,0,0,0,616,614,1,0,0,0,616,617,
	1,0,0,0,617,618,1,0,0,0,618,619,5,0,0,1,619,621,1,0,0,0,620,603,1,0,0,0,
	620,606,1,0,0,0,621,127,1,0,0,0,41,144,148,155,157,178,183,191,199,205,
	209,226,237,249,279,301,307,317,364,370,380,385,392,403,456,458,487,493,
	504,510,515,536,542,548,554,574,580,585,603,614,616,620];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AleoParser.__ATN) {
			AleoParser.__ATN = new ATNDeserializer().deserialize(AleoParser._serializedATN);
		}

		return AleoParser.__ATN;
	}


	static DecisionsToDFA = AleoParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Unarp_opContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_unarp_op;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterUnarp_op) {
	 		listener.enterUnarp_op(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitUnarp_op) {
	 		listener.exitUnarp_op(this);
		}
	}
}


export class Binary_opContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_binary_op;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterBinary_op) {
	 		listener.enterBinary_op(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitBinary_op) {
	 		listener.exitBinary_op(this);
		}
	}
}


export class Is_opContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_is_op;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterIs_op) {
	 		listener.enterIs_op(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitIs_op) {
	 		listener.exitIs_op(this);
		}
	}
}


export class Assert_opContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_assert_op;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterAssert_op) {
	 		listener.enterAssert_op(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitAssert_op) {
	 		listener.exitAssert_op(this);
		}
	}
}


export class LetterContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(AleoParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_letter;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterLetter) {
	 		listener.enterLetter(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitLetter) {
	 		listener.exitLetter(this);
		}
	}
}


export class RegisterContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(AleoParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_register;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterRegister) {
	 		listener.enterRegister(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitRegister) {
	 		listener.exitRegister(this);
		}
	}
}


export class Register_accessContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_register_access;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterRegister_access) {
	 		listener.enterRegister_access(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitRegister_access) {
	 		listener.exitRegister_access(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public letter_list(): LetterContext[] {
		return this.getTypedRuleContexts(LetterContext) as LetterContext[];
	}
	public letter(i: number): LetterContext {
		return this.getTypedRuleContext(LetterContext, i) as LetterContext;
	}
	public DIGIT_list(): TerminalNode[] {
	    	return this.getTokens(AleoParser.DIGIT);
	}
	public DIGIT(i: number): TerminalNode {
		return this.getToken(AleoParser.DIGIT, i);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_identifier;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class Program_nameContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_program_name;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterProgram_name) {
	 		listener.enterProgram_name(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitProgram_name) {
	 		listener.exitProgram_name(this);
		}
	}
}


export class Program_domainContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_program_domain;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterProgram_domain) {
	 		listener.enterProgram_domain(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitProgram_domain) {
	 		listener.exitProgram_domain(this);
		}
	}
}


export class Program_idContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public program_name(): Program_nameContext {
		return this.getTypedRuleContext(Program_nameContext, 0) as Program_nameContext;
	}
	public program_domain(): Program_domainContext {
		return this.getTypedRuleContext(Program_domainContext, 0) as Program_domainContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_program_id;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterProgram_id) {
	 		listener.enterProgram_id(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitProgram_id) {
	 		listener.exitProgram_id(this);
		}
	}
}


export class LocatorContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return AleoParser.RULE_locator;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterLocator) {
	 		listener.enterLocator(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitLocator) {
	 		listener.exitLocator(this);
		}
	}
}


export class Integer_literalContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Signed_literal(): TerminalNode {
		return this.getToken(AleoParser.Signed_literal, 0);
	}
	public Unsigned_literal(): TerminalNode {
		return this.getToken(AleoParser.Unsigned_literal, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_integer_literal;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterInteger_literal) {
	 		listener.enterInteger_literal(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitInteger_literal) {
	 		listener.exitInteger_literal(this);
		}
	}
}


export class Arithmetic_literalContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integer_literal(): Integer_literalContext {
		return this.getTypedRuleContext(Integer_literalContext, 0) as Integer_literalContext;
	}
	public Field_literal(): TerminalNode {
		return this.getToken(AleoParser.Field_literal, 0);
	}
	public Group_literal(): TerminalNode {
		return this.getToken(AleoParser.Group_literal, 0);
	}
	public Scalar_literal(): TerminalNode {
		return this.getToken(AleoParser.Scalar_literal, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_arithmetic_literal;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterArithmetic_literal) {
	 		listener.enterArithmetic_literal(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitArithmetic_literal) {
	 		listener.exitArithmetic_literal(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic_literal(): Arithmetic_literalContext {
		return this.getTypedRuleContext(Arithmetic_literalContext, 0) as Arithmetic_literalContext;
	}
	public Addressliteral(): TerminalNode {
		return this.getToken(AleoParser.Addressliteral, 0);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(AleoParser.BOOLEAN_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_literal;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public register_access(): Register_accessContext {
		return this.getTypedRuleContext(Register_accessContext, 0) as Register_accessContext;
	}
	public program_id(): Program_idContext {
		return this.getTypedRuleContext(Program_idContext, 0) as Program_idContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_operand;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterOperand) {
	 		listener.enterOperand(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitOperand) {
	 		listener.exitOperand(this);
		}
	}
}


export class Integer_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNSIGNED_TYPE(): TerminalNode {
		return this.getToken(AleoParser.UNSIGNED_TYPE, 0);
	}
	public SIGNED_TYPE(): TerminalNode {
		return this.getToken(AleoParser.SIGNED_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_integer_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterInteger_type) {
	 		listener.enterInteger_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitInteger_type) {
	 		listener.exitInteger_type(this);
		}
	}
}


export class Arithmetic_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integer_type(): Integer_typeContext {
		return this.getTypedRuleContext(Integer_typeContext, 0) as Integer_typeContext;
	}
	public FIELD_TYPE(): TerminalNode {
		return this.getToken(AleoParser.FIELD_TYPE, 0);
	}
	public GROUP_TYPE(): TerminalNode {
		return this.getToken(AleoParser.GROUP_TYPE, 0);
	}
	public SCALAR_TYPE(): TerminalNode {
		return this.getToken(AleoParser.SCALAR_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_arithmetic_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterArithmetic_type) {
	 		listener.enterArithmetic_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitArithmetic_type) {
	 		listener.exitArithmetic_type(this);
		}
	}
}


export class Literal_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic_type(): Arithmetic_typeContext {
		return this.getTypedRuleContext(Arithmetic_typeContext, 0) as Arithmetic_typeContext;
	}
	public ADDRESS_TYPE(): TerminalNode {
		return this.getToken(AleoParser.ADDRESS_TYPE, 0);
	}
	public BOOLEAN_TYPE(): TerminalNode {
		return this.getToken(AleoParser.BOOLEAN_TYPE, 0);
	}
	public STRING_TYPE(): TerminalNode {
		return this.getToken(AleoParser.STRING_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_literal_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterLiteral_type) {
	 		listener.enterLiteral_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitLiteral_type) {
	 		listener.exitLiteral_type(this);
		}
	}
}


export class Plaintext_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_type(): Literal_typeContext {
		return this.getTypedRuleContext(Literal_typeContext, 0) as Literal_typeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_plaintext_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterPlaintext_type) {
	 		listener.enterPlaintext_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitPlaintext_type) {
	 		listener.exitPlaintext_type(this);
		}
	}
}


export class Value_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public plaintext_type(): Plaintext_typeContext {
		return this.getTypedRuleContext(Plaintext_typeContext, 0) as Plaintext_typeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_value_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterValue_type) {
	 		listener.enterValue_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitValue_type) {
	 		listener.exitValue_type(this);
		}
	}
}


export class Finalize_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public plaintext_type(): Plaintext_typeContext {
		return this.getTypedRuleContext(Plaintext_typeContext, 0) as Plaintext_typeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_finalize_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFinalize_type) {
	 		listener.enterFinalize_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFinalize_type) {
	 		listener.exitFinalize_type(this);
		}
	}
}


export class Entry_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public plaintext_type(): Plaintext_typeContext {
		return this.getTypedRuleContext(Plaintext_typeContext, 0) as Plaintext_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_entry_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterEntry_type) {
	 		listener.enterEntry_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitEntry_type) {
	 		listener.exitEntry_type(this);
		}
	}
}


export class Register_typeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public plaintext_type(): Plaintext_typeContext {
		return this.getTypedRuleContext(Plaintext_typeContext, 0) as Plaintext_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_register_type;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterRegister_type) {
	 		listener.enterRegister_type(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitRegister_type) {
	 		listener.exitRegister_type(this);
		}
	}
}


export class Import_1Context extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public program_id(): Program_idContext {
		return this.getTypedRuleContext(Program_idContext, 0) as Program_idContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_import_1;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterImport_1) {
	 		listener.enterImport_1(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitImport_1) {
	 		listener.exitImport_1(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public mapping_key(): Mapping_keyContext {
		return this.getTypedRuleContext(Mapping_keyContext, 0) as Mapping_keyContext;
	}
	public mapping_value(): Mapping_valueContext {
		return this.getTypedRuleContext(Mapping_valueContext, 0) as Mapping_valueContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_mapping;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterMapping) {
	 		listener.enterMapping(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitMapping) {
	 		listener.exitMapping(this);
		}
	}
}


export class Mapping_keyContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public finalize_type(): Finalize_typeContext {
		return this.getTypedRuleContext(Finalize_typeContext, 0) as Finalize_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_mapping_key;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterMapping_key) {
	 		listener.enterMapping_key(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitMapping_key) {
	 		listener.exitMapping_key(this);
		}
	}
}


export class Mapping_valueContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public finalize_type(): Finalize_typeContext {
		return this.getTypedRuleContext(Finalize_typeContext, 0) as Finalize_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_mapping_value;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterMapping_value) {
	 		listener.enterMapping_value(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitMapping_value) {
	 		listener.exitMapping_value(this);
		}
	}
}


export class Struct_1Context extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public tuple_list(): TupleContext[] {
		return this.getTypedRuleContexts(TupleContext) as TupleContext[];
	}
	public tuple(i: number): TupleContext {
		return this.getTypedRuleContext(TupleContext, i) as TupleContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_struct_1;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterStruct_1) {
	 		listener.enterStruct_1(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitStruct_1) {
	 		listener.exitStruct_1(this);
		}
	}
}


export class TupleContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public plaintext_type(): Plaintext_typeContext {
		return this.getTypedRuleContext(Plaintext_typeContext, 0) as Plaintext_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_tuple;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterTuple) {
	 		listener.enterTuple(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitTuple) {
	 		listener.exitTuple(this);
		}
	}
}


export class RecordContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ADDRESS_TYPE(): TerminalNode {
		return this.getToken(AleoParser.ADDRESS_TYPE, 0);
	}
	public value_type_list(): Value_typeContext[] {
		return this.getTypedRuleContexts(Value_typeContext) as Value_typeContext[];
	}
	public value_type(i: number): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, i) as Value_typeContext;
	}
	public entry_list(): EntryContext[] {
		return this.getTypedRuleContexts(EntryContext) as EntryContext[];
	}
	public entry(i: number): EntryContext {
		return this.getTypedRuleContext(EntryContext, i) as EntryContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_record;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterRecord) {
	 		listener.enterRecord(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitRecord) {
	 		listener.exitRecord(this);
		}
	}
}


export class EntryContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public entry_type(): Entry_typeContext {
		return this.getTypedRuleContext(Entry_typeContext, 0) as Entry_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_entry;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterEntry) {
	 		listener.enterEntry(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitEntry) {
	 		listener.exitEntry(this);
		}
	}
}


export class Cast_destinationContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public register_type(): Register_typeContext {
		return this.getTypedRuleContext(Register_typeContext, 0) as Register_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_cast_destination;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterCast_destination) {
	 		listener.enterCast_destination(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitCast_destination) {
	 		listener.exitCast_destination(this);
		}
	}
}


export class UnaryContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unarp_op(): Unarp_opContext {
		return this.getTypedRuleContext(Unarp_opContext, 0) as Unarp_opContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_unary;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterUnary) {
	 		listener.enterUnary(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitUnary) {
	 		listener.exitUnary(this);
		}
	}
}


export class BinaryContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public binary_op(): Binary_opContext {
		return this.getTypedRuleContext(Binary_opContext, 0) as Binary_opContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_binary;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterBinary) {
	 		listener.enterBinary(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitBinary) {
	 		listener.exitBinary(this);
		}
	}
}


export class TernaryContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Ternary_op(): TerminalNode {
		return this.getToken(AleoParser.Ternary_op, 0);
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_ternary;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterTernary) {
	 		listener.enterTernary(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitTernary) {
	 		listener.exitTernary(this);
		}
	}
}


export class Is_1Context extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public is_op(): Is_opContext {
		return this.getTypedRuleContext(Is_opContext, 0) as Is_opContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_is_1;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterIs_1) {
	 		listener.enterIs_1(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitIs_1) {
	 		listener.exitIs_1(this);
		}
	}
}


export class Assert_1Context extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assert_op(): Assert_opContext {
		return this.getTypedRuleContext(Assert_opContext, 0) as Assert_opContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_assert_1;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterAssert_1) {
	 		listener.enterAssert_1(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitAssert_1) {
	 		listener.exitAssert_1(this);
		}
	}
}


export class CommitContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Commit_op(): TerminalNode {
		return this.getToken(AleoParser.Commit_op, 0);
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public ADDRESS_TYPE(): TerminalNode {
		return this.getToken(AleoParser.ADDRESS_TYPE, 0);
	}
	public FIELD_TYPE(): TerminalNode {
		return this.getToken(AleoParser.FIELD_TYPE, 0);
	}
	public GROUP_TYPE(): TerminalNode {
		return this.getToken(AleoParser.GROUP_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_commit;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterCommit) {
	 		listener.enterCommit(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitCommit) {
	 		listener.exitCommit(this);
		}
	}
}


export class HashContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Hash_op(): TerminalNode {
		return this.getToken(AleoParser.Hash_op, 0);
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public arithmetic_type(): Arithmetic_typeContext {
		return this.getTypedRuleContext(Arithmetic_typeContext, 0) as Arithmetic_typeContext;
	}
	public ADDRESS_TYPE(): TerminalNode {
		return this.getToken(AleoParser.ADDRESS_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_hash;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterHash) {
	 		listener.enterHash(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitHash) {
	 		listener.exitHash(this);
		}
	}
}


export class CastContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CAST_OP(): TerminalNode {
		return this.getToken(AleoParser.CAST_OP, 0);
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public cast_destination(): Cast_destinationContext {
		return this.getTypedRuleContext(Cast_destinationContext, 0) as Cast_destinationContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_cast;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterCast) {
	 		listener.enterCast(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitCast) {
	 		listener.exitCast(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public locator(): LocatorContext {
		return this.getTypedRuleContext(LocatorContext, 0) as LocatorContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
	public register_list(): RegisterContext[] {
		return this.getTypedRuleContexts(RegisterContext) as RegisterContext[];
	}
	public register(i: number): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, i) as RegisterContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_call;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unary(): UnaryContext {
		return this.getTypedRuleContext(UnaryContext, 0) as UnaryContext;
	}
	public binary(): BinaryContext {
		return this.getTypedRuleContext(BinaryContext, 0) as BinaryContext;
	}
	public ternary(): TernaryContext {
		return this.getTypedRuleContext(TernaryContext, 0) as TernaryContext;
	}
	public is_1(): Is_1Context {
		return this.getTypedRuleContext(Is_1Context, 0) as Is_1Context;
	}
	public assert_1(): Assert_1Context {
		return this.getTypedRuleContext(Assert_1Context, 0) as Assert_1Context;
	}
	public commit(): CommitContext {
		return this.getTypedRuleContext(CommitContext, 0) as CommitContext;
	}
	public hash(): HashContext {
		return this.getTypedRuleContext(HashContext, 0) as HashContext;
	}
	public cast(): CastContext {
		return this.getTypedRuleContext(CastContext, 0) as CastContext;
	}
	public call(): CallContext {
		return this.getTypedRuleContext(CallContext, 0) as CallContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_instruction;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterInstruction) {
	 		listener.enterInstruction(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitInstruction) {
	 		listener.exitInstruction(this);
		}
	}
}


export class ContainsContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_contains;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterContains) {
	 		listener.enterContains(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitContains) {
	 		listener.exitContains(this);
		}
	}
}


export class GetContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_get;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterGet) {
	 		listener.enterGet(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitGet) {
	 		listener.exitGet(this);
		}
	}
}


export class Get_or_useContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_get_or_use;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterGet_or_use) {
	 		listener.enterGet_or_use(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitGet_or_use) {
	 		listener.exitGet_or_use(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_set;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterSet) {
	 		listener.enterSet(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitSet) {
	 		listener.exitSet(this);
		}
	}
}


export class RemoveContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_remove;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterRemove) {
	 		listener.enterRemove(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitRemove) {
	 		listener.exitRemove(this);
		}
	}
}


export class RandomContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public literal_type(): Literal_typeContext {
		return this.getTypedRuleContext(Literal_typeContext, 0) as Literal_typeContext;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_random;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterRandom) {
	 		listener.enterRandom(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitRandom) {
	 		listener.exitRandom(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_label;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterLabel) {
	 		listener.enterLabel(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitLabel) {
	 		listener.exitLabel(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_position;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterPosition) {
	 		listener.enterPosition(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitPosition) {
	 		listener.exitPosition(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRANCH_OP(): TerminalNode {
		return this.getToken(AleoParser.BRANCH_OP, 0);
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_branch;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterBranch) {
	 		listener.enterBranch(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitBranch) {
	 		listener.exitBranch(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public contains(): ContainsContext {
		return this.getTypedRuleContext(ContainsContext, 0) as ContainsContext;
	}
	public get_(): GetContext {
		return this.getTypedRuleContext(GetContext, 0) as GetContext;
	}
	public get_or_use(): Get_or_useContext {
		return this.getTypedRuleContext(Get_or_useContext, 0) as Get_or_useContext;
	}
	public set_(): SetContext {
		return this.getTypedRuleContext(SetContext, 0) as SetContext;
	}
	public remove(): RemoveContext {
		return this.getTypedRuleContext(RemoveContext, 0) as RemoveContext;
	}
	public random(): RandomContext {
		return this.getTypedRuleContext(RandomContext, 0) as RandomContext;
	}
	public position(): PositionContext {
		return this.getTypedRuleContext(PositionContext, 0) as PositionContext;
	}
	public branch(): BranchContext {
		return this.getTypedRuleContext(BranchContext, 0) as BranchContext;
	}
	public instruction(): InstructionContext {
		return this.getTypedRuleContext(InstructionContext, 0) as InstructionContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_command;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterCommand) {
	 		listener.enterCommand(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitCommand) {
	 		listener.exitCommand(this);
		}
	}
}


export class Finalize_commandContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public operand_list(): OperandContext[] {
		return this.getTypedRuleContexts(OperandContext) as OperandContext[];
	}
	public operand(i: number): OperandContext {
		return this.getTypedRuleContext(OperandContext, i) as OperandContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_finalize_command;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFinalize_command) {
	 		listener.enterFinalize_command(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFinalize_command) {
	 		listener.exitFinalize_command(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public closure_input_list(): Closure_inputContext[] {
		return this.getTypedRuleContexts(Closure_inputContext) as Closure_inputContext[];
	}
	public closure_input(i: number): Closure_inputContext {
		return this.getTypedRuleContext(Closure_inputContext, i) as Closure_inputContext;
	}
	public instruction_list(): InstructionContext[] {
		return this.getTypedRuleContexts(InstructionContext) as InstructionContext[];
	}
	public instruction(i: number): InstructionContext {
		return this.getTypedRuleContext(InstructionContext, i) as InstructionContext;
	}
	public closure_output_list(): Closure_outputContext[] {
		return this.getTypedRuleContexts(Closure_outputContext) as Closure_outputContext[];
	}
	public closure_output(i: number): Closure_outputContext {
		return this.getTypedRuleContext(Closure_outputContext, i) as Closure_outputContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_closure;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterClosure) {
	 		listener.enterClosure(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitClosure) {
	 		listener.exitClosure(this);
		}
	}
}


export class Closure_inputContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public register_type(): Register_typeContext {
		return this.getTypedRuleContext(Register_typeContext, 0) as Register_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_closure_input;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterClosure_input) {
	 		listener.enterClosure_input(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitClosure_input) {
	 		listener.exitClosure_input(this);
		}
	}
}


export class Closure_outputContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public register_type(): Register_typeContext {
		return this.getTypedRuleContext(Register_typeContext, 0) as Register_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_closure_output;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterClosure_output) {
	 		listener.enterClosure_output(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitClosure_output) {
	 		listener.exitClosure_output(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public function_input_list(): Function_inputContext[] {
		return this.getTypedRuleContexts(Function_inputContext) as Function_inputContext[];
	}
	public function_input(i: number): Function_inputContext {
		return this.getTypedRuleContext(Function_inputContext, i) as Function_inputContext;
	}
	public instruction_list(): InstructionContext[] {
		return this.getTypedRuleContexts(InstructionContext) as InstructionContext[];
	}
	public instruction(i: number): InstructionContext {
		return this.getTypedRuleContext(InstructionContext, i) as InstructionContext;
	}
	public function_output_list(): Function_outputContext[] {
		return this.getTypedRuleContexts(Function_outputContext) as Function_outputContext[];
	}
	public function_output(i: number): Function_outputContext {
		return this.getTypedRuleContext(Function_outputContext, i) as Function_outputContext;
	}
	public finalize_command(): Finalize_commandContext {
		return this.getTypedRuleContext(Finalize_commandContext, 0) as Finalize_commandContext;
	}
	public finalize(): FinalizeContext {
		return this.getTypedRuleContext(FinalizeContext, 0) as FinalizeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_function;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFunction) {
	 		listener.enterFunction(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFunction) {
	 		listener.exitFunction(this);
		}
	}
}


export class Function_inputContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_function_input;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFunction_input) {
	 		listener.enterFunction_input(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFunction_input) {
	 		listener.exitFunction_input(this);
		}
	}
}


export class Function_outputContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_function_output;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFunction_output) {
	 		listener.enterFunction_output(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFunction_output) {
	 		listener.exitFunction_output(this);
		}
	}
}


export class FinalizeContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public finalize_input_list(): Finalize_inputContext[] {
		return this.getTypedRuleContexts(Finalize_inputContext) as Finalize_inputContext[];
	}
	public finalize_input(i: number): Finalize_inputContext {
		return this.getTypedRuleContext(Finalize_inputContext, i) as Finalize_inputContext;
	}
	public command_list(): CommandContext[] {
		return this.getTypedRuleContexts(CommandContext) as CommandContext[];
	}
	public command(i: number): CommandContext {
		return this.getTypedRuleContext(CommandContext, i) as CommandContext;
	}
	public finalize_output_list(): Finalize_outputContext[] {
		return this.getTypedRuleContexts(Finalize_outputContext) as Finalize_outputContext[];
	}
	public finalize_output(i: number): Finalize_outputContext {
		return this.getTypedRuleContext(Finalize_outputContext, i) as Finalize_outputContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_finalize;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFinalize) {
	 		listener.enterFinalize(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFinalize) {
	 		listener.exitFinalize(this);
		}
	}
}


export class Finalize_inputContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public register(): RegisterContext {
		return this.getTypedRuleContext(RegisterContext, 0) as RegisterContext;
	}
	public finalize_type(): Finalize_typeContext {
		return this.getTypedRuleContext(Finalize_typeContext, 0) as Finalize_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_finalize_input;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFinalize_input) {
	 		listener.enterFinalize_input(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFinalize_input) {
	 		listener.exitFinalize_input(this);
		}
	}
}


export class Finalize_outputContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public finalize_type(): Finalize_typeContext {
		return this.getTypedRuleContext(Finalize_typeContext, 0) as Finalize_typeContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_finalize_output;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterFinalize_output) {
	 		listener.enterFinalize_output(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitFinalize_output) {
	 		listener.exitFinalize_output(this);
		}
	}
}


export class SourceUnitContext extends ParserRuleContext {
	constructor(parser?: AleoParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public import_1_list(): Import_1Context[] {
		return this.getTypedRuleContexts(Import_1Context) as Import_1Context[];
	}
	public import_1(i: number): Import_1Context {
		return this.getTypedRuleContext(Import_1Context, i) as Import_1Context;
	}
	public program_id(): Program_idContext {
		return this.getTypedRuleContext(Program_idContext, 0) as Program_idContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(AleoParser.EOF, 0);
	}
	public mapping_list(): MappingContext[] {
		return this.getTypedRuleContexts(MappingContext) as MappingContext[];
	}
	public mapping(i: number): MappingContext {
		return this.getTypedRuleContext(MappingContext, i) as MappingContext;
	}
	public struct_1_list(): Struct_1Context[] {
		return this.getTypedRuleContexts(Struct_1Context) as Struct_1Context[];
	}
	public struct_1(i: number): Struct_1Context {
		return this.getTypedRuleContext(Struct_1Context, i) as Struct_1Context;
	}
	public record_list(): RecordContext[] {
		return this.getTypedRuleContexts(RecordContext) as RecordContext[];
	}
	public record(i: number): RecordContext {
		return this.getTypedRuleContext(RecordContext, i) as RecordContext;
	}
	public closure_list(): ClosureContext[] {
		return this.getTypedRuleContexts(ClosureContext) as ClosureContext[];
	}
	public closure(i: number): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, i) as ClosureContext;
	}
	public function__list(): FunctionContext[] {
		return this.getTypedRuleContexts(FunctionContext) as FunctionContext[];
	}
	public function_(i: number): FunctionContext {
		return this.getTypedRuleContext(FunctionContext, i) as FunctionContext;
	}
    public get ruleIndex(): number {
    	return AleoParser.RULE_sourceUnit;
	}
	public enterRule(listener: AleoListener): void {
	    if(listener.enterSourceUnit) {
	 		listener.enterSourceUnit(this);
		}
	}
	public exitRule(listener: AleoListener): void {
	    if(listener.exitSourceUnit) {
	 		listener.exitSourceUnit(this);
		}
	}
}
