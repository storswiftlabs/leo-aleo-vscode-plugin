// Generated from Aleo.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { Unarp_opContext } from "./AleoParser";
import { Binary_opContext } from "./AleoParser";
import { Is_opContext } from "./AleoParser";
import { Assert_opContext } from "./AleoParser";
import { LetterContext } from "./AleoParser";
import { RegisterContext } from "./AleoParser";
import { Register_accessContext } from "./AleoParser";
import { IdentifierContext } from "./AleoParser";
import { Program_nameContext } from "./AleoParser";
import { Program_domainContext } from "./AleoParser";
import { Program_idContext } from "./AleoParser";
import { LocatorContext } from "./AleoParser";
import { Integer_literalContext } from "./AleoParser";
import { Arithmetic_literalContext } from "./AleoParser";
import { LiteralContext } from "./AleoParser";
import { OperandContext } from "./AleoParser";
import { Integer_typeContext } from "./AleoParser";
import { Arithmetic_typeContext } from "./AleoParser";
import { Literal_typeContext } from "./AleoParser";
import { Plaintext_typeContext } from "./AleoParser";
import { Value_typeContext } from "./AleoParser";
import { Finalize_typeContext } from "./AleoParser";
import { Entry_typeContext } from "./AleoParser";
import { Register_typeContext } from "./AleoParser";
import { Import_1Context } from "./AleoParser";
import { MappingContext } from "./AleoParser";
import { Mapping_keyContext } from "./AleoParser";
import { Mapping_valueContext } from "./AleoParser";
import { Struct_1Context } from "./AleoParser";
import { TupleContext } from "./AleoParser";
import { RecordContext } from "./AleoParser";
import { EntryContext } from "./AleoParser";
import { Cast_destinationContext } from "./AleoParser";
import { UnaryContext } from "./AleoParser";
import { BinaryContext } from "./AleoParser";
import { TernaryContext } from "./AleoParser";
import { Is_1Context } from "./AleoParser";
import { Assert_1Context } from "./AleoParser";
import { CommitContext } from "./AleoParser";
import { HashContext } from "./AleoParser";
import { CastContext } from "./AleoParser";
import { CallContext } from "./AleoParser";
import { InstructionContext } from "./AleoParser";
import { ContainsContext } from "./AleoParser";
import { GetContext } from "./AleoParser";
import { Get_or_useContext } from "./AleoParser";
import { SetContext } from "./AleoParser";
import { RemoveContext } from "./AleoParser";
import { RandomContext } from "./AleoParser";
import { LabelContext } from "./AleoParser";
import { PositionContext } from "./AleoParser";
import { BranchContext } from "./AleoParser";
import { CommandContext } from "./AleoParser";
import { Finalize_commandContext } from "./AleoParser";
import { ClosureContext } from "./AleoParser";
import { Closure_inputContext } from "./AleoParser";
import { Closure_outputContext } from "./AleoParser";
import { FunctionContext } from "./AleoParser";
import { Function_inputContext } from "./AleoParser";
import { Function_outputContext } from "./AleoParser";
import { FinalizeContext } from "./AleoParser";
import { Finalize_inputContext } from "./AleoParser";
import { Finalize_outputContext } from "./AleoParser";
import { SourceUnitContext } from "./AleoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AleoParser`.
 */
