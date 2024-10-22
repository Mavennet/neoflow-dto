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
exports.CORE_MonthlyPipelineStatementDTO = exports.MonthlyPipelineStatementVC = exports.AGENT_MonthlyPipelineStatementDTO = exports.MonthlyPipelineStatementCredentialSubject = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const general_1 = require("../../../general");
const class_transformer_1 = require("class-transformer");
const traceability_dto_1 = require("@mavennet/traceability-dto");
class MonthlyPipelineStatementCredentialSubject {
    carrier;
    shipper;
    consignee;
    monthlyDeliveryStatement;
}
exports.MonthlyPipelineStatementCredentialSubject = MonthlyPipelineStatementCredentialSubject;
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
class AGENT_MonthlyPipelineStatementDTO {
    productId;
    credentialSubject;
}
exports.AGENT_MonthlyPipelineStatementDTO = AGENT_MonthlyPipelineStatementDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_MonthlyPipelineStatementDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MonthlyPipelineStatementCredentialSubject),
    __metadata("design:type", MonthlyPipelineStatementCredentialSubject)
], AGENT_MonthlyPipelineStatementDTO.prototype, "credentialSubject", void 0);
class MonthlyPipelineStatementVC extends traceability_dto_1.CredentialDTO {
    credentialSubject;
}
exports.MonthlyPipelineStatementVC = MonthlyPipelineStatementVC;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MonthlyPipelineStatementCredentialSubject),
    __metadata("design:type", MonthlyPipelineStatementCredentialSubject)
], MonthlyPipelineStatementVC.prototype, "credentialSubject", void 0);
class CORE_MonthlyPipelineStatementDTO {
    productId;
    eventId;
    eventVC;
}
exports.CORE_MonthlyPipelineStatementDTO = CORE_MonthlyPipelineStatementDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_MonthlyPipelineStatementDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_MonthlyPipelineStatementDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MonthlyPipelineStatementVC),
    __metadata("design:type", MonthlyPipelineStatementVC)
], CORE_MonthlyPipelineStatementDTO.prototype, "eventVC", void 0);
