// Generated from Leo.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { SourceUnitContext } from "./LeoParser";
import { ProgramIdContext } from "./LeoParser";
import { LocatorContext } from "./LeoParser";
import { ImportDeclarationContext } from "./LeoParser";
import { ProgramDeclarationContext } from "./LeoParser";
import { ProgramItemContext } from "./LeoParser";
import { IdentifierContext } from "./LeoParser";
import { AnnotationContext } from "./LeoParser";
import { IntegerTypeContext } from "./LeoParser";
import { ArithmeticTypeContext } from "./LeoParser";
import { NamedPrimitiveTypeContext } from "./LeoParser";
import { UnitTypeContext } from "./LeoParser";
import { PrimitiveTypeContext } from "./LeoParser";
import { NamedTypeContext } from "./LeoParser";
import { TupleTypeContext } from "./LeoParser";
import { UserDefinedTypeNameContext } from "./LeoParser";
import { TypeContext } from "./LeoParser";
import { IntegerliteralContext } from "./LeoParser";
import { NumericliteralContext } from "./LeoParser";
import { AtomicliteralContext } from "./LeoParser";
import { LiteralContext } from "./LeoParser";
import { GroupliteralContext } from "./LeoParser";
import { PrimaryExpressionContext } from "./LeoParser";
import { VariableContext } from "./LeoParser";
import { AssociatedConstantContext } from "./LeoParser";
import { FreeFunctionCallContext } from "./LeoParser";
import { AssociatedFunctionCallContext } from "./LeoParser";
import { FunctionArgumentsContext } from "./LeoParser";
import { UnitExpressionContext } from "./LeoParser";
import { TupleExpressionContext } from "./LeoParser";
import { StructExpressionContext } from "./LeoParser";
import { StructComponentInitializerContext } from "./LeoParser";
import { SelfCallerContext } from "./LeoParser";
import { BlockHeightContext } from "./LeoParser";
import { PostfixExpressionContext } from "./LeoParser";
import { TupleComponentExpressionContext } from "./LeoParser";
import { StructComponentExpressionContext } from "./LeoParser";
import { MethodCallContext } from "./LeoParser";
import { UnaryExpressionContext } from "./LeoParser";
import { ExponentialExpressionContext } from "./LeoParser";
import { MultiplicativeExpressionContext } from "./LeoParser";
import { AdditiveExpressionContext } from "./LeoParser";
import { ShiftExpressionContext } from "./LeoParser";
import { ConjunctiveExpressionContext } from "./LeoParser";
import { DisjunctiveExpressionContext } from "./LeoParser";
import { ExclusiveDisjunctiveExpressionContext } from "./LeoParser";
import { OrderingExpressionContext } from "./LeoParser";
import { EqualityExpressionContext } from "./LeoParser";
import { ConditionalConjunctiveExpressionContext } from "./LeoParser";
import { ConditionalDisjunctiveExpressionContext } from "./LeoParser";
import { BinaryExpressionContext } from "./LeoParser";
import { ConditionalTernaryExpressionContext } from "./LeoParser";
import { ExpressionContext } from "./LeoParser";
import { LoopStatementContext } from "./LeoParser";
import { MappingAttributesContext } from "./LeoParser";
import { UseMappingContext } from "./LeoParser";
import { StatementContext } from "./LeoParser";
import { BlockContext } from "./LeoParser";
import { ReturnStatementContext } from "./LeoParser";
import { ExpressionStatementContext } from "./LeoParser";
import { VariableDeclarationContext } from "./LeoParser";
import { IdentifierOrIdentifiersContext } from "./LeoParser";
import { BranchContext } from "./LeoParser";
import { ConditionalStatementContext } from "./LeoParser";
import { AssignmentOperatorContext } from "./LeoParser";
import { AssignmentStatementContext } from "./LeoParser";
import { ConsoleStatementContext } from "./LeoParser";
import { ConsoleCallContext } from "./LeoParser";
import { AssertCallContext } from "./LeoParser";
import { AssertEqualCallContext } from "./LeoParser";
import { AssertNotEqualCallContext } from "./LeoParser";
import { FunctionDeclarationContext } from "./LeoParser";
import { FunctionParametersContext } from "./LeoParser";
import { FunctionParameterContext } from "./LeoParser";
import { InlineDeclarationContext } from "./LeoParser";
import { TransitionDeclarationContext } from "./LeoParser";
import { FinalizerContext } from "./LeoParser";
import { StructDeclarationContext } from "./LeoParser";
import { StructComponentDeclarationsContext } from "./LeoParser";
import { StructComponentDeclarationContext } from "./LeoParser";
import { RecordDeclarationContext } from "./LeoParser";
import { MappingDeclarationContext } from "./LeoParser";
import { FileContext } from "./LeoParser";
import { InputTypeContext } from "./LeoParser";
import { InputExpressionContext } from "./LeoParser";
import { InputItemContext } from "./LeoParser";
import { InputTitleContext } from "./LeoParser";
import { InputSectionContext } from "./LeoParser";
import { InputFileContext } from "./LeoParser";
import { OutputExpressionContext } from "./LeoParser";
import { OutputItemContext } from "./LeoParser";
import { OutputTitleContext } from "./LeoParser";
import { OutputSectionContext } from "./LeoParser";
import { OutputFileContext } from "./LeoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LeoParser`.
 */
