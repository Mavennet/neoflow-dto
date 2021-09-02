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
exports.CORE_StorageEventCredentialSubjectDTO = exports.AGENT_StorageEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
const swagger_1 = require("@nestjs/swagger");
class AGENT_StorageEventCredentialSubjectDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    __metadata("design:type", String)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.MeasurementDTO),
    __metadata("design:type", general_1.MeasurementDTO)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "storedWeight", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "observations", void 0);
exports.AGENT_StorageEventCredentialSubjectDTO = AGENT_StorageEventCredentialSubjectDTO;
class CORE_StorageEventCredentialSubjectDTO extends AGENT_StorageEventCredentialSubjectDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_StorageEventCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_StorageEventCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "productId", void 0);
exports.CORE_StorageEventCredentialSubjectDTO = CORE_StorageEventCredentialSubjectDTO;