export default class AleoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AleoParser.unarp_op`.
	 * @param ctx the parse tree
	 */
	enterUnarp_op?: (ctx: Unarp_opContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.unarp_op`.
	 * @param ctx the parse tree
	 */
	exitUnarp_op?: (ctx: Unarp_opContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.binary_op`.
	 * @param ctx the parse tree
	 */
	enterBinary_op?: (ctx: Binary_opContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.binary_op`.
	 * @param ctx the parse tree
	 */
	exitBinary_op?: (ctx: Binary_opContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.is_op`.
	 * @param ctx the parse tree
	 */
	enterIs_op?: (ctx: Is_opContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.is_op`.
	 * @param ctx the parse tree
	 */
	exitIs_op?: (ctx: Is_opContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.assert_op`.
	 * @param ctx the parse tree
	 */
	enterAssert_op?: (ctx: Assert_opContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.assert_op`.
	 * @param ctx the parse tree
	 */
	exitAssert_op?: (ctx: Assert_opContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.letter`.
	 * @param ctx the parse tree
	 */
	enterLetter?: (ctx: LetterContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.letter`.
	 * @param ctx the parse tree
	 */
	exitLetter?: (ctx: LetterContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.register`.
	 * @param ctx the parse tree
	 */
	enterRegister?: (ctx: RegisterContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.register`.
	 * @param ctx the parse tree
	 */
	exitRegister?: (ctx: RegisterContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.register_access`.
	 * @param ctx the parse tree
	 */
	enterRegister_access?: (ctx: Register_accessContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.register_access`.
	 * @param ctx the parse tree
	 */
	exitRegister_access?: (ctx: Register_accessContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.program_name`.
	 * @param ctx the parse tree
	 */
	enterProgram_name?: (ctx: Program_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.program_name`.
	 * @param ctx the parse tree
	 */
	exitProgram_name?: (ctx: Program_nameContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.program_domain`.
	 * @param ctx the parse tree
	 */
	enterProgram_domain?: (ctx: Program_domainContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.program_domain`.
	 * @param ctx the parse tree
	 */
	exitProgram_domain?: (ctx: Program_domainContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.program_id`.
	 * @param ctx the parse tree
	 */
	enterProgram_id?: (ctx: Program_idContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.program_id`.
	 * @param ctx the parse tree
	 */
	exitProgram_id?: (ctx: Program_idContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.locator`.
	 * @param ctx the parse tree
	 */
	enterLocator?: (ctx: LocatorContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.locator`.
	 * @param ctx the parse tree
	 */
	exitLocator?: (ctx: LocatorContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	enterInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	exitInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.arithmetic_literal`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_literal?: (ctx: Arithmetic_literalContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.arithmetic_literal`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_literal?: (ctx: Arithmetic_literalContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.arithmetic_type`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_type?: (ctx: Arithmetic_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.arithmetic_type`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_type?: (ctx: Arithmetic_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.literal_type`.
	 * @param ctx the parse tree
	 */
	enterLiteral_type?: (ctx: Literal_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.literal_type`.
	 * @param ctx the parse tree
	 */
	exitLiteral_type?: (ctx: Literal_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.plaintext_type`.
	 * @param ctx the parse tree
	 */
	enterPlaintext_type?: (ctx: Plaintext_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.plaintext_type`.
	 * @param ctx the parse tree
	 */
	exitPlaintext_type?: (ctx: Plaintext_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.value_type`.
	 * @param ctx the parse tree
	 */
	enterValue_type?: (ctx: Value_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.value_type`.
	 * @param ctx the parse tree
	 */
	exitValue_type?: (ctx: Value_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.finalize_type`.
	 * @param ctx the parse tree
	 */
	enterFinalize_type?: (ctx: Finalize_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.finalize_type`.
	 * @param ctx the parse tree
	 */
	exitFinalize_type?: (ctx: Finalize_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.entry_type`.
	 * @param ctx the parse tree
	 */
	enterEntry_type?: (ctx: Entry_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.entry_type`.
	 * @param ctx the parse tree
	 */
	exitEntry_type?: (ctx: Entry_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.register_type`.
	 * @param ctx the parse tree
	 */
	enterRegister_type?: (ctx: Register_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.register_type`.
	 * @param ctx the parse tree
	 */
	exitRegister_type?: (ctx: Register_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.import_1`.
	 * @param ctx the parse tree
	 */
	enterImport_1?: (ctx: Import_1Context) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.import_1`.
	 * @param ctx the parse tree
	 */
	exitImport_1?: (ctx: Import_1Context) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.mapping`.
	 * @param ctx the parse tree
	 */
	enterMapping?: (ctx: MappingContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.mapping`.
	 * @param ctx the parse tree
	 */
	exitMapping?: (ctx: MappingContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.mapping_key`.
	 * @param ctx the parse tree
	 */
	enterMapping_key?: (ctx: Mapping_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.mapping_key`.
	 * @param ctx the parse tree
	 */
	exitMapping_key?: (ctx: Mapping_keyContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.mapping_value`.
	 * @param ctx the parse tree
	 */
	enterMapping_value?: (ctx: Mapping_valueContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.mapping_value`.
	 * @param ctx the parse tree
	 */
	exitMapping_value?: (ctx: Mapping_valueContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.struct_1`.
	 * @param ctx the parse tree
	 */
	enterStruct_1?: (ctx: Struct_1Context) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.struct_1`.
	 * @param ctx the parse tree
	 */
	exitStruct_1?: (ctx: Struct_1Context) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.tuple`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.tuple`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.record`.
	 * @param ctx the parse tree
	 */
	enterRecord?: (ctx: RecordContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.record`.
	 * @param ctx the parse tree
	 */
	exitRecord?: (ctx: RecordContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.cast_destination`.
	 * @param ctx the parse tree
	 */
	enterCast_destination?: (ctx: Cast_destinationContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.cast_destination`.
	 * @param ctx the parse tree
	 */
	exitCast_destination?: (ctx: Cast_destinationContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.unary`.
	 * @param ctx the parse tree
	 */
	enterUnary?: (ctx: UnaryContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.unary`.
	 * @param ctx the parse tree
	 */
	exitUnary?: (ctx: UnaryContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.binary`.
	 * @param ctx the parse tree
	 */
	enterBinary?: (ctx: BinaryContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.binary`.
	 * @param ctx the parse tree
	 */
	exitBinary?: (ctx: BinaryContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.ternary`.
	 * @param ctx the parse tree
	 */
	enterTernary?: (ctx: TernaryContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.ternary`.
	 * @param ctx the parse tree
	 */
	exitTernary?: (ctx: TernaryContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.is_1`.
	 * @param ctx the parse tree
	 */
	enterIs_1?: (ctx: Is_1Context) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.is_1`.
	 * @param ctx the parse tree
	 */
	exitIs_1?: (ctx: Is_1Context) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.assert_1`.
	 * @param ctx the parse tree
	 */
	enterAssert_1?: (ctx: Assert_1Context) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.assert_1`.
	 * @param ctx the parse tree
	 */
	exitAssert_1?: (ctx: Assert_1Context) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.commit`.
	 * @param ctx the parse tree
	 */
	enterCommit?: (ctx: CommitContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.commit`.
	 * @param ctx the parse tree
	 */
	exitCommit?: (ctx: CommitContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.hash`.
	 * @param ctx the parse tree
	 */
	enterHash?: (ctx: HashContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.hash`.
	 * @param ctx the parse tree
	 */
	exitHash?: (ctx: HashContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.cast`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.cast`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.contains`.
	 * @param ctx the parse tree
	 */
	enterContains?: (ctx: ContainsContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.contains`.
	 * @param ctx the parse tree
	 */
	exitContains?: (ctx: ContainsContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.get`.
	 * @param ctx the parse tree
	 */
	enterGet?: (ctx: GetContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.get`.
	 * @param ctx the parse tree
	 */
	exitGet?: (ctx: GetContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.get_or_use`.
	 * @param ctx the parse tree
	 */
	enterGet_or_use?: (ctx: Get_or_useContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.get_or_use`.
	 * @param ctx the parse tree
	 */
	exitGet_or_use?: (ctx: Get_or_useContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.remove`.
	 * @param ctx the parse tree
	 */
	enterRemove?: (ctx: RemoveContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.remove`.
	 * @param ctx the parse tree
	 */
	exitRemove?: (ctx: RemoveContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.random`.
	 * @param ctx the parse tree
	 */
	enterRandom?: (ctx: RandomContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.random`.
	 * @param ctx the parse tree
	 */
	exitRandom?: (ctx: RandomContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.finalize_command`.
	 * @param ctx the parse tree
	 */
	enterFinalize_command?: (ctx: Finalize_commandContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.finalize_command`.
	 * @param ctx the parse tree
	 */
	exitFinalize_command?: (ctx: Finalize_commandContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.closure`.
	 * @param ctx the parse tree
	 */
	enterClosure?: (ctx: ClosureContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.closure`.
	 * @param ctx the parse tree
	 */
	exitClosure?: (ctx: ClosureContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.closure_input`.
	 * @param ctx the parse tree
	 */
	enterClosure_input?: (ctx: Closure_inputContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.closure_input`.
	 * @param ctx the parse tree
	 */
	exitClosure_input?: (ctx: Closure_inputContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.closure_output`.
	 * @param ctx the parse tree
	 */
	enterClosure_output?: (ctx: Closure_outputContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.closure_output`.
	 * @param ctx the parse tree
	 */
	exitClosure_output?: (ctx: Closure_outputContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.function_input`.
	 * @param ctx the parse tree
	 */
	enterFunction_input?: (ctx: Function_inputContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.function_input`.
	 * @param ctx the parse tree
	 */
	exitFunction_input?: (ctx: Function_inputContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.function_output`.
	 * @param ctx the parse tree
	 */
	enterFunction_output?: (ctx: Function_outputContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.function_output`.
	 * @param ctx the parse tree
	 */
	exitFunction_output?: (ctx: Function_outputContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.finalize`.
	 * @param ctx the parse tree
	 */
	enterFinalize?: (ctx: FinalizeContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.finalize`.
	 * @param ctx the parse tree
	 */
	exitFinalize?: (ctx: FinalizeContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.finalize_input`.
	 * @param ctx the parse tree
	 */
	enterFinalize_input?: (ctx: Finalize_inputContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.finalize_input`.
	 * @param ctx the parse tree
	 */
	exitFinalize_input?: (ctx: Finalize_inputContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.finalize_output`.
	 * @param ctx the parse tree
	 */
	enterFinalize_output?: (ctx: Finalize_outputContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.finalize_output`.
	 * @param ctx the parse tree
	 */
	exitFinalize_output?: (ctx: Finalize_outputContext) => void;
	/**
	 * Enter a parse tree produced by `AleoParser.sourceUnit`.
	 * @param ctx the parse tree
	 */
	enterSourceUnit?: (ctx: SourceUnitContext) => void;
	/**
	 * Exit a parse tree produced by `AleoParser.sourceUnit`.
	 * @param ctx the parse tree
	 */
	exitSourceUnit?: (ctx: SourceUnitContext) => void;
}

