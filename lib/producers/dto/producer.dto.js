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
exports.CORE_ProducerDTO = exports.Producer_VC_DTO = exports.ProducerCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../general");
const dto_1 = require("../../general/dto");
class ProducerCredentialSubjectDTO {
    type;
    title;
}
exports.ProducerCredentialSubjectDTO = ProducerCredentialSubjectDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(general_1.JSON_TYPE_NF, { each: true }),
    __metadata("design:type", Array)
], ProducerCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProducerCredentialSubjectDTO.prototype, "title", void 0);
class Producer_VC_DTO {
    '@context';
    type;
    id;
    issuanceDate;
    expirationDate;
    issuer;
    credentialSubject;
    proof;
}
exports.Producer_VC_DTO = Producer_VC_DTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], Producer_VC_DTO.prototype, "@context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayContains)([general_1.JSON_TYPE.VERIFIABLE_CREDENTIAL]),
    __metadata("design:type", Array)
], Producer_VC_DTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Producer_VC_DTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], Producer_VC_DTO.prototype, "issuanceDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], Producer_VC_DTO.prototype, "expirationDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], Producer_VC_DTO.prototype, "issuer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ProducerCredentialSubjectDTO),
    __metadata("design:type", ProducerCredentialSubjectDTO)
], Producer_VC_DTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.ProofDTO),
    __metadata("design:type", dto_1.ProofDTO)
], Producer_VC_DTO.prototype, "proof", void 0);
class CORE_ProducerDTO {
    gasShipmentId;
    producerId;
    producerVC;
}
exports.CORE_ProducerDTO = CORE_ProducerDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((obj) => !obj.productId || obj.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_ProducerDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_ProducerDTO.prototype, "producerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Producer_VC_DTO),
    __metadata("design:type", Producer_VC_DTO)
], CORE_ProducerDTO.prototype, "producerVC", void 0);
