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
exports.CORE_MonthlyPipelineStatementDTO = exports.MonthlyPipelineStatement_VC = exports.MonthlyPipelineStatementCredentialSubject = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const general_1 = require("../../../general");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../../general/constants");
const dto_1 = require("../../../general/dto");
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
class MonthlyPipelineStatement_VC {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], MonthlyPipelineStatement_VC.prototype, "@context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MonthlyPipelineStatement_VC.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayContains)([constants_1.JSON_TYPE.VERIFIABLE_CREDENTIAL]),
    __metadata("design:type", Array)
], MonthlyPipelineStatement_VC.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], MonthlyPipelineStatement_VC.prototype, "issuer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MonthlyPipelineStatementCredentialSubject),
    __metadata("design:type", MonthlyPipelineStatementCredentialSubject)
], MonthlyPipelineStatement_VC.prototype, "credentialSubject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], MonthlyPipelineStatement_VC.prototype, "issuanceDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.ProofDTO),
    __metadata("design:type", dto_1.ProofDTO)
], MonthlyPipelineStatement_VC.prototype, "proof", void 0);
exports.MonthlyPipelineStatement_VC = MonthlyPipelineStatement_VC;
class CORE_MonthlyPipelineStatementDTO {
}
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
    (0, class_transformer_1.Type)(() => MonthlyPipelineStatement_VC),
    __metadata("design:type", MonthlyPipelineStatement_VC)
], CORE_MonthlyPipelineStatementDTO.prototype, "eventVC", void 0);
exports.CORE_MonthlyPipelineStatementDTO = CORE_MonthlyPipelineStatementDTO;
