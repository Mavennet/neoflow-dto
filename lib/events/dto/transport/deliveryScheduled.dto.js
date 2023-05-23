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
exports.CORE_DeliveryScheduledDTO = exports.AGENT_DeliveryScheduledDTO = exports.DeliveryScheduled_VC_DTO = exports.DeliveryScheduledCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const general_1 = require("../../../general");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../../general/constants");
const dto_1 = require("../../../general/dto");
const traceability_dto_1 = require("@mavennet/traceability-dto");
class DeliveryScheduledCredentialSubjectDTO {
    type;
    transporter;
    consignee;
    consignor;
    batchNumber;
    commodity;
    portOfEntry;
    portOfArrival;
    place;
    portOfDestination;
    deliveryDestination;
    countryOfDestination;
    receiptLocation;
    injectionVolume;
    injectionDate;
    deliveryDate;
    scheduledDate;
    hasDocuments;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.JSON_TYPE_NF, { each: true }),
    __metadata("design:type", Array)
], DeliveryScheduledCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", dto_1.OrganizationDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "transporter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", dto_1.OrganizationDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "consignee", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", dto_1.OrganizationDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "consignor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryScheduledCredentialSubjectDTO.prototype, "batchNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", traceability_dto_1.CommodityDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "commodity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "portOfEntry", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "portOfArrival", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "portOfDestination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "deliveryDestination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryScheduledCredentialSubjectDTO.prototype, "countryOfDestination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "receiptLocation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => traceability_dto_1.MeasurementDTO),
    __metadata("design:type", traceability_dto_1.MeasurementDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "injectionVolume", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduledCredentialSubjectDTO.prototype, "injectionDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduledCredentialSubjectDTO.prototype, "deliveryDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryScheduledCredentialSubjectDTO.prototype, "scheduledDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DeliveryScheduledCredentialSubjectDTO.prototype, "hasDocuments", void 0);
exports.DeliveryScheduledCredentialSubjectDTO = DeliveryScheduledCredentialSubjectDTO;
class DeliveryScheduled_VC_DTO {
    '@context';
    id;
    type;
    issuer;
    credentialSubject;
    issuanceDate;
    proof;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], DeliveryScheduled_VC_DTO.prototype, "@context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryScheduled_VC_DTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayContains)([constants_1.JSON_TYPE.VERIFIABLE_CREDENTIAL]),
    __metadata("design:type", Array)
], DeliveryScheduled_VC_DTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], DeliveryScheduled_VC_DTO.prototype, "issuer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeliveryScheduledCredentialSubjectDTO),
    __metadata("design:type", DeliveryScheduledCredentialSubjectDTO)
], DeliveryScheduled_VC_DTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduled_VC_DTO.prototype, "issuanceDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.ProofDTO),
    __metadata("design:type", dto_1.ProofDTO)
], DeliveryScheduled_VC_DTO.prototype, "proof", void 0);
exports.DeliveryScheduled_VC_DTO = DeliveryScheduled_VC_DTO;
class AGENT_DeliveryScheduledDTO {
    productId;
    credentialSubject;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_DeliveryScheduledDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeliveryScheduledCredentialSubjectDTO),
    __metadata("design:type", DeliveryScheduledCredentialSubjectDTO)
], AGENT_DeliveryScheduledDTO.prototype, "credentialSubject", void 0);
exports.AGENT_DeliveryScheduledDTO = AGENT_DeliveryScheduledDTO;
class CORE_DeliveryScheduledDTO {
    productId;
    eventId;
    eventVC;
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_DeliveryScheduledDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_DeliveryScheduledDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeliveryScheduled_VC_DTO),
    __metadata("design:type", DeliveryScheduled_VC_DTO)
], CORE_DeliveryScheduledDTO.prototype, "eventVC", void 0);
exports.CORE_DeliveryScheduledDTO = CORE_DeliveryScheduledDTO;
