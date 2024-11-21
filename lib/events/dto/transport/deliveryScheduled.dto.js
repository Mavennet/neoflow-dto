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
exports.CORE_AddScheduledVolumeDTO = exports.CORE_DeliveryScheduledDTO = exports.AGENT_DeliveryScheduledDTO = exports.DeliveryScheduledVCDTO = exports.DeliveryScheduledCredentialSubjectDTO = void 0;
const credentials_1 = require("../../../credentials");
const measurement_dto_1 = require("../../../general/dto/measurement.dto");
const commodity_dto_1 = require("../../../general/dto/commodity.dto");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const general_1 = require("../../../general");
const constants_1 = require("../../../general/constants");
const dto_1 = require("../../../general/dto");
class DeliveryScheduledCredentialSubjectDTO {
    type;
    transporter;
    consignee;
    consignor;
    batchNumber;
    commodity;
    portOfEntry;
    portOfArrival;
    portOfDestination;
    deliveryDestination;
    countryOfDestination;
    receiptLocation;
    injectionVolume;
    deliveryVolume;
    scheduledVolume;
    injectionStartDate;
    injectionEndDate;
    deliveryStartDate;
    deliveryEndDate;
    nominationMonth;
    scheduledDate;
}
exports.DeliveryScheduledCredentialSubjectDTO = DeliveryScheduledCredentialSubjectDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.JSON_TYPE_NF, { each: true }),
    __metadata("design:type", Array)
], DeliveryScheduledCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.OrganizationDTO),
    __metadata("design:type", dto_1.OrganizationDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "transporter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.OrganizationDTO),
    __metadata("design:type", dto_1.OrganizationDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "consignee", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.OrganizationDTO),
    __metadata("design:type", dto_1.OrganizationDTO)
], DeliveryScheduledCredentialSubjectDTO.prototype, "consignor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryScheduledCredentialSubjectDTO.prototype, "batchNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => commodity_dto_1.CommodityDTO),
    __metadata("design:type", commodity_dto_1.CommodityDTO)
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
    (0, swagger_1.ApiPropertyOptional)({ isArray: true, type: () => measurement_dto_1.MeasurementDTO }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => measurement_dto_1.MeasurementDTO),
    __metadata("design:type", Array)
], DeliveryScheduledCredentialSubjectDTO.prototype, "injectionVolume", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ isArray: true, type: () => measurement_dto_1.MeasurementDTO }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => measurement_dto_1.MeasurementDTO),
    __metadata("design:type", Array)
], DeliveryScheduledCredentialSubjectDTO.prototype, "deliveryVolume", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ isArray: true, type: () => measurement_dto_1.MeasurementDTO }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => measurement_dto_1.MeasurementDTO),
    __metadata("design:type", Array)
], DeliveryScheduledCredentialSubjectDTO.prototype, "scheduledVolume", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduledCredentialSubjectDTO.prototype, "injectionStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduledCredentialSubjectDTO.prototype, "injectionEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduledCredentialSubjectDTO.prototype, "deliveryStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduledCredentialSubjectDTO.prototype, "deliveryEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryScheduledCredentialSubjectDTO.prototype, "nominationMonth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryScheduledCredentialSubjectDTO.prototype, "scheduledDate", void 0);
class DeliveryScheduledVCDTO extends credentials_1.CredentialDTO {
    credentialSubject;
}
exports.DeliveryScheduledVCDTO = DeliveryScheduledVCDTO;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeliveryScheduledCredentialSubjectDTO),
    __metadata("design:type", DeliveryScheduledCredentialSubjectDTO)
], DeliveryScheduledVCDTO.prototype, "credentialSubject", void 0);
class AGENT_DeliveryScheduledDTO {
    productId;
    gasShipmentId;
    credentialSubject;
}
exports.AGENT_DeliveryScheduledDTO = AGENT_DeliveryScheduledDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_DeliveryScheduledDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_DeliveryScheduledDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeliveryScheduledCredentialSubjectDTO),
    __metadata("design:type", DeliveryScheduledCredentialSubjectDTO)
], AGENT_DeliveryScheduledDTO.prototype, "credentialSubject", void 0);
class CORE_DeliveryScheduledDTO {
    productId;
    gasShipmentId;
    eventId;
    eventVC;
}
exports.CORE_DeliveryScheduledDTO = CORE_DeliveryScheduledDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_DeliveryScheduledDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_DeliveryScheduledDTO.prototype, "gasShipmentId", void 0);
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
    (0, class_transformer_1.Type)(() => DeliveryScheduledVCDTO),
    __metadata("design:type", DeliveryScheduledVCDTO)
], CORE_DeliveryScheduledDTO.prototype, "eventVC", void 0);
class CORE_AddScheduledVolumeDTO {
    productId;
    gasShipmentId;
    eventId;
    eventVC;
}
exports.CORE_AddScheduledVolumeDTO = CORE_AddScheduledVolumeDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_AddScheduledVolumeDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_AddScheduledVolumeDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_AddScheduledVolumeDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => credentials_1.EnvelopedVerifiableCredential),
    __metadata("design:type", credentials_1.EnvelopedVerifiableCredential)
], CORE_AddScheduledVolumeDTO.prototype, "eventVC", void 0);
