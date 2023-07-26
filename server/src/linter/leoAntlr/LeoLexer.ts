// Generated from Leo.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LeoLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56", 
		"T__57", "T__58", "T__59", "T__60", "T__61", "T__62", "T__63", "T__64", 
		"T__65", "T__66", "T__67", "T__68", "T__69", "T__70", "T__71", "T__72", 
		"T__73", "T__74", "T__75", "T__76", "T__77", "T__78", "T__79", "T__80", 
		"T__81", "T__82", "T__83", "T__84", "THEN", "Identifier", "Digit", "LOWERCASE_LETTER", 
		"DECIMAL_DIGIT", "BOOLEAN_LITERAL", "UNSIGNED_TYPE", "SIGNED_TYPE", "FIELD_TYPE", 
		"GROUP_TYPE", "SCALAR_TYPE", "BOOLEAN_TYPE", "ADDRESS_TYPE", "SELF_CALLER", 
		"BLOCK_HEIGHT", "INPUT_TITLE", "OUTPUT_TITLE", "WS", "COMMENT", "LINE_COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LeoLexer._ATN, LeoLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Leo.g4"; }

	public get literalNames(): (string | null)[] { return LeoLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LeoLexer.symbolicNames; }
	public get ruleNames(): string[] { return LeoLexer.ruleNames; }

	public get serializedATN(): number[] { return LeoLexer._serializedATN; }

	public get channelNames(): string[] { return LeoLexer.channelNames; }

	public get modeNames(): string[] { return LeoLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,103,814,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,
	45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
	2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,
	60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,
	7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,
	74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,
	2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,
	89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,
	7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
	2,103,7,103,2,104,7,104,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,
	1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,
	14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,19,
	1,19,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,
	24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,
	1,30,1,31,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,
	37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,
	1,42,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,45,1,46,1,46,1,46,1,47,1,
	47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,51,1,51,1,51,
	1,51,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,1,
	56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,
	1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,61,1,61,1,
	61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,
	1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,
	64,1,64,1,65,1,65,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,68,1,68,1,68,1,68,
	1,68,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,
	71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,
	1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,
	74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,
	78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,
	1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,
	81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,
	1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,
	86,4,86,630,8,86,11,86,12,86,631,1,87,4,87,635,8,87,11,87,12,87,636,1,88,
	1,88,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,652,8,
	90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,
	1,91,3,91,669,8,91,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,
	92,1,92,1,92,1,92,1,92,3,92,686,8,92,1,93,1,93,1,93,1,93,1,93,1,93,1,94,
	1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,
	96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,
	1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,
	99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,
	1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
	1,100,1,100,1,100,1,100,1,100,3,100,769,8,100,1,100,1,100,1,101,1,101,1,
	101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,102,4,102,784,8,102,11,
	102,12,102,785,1,102,1,102,1,103,1,103,1,103,1,103,5,103,794,8,103,10,103,
	12,103,797,9,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,
	5,104,808,8,104,10,104,12,104,811,9,104,1,104,1,104,1,795,0,105,1,1,3,2,
	5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
	16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,
	28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,
	40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,
	52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,
	125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,
	73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,
	167,84,169,85,171,86,173,87,175,88,177,0,179,0,181,89,183,90,185,91,187,
	92,189,93,191,94,193,95,195,96,197,97,199,98,201,99,203,100,205,101,207,
	102,209,103,1,0,4,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,12,13,
	32,32,2,0,10,10,13,13,827,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
	0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
	1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,
	0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,
	1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,
	0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,
	1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,
	0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,
	1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,
	0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,
	107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,
	1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,
	0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,
	0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,
	0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,
	0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,
	169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,181,1,0,0,0,0,183,
	1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,
	0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,
	0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,1,211,1,0,0,0,3,218,1,0,0,
	0,5,225,1,0,0,0,7,232,1,0,0,0,9,240,1,0,0,0,11,243,1,0,0,0,13,254,1,0,0,
	0,15,266,1,0,0,0,17,276,1,0,0,0,19,286,1,0,0,0,21,296,1,0,0,0,23,298,1,
	0,0,0,25,304,1,0,0,0,27,306,1,0,0,0,29,308,1,0,0,0,31,310,1,0,0,0,33,312,
	1,0,0,0,35,314,1,0,0,0,37,321,1,0,0,0,39,323,1,0,0,0,41,325,1,0,0,0,43,
	327,1,0,0,0,45,334,1,0,0,0,47,336,1,0,0,0,49,338,1,0,0,0,51,340,1,0,0,0,
	53,342,1,0,0,0,55,344,1,0,0,0,57,347,1,0,0,0,59,349,1,0,0,0,61,351,1,0,
	0,0,63,354,1,0,0,0,65,357,1,0,0,0,67,359,1,0,0,0,69,361,1,0,0,0,71,363,
	1,0,0,0,73,365,1,0,0,0,75,367,1,0,0,0,77,370,1,0,0,0,79,373,1,0,0,0,81,
	376,1,0,0,0,83,379,1,0,0,0,85,382,1,0,0,0,87,385,1,0,0,0,89,387,1,0,0,0,
	91,389,1,0,0,0,93,392,1,0,0,0,95,395,1,0,0,0,97,398,1,0,0,0,99,401,1,0,
	0,0,101,404,1,0,0,0,103,408,1,0,0,0,105,412,1,0,0,0,107,416,1,0,0,0,109,
	419,1,0,0,0,111,422,1,0,0,0,113,425,1,0,0,0,115,429,1,0,0,0,117,433,1,0,
	0,0,119,444,1,0,0,0,121,448,1,0,0,0,123,452,1,0,0,0,125,462,1,0,0,0,127,
	469,1,0,0,0,129,476,1,0,0,0,131,485,1,0,0,0,133,487,1,0,0,0,135,491,1,0,
	0,0,137,494,1,0,0,0,139,499,1,0,0,0,141,503,1,0,0,0,143,506,1,0,0,0,145,
	514,1,0,0,0,147,521,1,0,0,0,149,531,1,0,0,0,151,542,1,0,0,0,153,551,1,0,
	0,0,155,558,1,0,0,0,157,566,1,0,0,0,159,575,1,0,0,0,161,582,1,0,0,0,163,
	593,1,0,0,0,165,600,1,0,0,0,167,608,1,0,0,0,169,616,1,0,0,0,171,623,1,0,
	0,0,173,629,1,0,0,0,175,634,1,0,0,0,177,638,1,0,0,0,179,640,1,0,0,0,181,
	651,1,0,0,0,183,668,1,0,0,0,185,685,1,0,0,0,187,687,1,0,0,0,189,693,1,0,
	0,0,191,699,1,0,0,0,193,706,1,0,0,0,195,711,1,0,0,0,197,719,1,0,0,0,199,
	732,1,0,0,0,201,746,1,0,0,0,203,772,1,0,0,0,205,783,1,0,0,0,207,789,1,0,
	0,0,209,803,1,0,0,0,211,212,5,66,0,0,212,213,5,72,0,0,213,214,5,80,0,0,
	214,215,5,50,0,0,215,216,5,53,0,0,216,217,5,54,0,0,217,2,1,0,0,0,218,219,
	5,66,0,0,219,220,5,72,0,0,220,221,5,80,0,0,221,222,5,53,0,0,222,223,5,49,
	0,0,223,224,5,50,0,0,224,4,1,0,0,0,225,226,5,66,0,0,226,227,5,72,0,0,227,
	228,5,80,0,0,228,229,5,55,0,0,229,230,5,54,0,0,230,231,5,56,0,0,231,6,1,
	0,0,0,232,233,5,66,0,0,233,234,5,72,0,0,234,235,5,80,0,0,235,236,5,49,0,
	0,236,237,5,48,0,0,237,238,5,50,0,0,238,239,5,52,0,0,239,8,1,0,0,0,240,
	241,5,58,0,0,241,242,5,58,0,0,242,10,1,0,0,0,243,244,5,80,0,0,244,245,5,
	101,0,0,245,246,5,100,0,0,246,247,5,101,0,0,247,248,5,114,0,0,248,249,5,
	115,0,0,249,250,5,101,0,0,250,251,5,110,0,0,251,252,5,54,0,0,252,253,5,
	52,0,0,253,12,1,0,0,0,254,255,5,80,0,0,255,256,5,101,0,0,256,257,5,100,
	0,0,257,258,5,101,0,0,258,259,5,114,0,0,259,260,5,115,0,0,260,261,5,101,
	0,0,261,262,5,110,0,0,262,263,5,49,0,0,263,264,5,50,0,0,264,265,5,56,0,
	0,265,14,1,0,0,0,266,267,5,80,0,0,267,268,5,111,0,0,268,269,5,115,0,0,269,
	270,5,101,0,0,270,271,5,105,0,0,271,272,5,100,0,0,272,273,5,111,0,0,273,
	274,5,110,0,0,274,275,5,50,0,0,275,16,1,0,0,0,276,277,5,80,0,0,277,278,
	5,111,0,0,278,279,5,115,0,0,279,280,5,101,0,0,280,281,5,105,0,0,281,282,
	5,100,0,0,282,283,5,111,0,0,283,284,5,110,0,0,284,285,5,52,0,0,285,18,1,
	0,0,0,286,287,5,80,0,0,287,288,5,111,0,0,288,289,5,115,0,0,289,290,5,101,
	0,0,290,291,5,105,0,0,291,292,5,100,0,0,292,293,5,111,0,0,293,294,5,110,
	0,0,294,295,5,56,0,0,295,20,1,0,0,0,296,297,5,95,0,0,297,22,1,0,0,0,298,
	299,5,97,0,0,299,300,5,108,0,0,300,301,5,101,0,0,301,302,5,111,0,0,302,
	303,5,49,0,0,303,24,1,0,0,0,304,305,5,64,0,0,305,26,1,0,0,0,306,307,5,46,
	0,0,307,28,1,0,0,0,308,309,5,47,0,0,309,30,1,0,0,0,310,311,5,40,0,0,311,
	32,1,0,0,0,312,313,5,41,0,0,313,34,1,0,0,0,314,315,5,114,0,0,315,316,5,
	101,0,0,316,317,5,99,0,0,317,318,5,111,0,0,318,319,5,114,0,0,319,320,5,
	100,0,0,320,36,1,0,0,0,321,322,5,44,0,0,322,38,1,0,0,0,323,324,5,45,0,0,
	324,40,1,0,0,0,325,326,5,43,0,0,326,42,1,0,0,0,327,328,5,41,0,0,328,329,
	5,103,0,0,329,330,5,114,0,0,330,331,5,111,0,0,331,332,5,117,0,0,332,333,
	5,112,0,0,333,44,1,0,0,0,334,335,5,58,0,0,335,46,1,0,0,0,336,337,5,123,
	0,0,337,48,1,0,0,0,338,339,5,125,0,0,339,50,1,0,0,0,340,341,5,33,0,0,341,
	52,1,0,0,0,342,343,5,126,0,0,343,54,1,0,0,0,344,345,5,42,0,0,345,346,5,
	42,0,0,346,56,1,0,0,0,347,348,5,42,0,0,348,58,1,0,0,0,349,350,5,37,0,0,
	350,60,1,0,0,0,351,352,5,60,0,0,352,353,5,60,0,0,353,62,1,0,0,0,354,355,
	5,62,0,0,355,356,5,62,0,0,356,64,1,0,0,0,357,358,5,38,0,0,358,66,1,0,0,
	0,359,360,5,124,0,0,360,68,1,0,0,0,361,362,5,94,0,0,362,70,1,0,0,0,363,
	364,5,60,0,0,364,72,1,0,0,0,365,366,5,62,0,0,366,74,1,0,0,0,367,368,5,60,
	0,0,368,369,5,61,0,0,369,76,1,0,0,0,370,371,5,62,0,0,371,372,5,61,0,0,372,
	78,1,0,0,0,373,374,5,61,0,0,374,375,5,61,0,0,375,80,1,0,0,0,376,377,5,33,
	0,0,377,378,5,61,0,0,378,82,1,0,0,0,379,380,5,38,0,0,380,381,5,38,0,0,381,
	84,1,0,0,0,382,383,5,124,0,0,383,384,5,124,0,0,384,86,1,0,0,0,385,386,5,
	63,0,0,386,88,1,0,0,0,387,388,5,61,0,0,388,90,1,0,0,0,389,390,5,43,0,0,
	390,391,5,61,0,0,391,92,1,0,0,0,392,393,5,45,0,0,393,394,5,61,0,0,394,94,
	1,0,0,0,395,396,5,42,0,0,396,397,5,61,0,0,397,96,1,0,0,0,398,399,5,47,0,
	0,399,400,5,61,0,0,400,98,1,0,0,0,401,402,5,37,0,0,402,403,5,61,0,0,403,
	100,1,0,0,0,404,405,5,42,0,0,405,406,5,42,0,0,406,407,5,61,0,0,407,102,
	1,0,0,0,408,409,5,60,0,0,409,410,5,60,0,0,410,411,5,61,0,0,411,104,1,0,
	0,0,412,413,5,62,0,0,413,414,5,62,0,0,414,415,5,61,0,0,415,106,1,0,0,0,
	416,417,5,38,0,0,417,418,5,61,0,0,418,108,1,0,0,0,419,420,5,124,0,0,420,
	421,5,61,0,0,421,110,1,0,0,0,422,423,5,94,0,0,423,424,5,61,0,0,424,112,
	1,0,0,0,425,426,5,38,0,0,426,427,5,38,0,0,427,428,5,61,0,0,428,114,1,0,
	0,0,429,430,5,124,0,0,430,431,5,124,0,0,431,432,5,61,0,0,432,116,1,0,0,
	0,433,434,5,103,0,0,434,435,5,101,0,0,435,436,5,116,0,0,436,437,5,95,0,
	0,437,438,5,111,0,0,438,439,5,114,0,0,439,440,5,95,0,0,440,441,5,117,0,
	0,441,442,5,115,0,0,442,443,5,101,0,0,443,118,1,0,0,0,444,445,5,115,0,0,
	445,446,5,101,0,0,446,447,5,116,0,0,447,120,1,0,0,0,448,449,5,103,0,0,449,
	450,5,101,0,0,450,451,5,116,0,0,451,122,1,0,0,0,452,453,5,77,0,0,453,454,
	5,97,0,0,454,455,5,112,0,0,455,456,5,112,0,0,456,457,5,105,0,0,457,458,
	5,110,0,0,458,459,5,103,0,0,459,460,5,58,0,0,460,461,5,58,0,0,461,124,1,
	0,0,0,462,463,5,67,0,0,463,464,5,104,0,0,464,465,5,97,0,0,465,466,5,67,
	0,0,466,467,5,104,0,0,467,468,5,97,0,0,468,126,1,0,0,0,469,470,5,114,0,
	0,470,471,5,101,0,0,471,472,5,116,0,0,472,473,5,117,0,0,473,474,5,114,0,
	0,474,475,5,110,0,0,475,128,1,0,0,0,476,477,5,102,0,0,477,478,5,105,0,0,
	478,479,5,110,0,0,479,480,5,97,0,0,480,481,5,108,0,0,481,482,5,105,0,0,
	482,483,5,122,0,0,483,484,5,101,0,0,484,130,1,0,0,0,485,486,5,59,0,0,486,
	132,1,0,0,0,487,488,5,108,0,0,488,489,5,101,0,0,489,490,5,116,0,0,490,134,
	1,0,0,0,491,492,5,105,0,0,492,493,5,102,0,0,493,136,1,0,0,0,494,495,5,101,
	0,0,495,496,5,108,0,0,496,497,5,115,0,0,497,498,5,101,0,0,498,138,1,0,0,
	0,499,500,5,102,0,0,500,501,5,111,0,0,501,502,5,114,0,0,502,140,1,0,0,0,
	503,504,5,105,0,0,504,505,5,110,0,0,505,142,1,0,0,0,506,507,5,99,0,0,507,
	508,5,111,0,0,508,509,5,110,0,0,509,510,5,115,0,0,510,511,5,111,0,0,511,
	512,5,108,0,0,512,513,5,101,0,0,513,144,1,0,0,0,514,515,5,97,0,0,515,516,
	5,115,0,0,516,517,5,115,0,0,517,518,5,101,0,0,518,519,5,114,0,0,519,520,
	5,116,0,0,520,146,1,0,0,0,521,522,5,97,0,0,522,523,5,115,0,0,523,524,5,
	115,0,0,524,525,5,101,0,0,525,526,5,114,0,0,526,527,5,116,0,0,527,528,5,
	95,0,0,528,529,5,101,0,0,529,530,5,113,0,0,530,148,1,0,0,0,531,532,5,97,
	0,0,532,533,5,115,0,0,533,534,5,115,0,0,534,535,5,101,0,0,535,536,5,114,
	0,0,536,537,5,116,0,0,537,538,5,95,0,0,538,539,5,110,0,0,539,540,5,101,
	0,0,540,541,5,113,0,0,541,150,1,0,0,0,542,543,5,102,0,0,543,544,5,117,0,
	0,544,545,5,110,0,0,545,546,5,99,0,0,546,547,5,116,0,0,547,548,5,105,0,
	0,548,549,5,111,0,0,549,550,5,110,0,0,550,152,1,0,0,0,551,552,5,112,0,0,
	552,553,5,117,0,0,553,554,5,98,0,0,554,555,5,108,0,0,555,556,5,105,0,0,
	556,557,5,99,0,0,557,154,1,0,0,0,558,559,5,112,0,0,559,560,5,114,0,0,560,
	561,5,105,0,0,561,562,5,118,0,0,562,563,5,97,0,0,563,564,5,116,0,0,564,
	565,5,101,0,0,565,156,1,0,0,0,566,567,5,99,0,0,567,568,5,111,0,0,568,569,
	5,110,0,0,569,570,5,115,0,0,570,571,5,116,0,0,571,572,5,97,0,0,572,573,
	5,110,0,0,573,574,5,116,0,0,574,158,1,0,0,0,575,576,5,105,0,0,576,577,5,
	110,0,0,577,578,5,108,0,0,578,579,5,105,0,0,579,580,5,110,0,0,580,581,5,
	101,0,0,581,160,1,0,0,0,582,583,5,116,0,0,583,584,5,114,0,0,584,585,5,97,
	0,0,585,586,5,110,0,0,586,587,5,115,0,0,587,588,5,105,0,0,588,589,5,116,
	0,0,589,590,5,105,0,0,590,591,5,111,0,0,591,592,5,110,0,0,592,162,1,0,0,
	0,593,594,5,115,0,0,594,595,5,116,0,0,595,596,5,114,0,0,596,597,5,117,0,
	0,597,598,5,99,0,0,598,599,5,116,0,0,599,164,1,0,0,0,600,601,5,109,0,0,
	601,602,5,97,0,0,602,603,5,112,0,0,603,604,5,112,0,0,604,605,5,105,0,0,
	605,606,5,110,0,0,606,607,5,103,0,0,607,166,1,0,0,0,608,609,5,112,0,0,609,
	610,5,114,0,0,610,611,5,111,0,0,611,612,5,103,0,0,612,613,5,114,0,0,613,
	614,5,97,0,0,614,615,5,109,0,0,615,168,1,0,0,0,616,617,5,105,0,0,617,618,
	5,109,0,0,618,619,5,112,0,0,619,620,5,111,0,0,620,621,5,114,0,0,621,622,
	5,116,0,0,622,170,1,0,0,0,623,624,5,116,0,0,624,625,5,104,0,0,625,626,5,
	101,0,0,626,627,5,110,0,0,627,172,1,0,0,0,628,630,3,177,88,0,629,628,1,
	0,0,0,630,631,1,0,0,0,631,629,1,0,0,0,631,632,1,0,0,0,632,174,1,0,0,0,633,
	635,3,179,89,0,634,633,1,0,0,0,635,636,1,0,0,0,636,634,1,0,0,0,636,637,
	1,0,0,0,637,176,1,0,0,0,638,639,7,0,0,0,639,178,1,0,0,0,640,641,7,1,0,0,
	641,180,1,0,0,0,642,643,5,116,0,0,643,644,5,114,0,0,644,645,5,117,0,0,645,
	652,5,101,0,0,646,647,5,102,0,0,647,648,5,97,0,0,648,649,5,108,0,0,649,
	650,5,115,0,0,650,652,5,101,0,0,651,642,1,0,0,0,651,646,1,0,0,0,652,182,
	1,0,0,0,653,654,5,117,0,0,654,669,5,56,0,0,655,656,5,117,0,0,656,657,5,
	49,0,0,657,669,5,54,0,0,658,659,5,117,0,0,659,660,5,51,0,0,660,669,5,50,
	0,0,661,662,5,117,0,0,662,663,5,54,0,0,663,669,5,52,0,0,664,665,5,117,0,
	0,665,666,5,49,0,0,666,667,5,50,0,0,667,669,5,56,0,0,668,653,1,0,0,0,668,
	655,1,0,0,0,668,658,1,0,0,0,668,661,1,0,0,0,668,664,1,0,0,0,669,184,1,0,
	0,0,670,671,5,105,0,0,671,686,5,56,0,0,672,673,5,105,0,0,673,674,5,49,0,
	0,674,686,5,54,0,0,675,676,5,105,0,0,676,677,5,51,0,0,677,686,5,50,0,0,
	678,679,5,105,0,0,679,680,5,54,0,0,680,686,5,52,0,0,681,682,5,105,0,0,682,
	683,5,49,0,0,683,684,5,50,0,0,684,686,5,56,0,0,685,670,1,0,0,0,685,672,
	1,0,0,0,685,675,1,0,0,0,685,678,1,0,0,0,685,681,1,0,0,0,686,186,1,0,0,0,
	687,688,5,102,0,0,688,689,5,105,0,0,689,690,5,101,0,0,690,691,5,108,0,0,
	691,692,5,100,0,0,692,188,1,0,0,0,693,694,5,103,0,0,694,695,5,114,0,0,695,
	696,5,111,0,0,696,697,5,117,0,0,697,698,5,112,0,0,698,190,1,0,0,0,699,700,
	5,115,0,0,700,701,5,99,0,0,701,702,5,97,0,0,702,703,5,108,0,0,703,704,5,
	97,0,0,704,705,5,114,0,0,705,192,1,0,0,0,706,707,5,98,0,0,707,708,5,111,
	0,0,708,709,5,111,0,0,709,710,5,108,0,0,710,194,1,0,0,0,711,712,5,97,0,
	0,712,713,5,100,0,0,713,714,5,100,0,0,714,715,5,114,0,0,715,716,5,101,0,
	0,716,717,5,115,0,0,717,718,5,115,0,0,718,196,1,0,0,0,719,720,5,115,0,0,
	720,721,5,101,0,0,721,722,5,108,0,0,722,723,5,102,0,0,723,724,1,0,0,0,724,
	725,5,46,0,0,725,726,5,99,0,0,726,727,5,97,0,0,727,728,5,108,0,0,728,729,
	5,108,0,0,729,730,5,101,0,0,730,731,5,114,0,0,731,198,1,0,0,0,732,733,5,
	98,0,0,733,734,5,108,0,0,734,735,5,111,0,0,735,736,5,99,0,0,736,737,5,107,
	0,0,737,738,1,0,0,0,738,739,5,46,0,0,739,740,5,104,0,0,740,741,5,101,0,
	0,741,742,5,105,0,0,742,743,5,103,0,0,743,744,5,104,0,0,744,745,5,116,0,
	0,745,200,1,0,0,0,746,768,5,91,0,0,747,748,5,112,0,0,748,749,5,117,0,0,
	749,750,5,98,0,0,750,751,5,108,0,0,751,752,5,105,0,0,752,769,5,99,0,0,753,
	754,5,112,0,0,754,755,5,114,0,0,755,756,5,105,0,0,756,757,5,118,0,0,757,
	758,5,97,0,0,758,759,5,116,0,0,759,769,5,101,0,0,760,761,5,99,0,0,761,762,
	5,111,0,0,762,763,5,110,0,0,763,764,5,115,0,0,764,765,5,116,0,0,765,766,
	5,97,0,0,766,767,5,110,0,0,767,769,5,116,0,0,768,747,1,0,0,0,768,753,1,
	0,0,0,768,760,1,0,0,0,769,770,1,0,0,0,770,771,5,93,0,0,771,202,1,0,0,0,
	772,773,5,91,0,0,773,774,5,111,0,0,774,775,5,117,0,0,775,776,5,116,0,0,
	776,777,5,112,0,0,777,778,5,117,0,0,778,779,5,116,0,0,779,780,1,0,0,0,780,
	781,5,93,0,0,781,204,1,0,0,0,782,784,7,2,0,0,783,782,1,0,0,0,784,785,1,
	0,0,0,785,783,1,0,0,0,785,786,1,0,0,0,786,787,1,0,0,0,787,788,6,102,0,0,
	788,206,1,0,0,0,789,790,5,47,0,0,790,791,5,42,0,0,791,795,1,0,0,0,792,794,
	9,0,0,0,793,792,1,0,0,0,794,797,1,0,0,0,795,796,1,0,0,0,795,793,1,0,0,0,
	796,798,1,0,0,0,797,795,1,0,0,0,798,799,5,42,0,0,799,800,5,47,0,0,800,801,
	1,0,0,0,801,802,6,103,1,0,802,208,1,0,0,0,803,804,5,47,0,0,804,805,5,47,
	0,0,805,809,1,0,0,0,806,808,8,3,0,0,807,806,1,0,0,0,808,811,1,0,0,0,809,
	807,1,0,0,0,809,810,1,0,0,0,810,812,1,0,0,0,811,809,1,0,0,0,812,813,6,104,
	1,0,813,210,1,0,0,0,10,0,631,636,651,668,685,768,785,795,809,2,6,0,0,0,
	1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LeoLexer.__ATN) {
			LeoLexer.__ATN = new ATNDeserializer().deserialize(LeoLexer._serializedATN);
		}

		return LeoLexer.__ATN;
	}


	static DecisionsToDFA = LeoLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}