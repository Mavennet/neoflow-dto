"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyPipelineStatementCredentialSubject = exports.AGENT_MONTHLY_PIPELINE_STATEMENT_DTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const general_1 = require("../../../general");
const class_transformer_1 = require("class-transformer");
class AGENT_MONTHLY_PIPELINE_STATEMENT_DTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_MONTHLY_PIPELINE_STATEMENT_DTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MonthlyPipelineStatementCredentialSubject),
    __metadata("design:type", MonthlyPipelineStatementCredentialSubject)
], AGENT_MONTHLY_PIPELINE_STATEMENT_DTO.prototype, "credentialSubject", void 0);
exports.AGENT_MONTHLY_PIPELINE_STATEMENT_DTO = AGENT_MONTHLY_PIPELINE_STATEMENT_DTO;
class MonthlyPipelineStatementCredentialSubject {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], MonthlyPipelineStatementCredentialSubject.prototype, "carrier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], MonthlyPipelineStatementCredentialSubject.prototype, "shipper", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], MonthlyPipelineStatementCredentialSubject.prototype, "consignee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.MonthlyDeliveryStatementDTO),
    __metadata("design:type", general_1.MonthlyDeliveryStatementDTO)
], MonthlyPipelineStatementCredentialSubject.prototype, "monthlyDeliveryStatement", void 0);
exports.MonthlyPipelineStatementCredentialSubject = MonthlyPipelineStatementCredentialSubject;
