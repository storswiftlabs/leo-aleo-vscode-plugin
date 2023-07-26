// Generated from Leo.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { LetterContext } from "./LeoParser";
import { BhpContext } from "./LeoParser";
import { PedersenContext } from "./LeoParser";
import { PoseidonContext } from "./LeoParser";
import { IdentifierContext } from "./LeoParser";
import { NumeralContext } from "./LeoParser";
import { Unsigned_literalContext } from "./LeoParser";
import { Signed_literalContext } from "./LeoParser";
import { Field_literalContext } from "./LeoParser";
import { Product_group_literalContext } from "./LeoParser";
import { Scalar_literalContext } from "./LeoParser";
import { Address_literalContext } from "./LeoParser";
import { Addr_identifierContext } from "./LeoParser";
import { Integer_literalContext } from "./LeoParser";
import { Numeric_literalContext } from "./LeoParser";
import { Atomic_literalContext } from "./LeoParser";
import { AnnotationContext } from "./LeoParser";
import { Program_idContext } from "./LeoParser";
import { LocatorContext } from "./LeoParser";
import { Integer_typeContext } from "./LeoParser";
import { Arithmetic_typeContext } from "./LeoParser";
import { Named_primitive_typeContext } from "./LeoParser";
import { Primitive_typeContext } from "./LeoParser";
import { Named_typeContext } from "./LeoParser";
import { Tuple_typeContext } from "./LeoParser";
import { TypeContext } from "./LeoParser";
import { Group_coordinateContext } from "./LeoParser";
import { Affine_group_literalContext } from "./LeoParser";
import { LiteralContext } from "./LeoParser";
import { Group_literalContext } from "./LeoParser";
import { Primary_expressionContext } from "./LeoParser";
import { VariableContext } from "./LeoParser";
import { Associated_constantContext } from "./LeoParser";
import { Free_function_callContext } from "./LeoParser";
import { Associated_function_callContext } from "./LeoParser";
import { Function_argumentsContext } from "./LeoParser";
import { Tuple_expressionContext } from "./LeoParser";
import { Struct_expressionContext } from "./LeoParser";
import { Struct_component_initializerContext } from "./LeoParser";
import { Postfix_expressionContext } from "./LeoParser";
import { Tuple_component_expressionContext } from "./LeoParser";
import { Struct_component_expressionContext } from "./LeoParser";
import { Method_callContext } from "./LeoParser";
import { ExpressionContext } from "./LeoParser";
import { MappingAttributesContext } from "./LeoParser";
import { UseMappingContext } from "./LeoParser";
import { ChachaContext } from "./LeoParser";
import { AssociatedFunctionCallContext } from "./LeoParser";
import { StatementContext } from "./LeoParser";
import { BlockContext } from "./LeoParser";
import { Return_statementContext } from "./LeoParser";
import { Expression_statementContext } from "./LeoParser";
import { Variable_declarationContext } from "./LeoParser";
import { Identifier_or_identifiersContext } from "./LeoParser";
import { BranchContext } from "./LeoParser";
import { Conditional_statementContext } from "./LeoParser";
import { Loop_statementContext } from "./LeoParser";
import { Console_statementContext } from "./LeoParser";
import { Console_callContext } from "./LeoParser";
import { Assert_callContext } from "./LeoParser";
import { Assert_equal_callContext } from "./LeoParser";
import { Assert_not_equal_callContext } from "./LeoParser";
import { Function_declarationContext } from "./LeoParser";
import { Function_parametersContext } from "./LeoParser";
import { Function_parameterContext } from "./LeoParser";
import { Inline_declarationContext } from "./LeoParser";
import { Transition_declarationContext } from "./LeoParser";
import { FinalizerContext } from "./LeoParser";
import { Struct_declarationContext } from "./LeoParser";
import { Struct_component_declarationsContext } from "./LeoParser";
import { Struct_component_declarationContext } from "./LeoParser";
import { Record_declarationContext } from "./LeoParser";
import { Mapping_declarationContext } from "./LeoParser";
import { Program_itemContext } from "./LeoParser";
import { Program_declarationContext } from "./LeoParser";
import { Import_declarationContext } from "./LeoParser";
import { SourceUnitContext } from "./LeoParser";
import { Input_typeContext } from "./LeoParser";
import { Input_expressionContext } from "./LeoParser";
import { Input_itemContext } from "./LeoParser";
import { Input_sectionContext } from "./LeoParser";
import { Input_fileContext } from "./LeoParser";
import { Output_expressionContext } from "./LeoParser";
import { Output_itemContext } from "./LeoParser";
import { Output_sectionContext } from "./LeoParser";
import { Output_fileContext } from "./LeoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LeoParser`.
 */