export default class LeoListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `LeoParser.programId`.
	 * @param ctx the parse tree
	 */
	enterProgramId?: (ctx: ProgramIdContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.programId`.
	 * @param ctx the parse tree
	 */
	exitProgramId?: (ctx: ProgramIdContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.programDeclaration`.
	 * @param ctx the parse tree
	 */
	enterProgramDeclaration?: (ctx: ProgramDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.programDeclaration`.
	 * @param ctx the parse tree
	 */
	exitProgramDeclaration?: (ctx: ProgramDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.programItem`.
	 * @param ctx the parse tree
	 */
	enterProgramItem?: (ctx: ProgramItemContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.programItem`.
	 * @param ctx the parse tree
	 */
	exitProgramItem?: (ctx: ProgramItemContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.integerType`.
	 * @param ctx the parse tree
	 */
	enterIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.integerType`.
	 * @param ctx the parse tree
	 */
	exitIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.arithmeticType`.
	 * @param ctx the parse tree
	 */
	enterArithmeticType?: (ctx: ArithmeticTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.arithmeticType`.
	 * @param ctx the parse tree
	 */
	exitArithmeticType?: (ctx: ArithmeticTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.namedPrimitiveType`.
	 * @param ctx the parse tree
	 */
	enterNamedPrimitiveType?: (ctx: NamedPrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.namedPrimitiveType`.
	 * @param ctx the parse tree
	 */
	exitNamedPrimitiveType?: (ctx: NamedPrimitiveTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.unitType`.
	 * @param ctx the parse tree
	 */
	enterUnitType?: (ctx: UnitTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.unitType`.
	 * @param ctx the parse tree
	 */
	exitUnitType?: (ctx: UnitTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.namedType`.
	 * @param ctx the parse tree
	 */
	enterNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.namedType`.
	 * @param ctx the parse tree
	 */
	exitNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.userDefinedTypeName`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedTypeName?: (ctx: UserDefinedTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.userDefinedTypeName`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedTypeName?: (ctx: UserDefinedTypeNameContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.integerliteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerliteral?: (ctx: IntegerliteralContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.integerliteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerliteral?: (ctx: IntegerliteralContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.numericliteral`.
	 * @param ctx the parse tree
	 */
	enterNumericliteral?: (ctx: NumericliteralContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.numericliteral`.
	 * @param ctx the parse tree
	 */
	exitNumericliteral?: (ctx: NumericliteralContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.atomicliteral`.
	 * @param ctx the parse tree
	 */
	enterAtomicliteral?: (ctx: AtomicliteralContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.atomicliteral`.
	 * @param ctx the parse tree
	 */
	exitAtomicliteral?: (ctx: AtomicliteralContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.groupliteral`.
	 * @param ctx the parse tree
	 */
	enterGroupliteral?: (ctx: GroupliteralContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.groupliteral`.
	 * @param ctx the parse tree
	 */
	exitGroupliteral?: (ctx: GroupliteralContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.associatedConstant`.
	 * @param ctx the parse tree
	 */
	enterAssociatedConstant?: (ctx: AssociatedConstantContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.associatedConstant`.
	 * @param ctx the parse tree
	 */
	exitAssociatedConstant?: (ctx: AssociatedConstantContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.freeFunctionCall`.
	 * @param ctx the parse tree
	 */
	enterFreeFunctionCall?: (ctx: FreeFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.freeFunctionCall`.
	 * @param ctx the parse tree
	 */
	exitFreeFunctionCall?: (ctx: FreeFunctionCallContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.functionArguments`.
	 * @param ctx the parse tree
	 */
	enterFunctionArguments?: (ctx: FunctionArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.functionArguments`.
	 * @param ctx the parse tree
	 */
	exitFunctionArguments?: (ctx: FunctionArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.unitExpression`.
	 * @param ctx the parse tree
	 */
	enterUnitExpression?: (ctx: UnitExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.unitExpression`.
	 * @param ctx the parse tree
	 */
	exitUnitExpression?: (ctx: UnitExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.tupleExpression`.
	 * @param ctx the parse tree
	 */
	enterTupleExpression?: (ctx: TupleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.tupleExpression`.
	 * @param ctx the parse tree
	 */
	exitTupleExpression?: (ctx: TupleExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.structExpression`.
	 * @param ctx the parse tree
	 */
	enterStructExpression?: (ctx: StructExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.structExpression`.
	 * @param ctx the parse tree
	 */
	exitStructExpression?: (ctx: StructExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.structComponentInitializer`.
	 * @param ctx the parse tree
	 */
	enterStructComponentInitializer?: (ctx: StructComponentInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.structComponentInitializer`.
	 * @param ctx the parse tree
	 */
	exitStructComponentInitializer?: (ctx: StructComponentInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.selfCaller`.
	 * @param ctx the parse tree
	 */
	enterSelfCaller?: (ctx: SelfCallerContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.selfCaller`.
	 * @param ctx the parse tree
	 */
	exitSelfCaller?: (ctx: SelfCallerContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.blockHeight`.
	 * @param ctx the parse tree
	 */
	enterBlockHeight?: (ctx: BlockHeightContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.blockHeight`.
	 * @param ctx the parse tree
	 */
	exitBlockHeight?: (ctx: BlockHeightContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.tupleComponentExpression`.
	 * @param ctx the parse tree
	 */
	enterTupleComponentExpression?: (ctx: TupleComponentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.tupleComponentExpression`.
	 * @param ctx the parse tree
	 */
	exitTupleComponentExpression?: (ctx: TupleComponentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.structComponentExpression`.
	 * @param ctx the parse tree
	 */
	enterStructComponentExpression?: (ctx: StructComponentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.structComponentExpression`.
	 * @param ctx the parse tree
	 */
	exitStructComponentExpression?: (ctx: StructComponentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	enterExponentialExpression?: (ctx: ExponentialExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	exitExponentialExpression?: (ctx: ExponentialExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.conjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	enterConjunctiveExpression?: (ctx: ConjunctiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.conjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	exitConjunctiveExpression?: (ctx: ConjunctiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.disjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	enterDisjunctiveExpression?: (ctx: DisjunctiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.disjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	exitDisjunctiveExpression?: (ctx: DisjunctiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.exclusiveDisjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveDisjunctiveExpression?: (ctx: ExclusiveDisjunctiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.exclusiveDisjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveDisjunctiveExpression?: (ctx: ExclusiveDisjunctiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.orderingExpression`.
	 * @param ctx the parse tree
	 */
	enterOrderingExpression?: (ctx: OrderingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.orderingExpression`.
	 * @param ctx the parse tree
	 */
	exitOrderingExpression?: (ctx: OrderingExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.conditionalConjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalConjunctiveExpression?: (ctx: ConditionalConjunctiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.conditionalConjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalConjunctiveExpression?: (ctx: ConditionalConjunctiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.conditionalDisjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalDisjunctiveExpression?: (ctx: ConditionalDisjunctiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.conditionalDisjunctiveExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalDisjunctiveExpression?: (ctx: ConditionalDisjunctiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.binaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryExpression?: (ctx: BinaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.binaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryExpression?: (ctx: BinaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.conditionalTernaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalTernaryExpression?: (ctx: ConditionalTernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.conditionalTernaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalTernaryExpression?: (ctx: ConditionalTernaryExpressionContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.identifierOrIdentifiers`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrIdentifiers?: (ctx: IdentifierOrIdentifiersContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.identifierOrIdentifiers`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrIdentifiers?: (ctx: IdentifierOrIdentifiersContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.consoleStatement`.
	 * @param ctx the parse tree
	 */
	enterConsoleStatement?: (ctx: ConsoleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.consoleStatement`.
	 * @param ctx the parse tree
	 */
	exitConsoleStatement?: (ctx: ConsoleStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.consoleCall`.
	 * @param ctx the parse tree
	 */
	enterConsoleCall?: (ctx: ConsoleCallContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.consoleCall`.
	 * @param ctx the parse tree
	 */
	exitConsoleCall?: (ctx: ConsoleCallContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assertCall`.
	 * @param ctx the parse tree
	 */
	enterAssertCall?: (ctx: AssertCallContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assertCall`.
	 * @param ctx the parse tree
	 */
	exitAssertCall?: (ctx: AssertCallContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assertEqualCall`.
	 * @param ctx the parse tree
	 */
	enterAssertEqualCall?: (ctx: AssertEqualCallContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assertEqualCall`.
	 * @param ctx the parse tree
	 */
	exitAssertEqualCall?: (ctx: AssertEqualCallContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.assertNotEqualCall`.
	 * @param ctx the parse tree
	 */
	enterAssertNotEqualCall?: (ctx: AssertNotEqualCallContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.assertNotEqualCall`.
	 * @param ctx the parse tree
	 */
	exitAssertNotEqualCall?: (ctx: AssertNotEqualCallContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInlineDeclaration?: (ctx: InlineDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInlineDeclaration?: (ctx: InlineDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.transitionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTransitionDeclaration?: (ctx: TransitionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.transitionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTransitionDeclaration?: (ctx: TransitionDeclarationContext) => void;
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
	 * Enter a parse tree produced by `LeoParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructDeclaration?: (ctx: StructDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructDeclaration?: (ctx: StructDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.structComponentDeclarations`.
	 * @param ctx the parse tree
	 */
	enterStructComponentDeclarations?: (ctx: StructComponentDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.structComponentDeclarations`.
	 * @param ctx the parse tree
	 */
	exitStructComponentDeclarations?: (ctx: StructComponentDeclarationsContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.structComponentDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructComponentDeclaration?: (ctx: StructComponentDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.structComponentDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructComponentDeclaration?: (ctx: StructComponentDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.recordDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRecordDeclaration?: (ctx: RecordDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.recordDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRecordDeclaration?: (ctx: RecordDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.mappingDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMappingDeclaration?: (ctx: MappingDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.mappingDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMappingDeclaration?: (ctx: MappingDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inputType`.
	 * @param ctx the parse tree
	 */
	enterInputType?: (ctx: InputTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inputType`.
	 * @param ctx the parse tree
	 */
	exitInputType?: (ctx: InputTypeContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inputExpression`.
	 * @param ctx the parse tree
	 */
	enterInputExpression?: (ctx: InputExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inputExpression`.
	 * @param ctx the parse tree
	 */
	exitInputExpression?: (ctx: InputExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inputItem`.
	 * @param ctx the parse tree
	 */
	enterInputItem?: (ctx: InputItemContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inputItem`.
	 * @param ctx the parse tree
	 */
	exitInputItem?: (ctx: InputItemContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inputTitle`.
	 * @param ctx the parse tree
	 */
	enterInputTitle?: (ctx: InputTitleContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inputTitle`.
	 * @param ctx the parse tree
	 */
	exitInputTitle?: (ctx: InputTitleContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inputSection`.
	 * @param ctx the parse tree
	 */
	enterInputSection?: (ctx: InputSectionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inputSection`.
	 * @param ctx the parse tree
	 */
	exitInputSection?: (ctx: InputSectionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.inputFile`.
	 * @param ctx the parse tree
	 */
	enterInputFile?: (ctx: InputFileContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.inputFile`.
	 * @param ctx the parse tree
	 */
	exitInputFile?: (ctx: InputFileContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.outputExpression`.
	 * @param ctx the parse tree
	 */
	enterOutputExpression?: (ctx: OutputExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.outputExpression`.
	 * @param ctx the parse tree
	 */
	exitOutputExpression?: (ctx: OutputExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.outputItem`.
	 * @param ctx the parse tree
	 */
	enterOutputItem?: (ctx: OutputItemContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.outputItem`.
	 * @param ctx the parse tree
	 */
	exitOutputItem?: (ctx: OutputItemContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.outputTitle`.
	 * @param ctx the parse tree
	 */
	enterOutputTitle?: (ctx: OutputTitleContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.outputTitle`.
	 * @param ctx the parse tree
	 */
	exitOutputTitle?: (ctx: OutputTitleContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.outputSection`.
	 * @param ctx the parse tree
	 */
	enterOutputSection?: (ctx: OutputSectionContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.outputSection`.
	 * @param ctx the parse tree
	 */
	exitOutputSection?: (ctx: OutputSectionContext) => void;
	/**
	 * Enter a parse tree produced by `LeoParser.outputFile`.
	 * @param ctx the parse tree
	 */
	enterOutputFile?: (ctx: OutputFileContext) => void;
	/**
	 * Exit a parse tree produced by `LeoParser.outputFile`.
	 * @param ctx the parse tree
	 */
	exitOutputFile?: (ctx: OutputFileContext) => void;
}