export default class LeoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LeoParser.letter`.
	 * @param ctx the parse tree
	 */
	enterLetter?: (ctx: LetterContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.letter`.
	 * @param ctx the parse tree
	 */
	exitLetter?: (ctx: LetterContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.bhp`.
	 * @param ctx the parse tree
	 */
	enterBhp?: (ctx: BhpContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.bhp`.
	 * @param ctx the parse tree
	 */
	exitBhp?: (ctx: BhpContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.pedersen`.
	 * @param ctx the parse tree
	 */
	enterPedersen?: (ctx: PedersenContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.pedersen`.
	 * @param ctx the parse tree
	 */
	exitPedersen?: (ctx: PedersenContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.poseidon`.
	 * @param ctx the parse tree
	 */
	enterPoseidon?: (ctx: PoseidonContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.poseidon`.
	 * @param ctx the parse tree
	 */
	exitPoseidon?: (ctx: PoseidonContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.numeral`.
	 * @param ctx the parse tree
	 */
	enterNumeral?: (ctx: NumeralContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.numeral`.
	 * @param ctx the parse tree
	 */
	exitNumeral?: (ctx: NumeralContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.unsigned_literal`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_literal?: (ctx: Unsigned_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.unsigned_literal`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_literal?: (ctx: Unsigned_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.signed_literal`.
	 * @param ctx the parse tree
	 */
	enterSigned_literal?: (ctx: Signed_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.signed_literal`.
	 * @param ctx the parse tree
	 */
	exitSigned_literal?: (ctx: Signed_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.field_literal`.
	 * @param ctx the parse tree
	 */
	enterField_literal?: (ctx: Field_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.field_literal`.
	 * @param ctx the parse tree
	 */
	exitField_literal?: (ctx: Field_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.product_group_literal`.
	 * @param ctx the parse tree
	 */
	enterProduct_group_literal?: (ctx: Product_group_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.product_group_literal`.
	 * @param ctx the parse tree
	 */
	exitProduct_group_literal?: (ctx: Product_group_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.scalar_literal`.
	 * @param ctx the parse tree
	 */
	enterScalar_literal?: (ctx: Scalar_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.scalar_literal`.
	 * @param ctx the parse tree
	 */
	exitScalar_literal?: (ctx: Scalar_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.address_literal`.
	 * @param ctx the parse tree
	 */
	enterAddress_literal?: (ctx: Address_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.address_literal`.
	 * @param ctx the parse tree
	 */
	exitAddress_literal?: (ctx: Address_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.addr_identifier`.
	 * @param ctx the parse tree
	 */
	enterAddr_identifier?: (ctx: Addr_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.addr_identifier`.
	 * @param ctx the parse tree
	 */
	exitAddr_identifier?: (ctx: Addr_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	enterInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	exitInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.atomic_literal`.
	 * @param ctx the parse tree
	 */
	enterAtomic_literal?: (ctx: Atomic_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.atomic_literal`.
	 * @param ctx the parse tree
	 */
	exitAtomic_literal?: (ctx: Atomic_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.program_id`.
	 * @param ctx the parse tree
	 */
	enterProgram_id?: (ctx: Program_idContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.program_id`.
	 * @param ctx the parse tree
	 */
	exitProgram_id?: (ctx: Program_idContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.locator`.
	 * @param ctx the parse tree
	 */
	enterLocator?: (ctx: LocatorContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.locator`.
	 * @param ctx the parse tree
	 */
	exitLocator?: (ctx: LocatorContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.arithmetic_type`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_type?: (ctx: Arithmetic_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.arithmetic_type`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_type?: (ctx: Arithmetic_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.named_primitive_type`.
	 * @param ctx the parse tree
	 */
	enterNamed_primitive_type?: (ctx: Named_primitive_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.named_primitive_type`.
	 * @param ctx the parse tree
	 */
	exitNamed_primitive_type?: (ctx: Named_primitive_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.primitive_type`.
	 * @param ctx the parse tree
	 */
	enterPrimitive_type?: (ctx: Primitive_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.primitive_type`.
	 * @param ctx the parse tree
	 */
	exitPrimitive_type?: (ctx: Primitive_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.named_type`.
	 * @param ctx the parse tree
	 */
	enterNamed_type?: (ctx: Named_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.named_type`.
	 * @param ctx the parse tree
	 */
	exitNamed_type?: (ctx: Named_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.tuple_type`.
	 * @param ctx the parse tree
	 */
	enterTuple_type?: (ctx: Tuple_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.tuple_type`.
	 * @param ctx the parse tree
	 */
	exitTuple_type?: (ctx: Tuple_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.group_coordinate`.
	 * @param ctx the parse tree
	 */
	enterGroup_coordinate?: (ctx: Group_coordinateContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.group_coordinate`.
	 * @param ctx the parse tree
	 */
	exitGroup_coordinate?: (ctx: Group_coordinateContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.affine_group_literal`.
	 * @param ctx the parse tree
	 */
	enterAffine_group_literal?: (ctx: Affine_group_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.affine_group_literal`.
	 * @param ctx the parse tree
	 */
	exitAffine_group_literal?: (ctx: Affine_group_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.group_literal`.
	 * @param ctx the parse tree
	 */
	enterGroup_literal?: (ctx: Group_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.group_literal`.
	 * @param ctx the parse tree
	 */
	exitGroup_literal?: (ctx: Group_literalContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.associated_constant`.
	 * @param ctx the parse tree
	 */
	enterAssociated_constant?: (ctx: Associated_constantContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.associated_constant`.
	 * @param ctx the parse tree
	 */
	exitAssociated_constant?: (ctx: Associated_constantContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.free_function_call`.
	 * @param ctx the parse tree
	 */
	enterFree_function_call?: (ctx: Free_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.free_function_call`.
	 * @param ctx the parse tree
	 */
	exitFree_function_call?: (ctx: Free_function_callContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.associated_function_call`.
	 * @param ctx the parse tree
	 */
	enterAssociated_function_call?: (ctx: Associated_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.associated_function_call`.
	 * @param ctx the parse tree
	 */
	exitAssociated_function_call?: (ctx: Associated_function_callContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.function_arguments`.
	 * @param ctx the parse tree
	 */
	enterFunction_arguments?: (ctx: Function_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.function_arguments`.
	 * @param ctx the parse tree
	 */
	exitFunction_arguments?: (ctx: Function_argumentsContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.tuple_expression`.
	 * @param ctx the parse tree
	 */
	enterTuple_expression?: (ctx: Tuple_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.tuple_expression`.
	 * @param ctx the parse tree
	 */
	exitTuple_expression?: (ctx: Tuple_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.struct_expression`.
	 * @param ctx the parse tree
	 */
	enterStruct_expression?: (ctx: Struct_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.struct_expression`.
	 * @param ctx the parse tree
	 */
	exitStruct_expression?: (ctx: Struct_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.struct_component_initializer`.
	 * @param ctx the parse tree
	 */
	enterStruct_component_initializer?: (ctx: Struct_component_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.struct_component_initializer`.
	 * @param ctx the parse tree
	 */
	exitStruct_component_initializer?: (ctx: Struct_component_initializerContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_expression?: (ctx: Postfix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_expression?: (ctx: Postfix_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.tuple_component_expression`.
	 * @param ctx the parse tree
	 */
	enterTuple_component_expression?: (ctx: Tuple_component_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.tuple_component_expression`.
	 * @param ctx the parse tree
	 */
	exitTuple_component_expression?: (ctx: Tuple_component_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.struct_component_expression`.
	 * @param ctx the parse tree
	 */
	enterStruct_component_expression?: (ctx: Struct_component_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.struct_component_expression`.
	 * @param ctx the parse tree
	 */
	exitStruct_component_expression?: (ctx: Struct_component_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.method_call`.
	 * @param ctx the parse tree
	 */
	enterMethod_call?: (ctx: Method_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.method_call`.
	 * @param ctx the parse tree
	 */
	exitMethod_call?: (ctx: Method_callContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.mappingAttributes`.
	 * @param ctx the parse tree
	 */
	enterMappingAttributes?: (ctx: MappingAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.mappingAttributes`.
	 * @param ctx the parse tree
	 */
	exitMappingAttributes?: (ctx: MappingAttributesContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.useMapping`.
	 * @param ctx the parse tree
	 */
	enterUseMapping?: (ctx: UseMappingContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.useMapping`.
	 * @param ctx the parse tree
	 */
	exitUseMapping?: (ctx: UseMappingContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.chacha`.
	 * @param ctx the parse tree
	 */
	enterChacha?: (ctx: ChachaContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.chacha`.
	 * @param ctx the parse tree
	 */
	exitChacha?: (ctx: ChachaContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.associatedFunctionCall`.
	 * @param ctx the parse tree
	 */
	enterAssociatedFunctionCall?: (ctx: AssociatedFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.associatedFunctionCall`.
	 * @param ctx the parse tree
	 */
	exitAssociatedFunctionCall?: (ctx: AssociatedFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	enterExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	exitExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.identifier_or_identifiers`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_or_identifiers?: (ctx: Identifier_or_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.identifier_or_identifiers`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_or_identifiers?: (ctx: Identifier_or_identifiersContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterConditional_statement?: (ctx: Conditional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitConditional_statement?: (ctx: Conditional_statementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.console_statement`.
	 * @param ctx the parse tree
	 */
	enterConsole_statement?: (ctx: Console_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.console_statement`.
	 * @param ctx the parse tree
	 */
	exitConsole_statement?: (ctx: Console_statementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.console_call`.
	 * @param ctx the parse tree
	 */
	enterConsole_call?: (ctx: Console_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.console_call`.
	 * @param ctx the parse tree
	 */
	exitConsole_call?: (ctx: Console_callContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assert_call`.
	 * @param ctx the parse tree
	 */
	enterAssert_call?: (ctx: Assert_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assert_call`.
	 * @param ctx the parse tree
	 */
	exitAssert_call?: (ctx: Assert_callContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assert_equal_call`.
	 * @param ctx the parse tree
	 */
	enterAssert_equal_call?: (ctx: Assert_equal_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assert_equal_call`.
	 * @param ctx the parse tree
	 */
	exitAssert_equal_call?: (ctx: Assert_equal_callContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assert_not_equal_call`.
	 * @param ctx the parse tree
	 */
	enterAssert_not_equal_call?: (ctx: Assert_not_equal_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assert_not_equal_call`.
	 * @param ctx the parse tree
	 */
	exitAssert_not_equal_call?: (ctx: Assert_not_equal_callContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameters?: (ctx: Function_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameters?: (ctx: Function_parametersContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.function_parameter`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter?: (ctx: Function_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.function_parameter`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter?: (ctx: Function_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inline_declaration`.
	 * @param ctx the parse tree
	 */
	enterInline_declaration?: (ctx: Inline_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inline_declaration`.
	 * @param ctx the parse tree
	 */
	exitInline_declaration?: (ctx: Inline_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.transition_declaration`.
	 * @param ctx the parse tree
	 */
	enterTransition_declaration?: (ctx: Transition_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.transition_declaration`.
	 * @param ctx the parse tree
	 */
	exitTransition_declaration?: (ctx: Transition_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.finalizer`.
	 * @param ctx the parse tree
	 */
	enterFinalizer?: (ctx: FinalizerContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.finalizer`.
	 * @param ctx the parse tree
	 */
	exitFinalizer?: (ctx: FinalizerContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	enterStruct_declaration?: (ctx: Struct_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	exitStruct_declaration?: (ctx: Struct_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.struct_component_declarations`.
	 * @param ctx the parse tree
	 */
	enterStruct_component_declarations?: (ctx: Struct_component_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.struct_component_declarations`.
	 * @param ctx the parse tree
	 */
	exitStruct_component_declarations?: (ctx: Struct_component_declarationsContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.struct_component_declaration`.
	 * @param ctx the parse tree
	 */
	enterStruct_component_declaration?: (ctx: Struct_component_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.struct_component_declaration`.
	 * @param ctx the parse tree
	 */
	exitStruct_component_declaration?: (ctx: Struct_component_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.record_declaration`.
	 * @param ctx the parse tree
	 */
	enterRecord_declaration?: (ctx: Record_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.record_declaration`.
	 * @param ctx the parse tree
	 */
	exitRecord_declaration?: (ctx: Record_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.mapping_declaration`.
	 * @param ctx the parse tree
	 */
	enterMapping_declaration?: (ctx: Mapping_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.mapping_declaration`.
	 * @param ctx the parse tree
	 */
	exitMapping_declaration?: (ctx: Mapping_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.program_item`.
	 * @param ctx the parse tree
	 */
	enterProgram_item?: (ctx: Program_itemContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.program_item`.
	 * @param ctx the parse tree
	 */
	exitProgram_item?: (ctx: Program_itemContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.program_declaration`.
	 * @param ctx the parse tree
	 */
	enterProgram_declaration?: (ctx: Program_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.program_declaration`.
	 * @param ctx the parse tree
	 */
	exitProgram_declaration?: (ctx: Program_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.import_declaration`.
	 * @param ctx the parse tree
	 */
	enterImport_declaration?: (ctx: Import_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.import_declaration`.
	 * @param ctx the parse tree
	 */
	exitImport_declaration?: (ctx: Import_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.sourceUnit`.
	 * @param ctx the parse tree
	 */
	enterSourceUnit?: (ctx: SourceUnitContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.sourceUnit`.
	 * @param ctx the parse tree
	 */
	exitSourceUnit?: (ctx: SourceUnitContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.input_type`.
	 * @param ctx the parse tree
	 */
	enterInput_type?: (ctx: Input_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.input_type`.
	 * @param ctx the parse tree
	 */
	exitInput_type?: (ctx: Input_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.input_expression`.
	 * @param ctx the parse tree
	 */
	enterInput_expression?: (ctx: Input_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.input_expression`.
	 * @param ctx the parse tree
	 */
	exitInput_expression?: (ctx: Input_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.input_item`.
	 * @param ctx the parse tree
	 */
	enterInput_item?: (ctx: Input_itemContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.input_item`.
	 * @param ctx the parse tree
	 */
	exitInput_item?: (ctx: Input_itemContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.input_section`.
	 * @param ctx the parse tree
	 */
	enterInput_section?: (ctx: Input_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.input_section`.
	 * @param ctx the parse tree
	 */
	exitInput_section?: (ctx: Input_sectionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.input_file`.
	 * @param ctx the parse tree
	 */
	enterInput_file?: (ctx: Input_fileContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.input_file`.
	 * @param ctx the parse tree
	 */
	exitInput_file?: (ctx: Input_fileContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.output_expression`.
	 * @param ctx the parse tree
	 */
	enterOutput_expression?: (ctx: Output_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.output_expression`.
	 * @param ctx the parse tree
	 */
	exitOutput_expression?: (ctx: Output_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.output_item`.
	 * @param ctx the parse tree
	 */
	enterOutput_item?: (ctx: Output_itemContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.output_item`.
	 * @param ctx the parse tree
	 */
	exitOutput_item?: (ctx: Output_itemContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.output_section`.
	 * @param ctx the parse tree
	 */
	enterOutput_section?: (ctx: Output_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.output_section`.
	 * @param ctx the parse tree
	 */
	exitOutput_section?: (ctx: Output_sectionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.output_file`.
	 * @param ctx the parse tree
	 */
	enterOutput_file?: (ctx: Output_fileContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.output_file`.
	 * @param ctx the parse tree
	 */
	exitOutput_file?: (ctx: Output_fileContext) => void;
}

