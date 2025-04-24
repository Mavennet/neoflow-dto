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
exports.CORE_TransportProductDTO = exports.TransportProductDataDto = exports.AGENT_COMPACT_TransportEndDTO = exports.AGENT_COMPACT_TransportStartDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
const general_1 = require("../../../general");
const credentials_1 = require("../../../credentials");
class AGENT_COMPACT_TransportStartDTO {
    eventType;
    initiator;
    billOfLadingNumber;
    place;
}
exports.AGENT_COMPACT_TransportStartDTO = AGENT_COMPACT_TransportStartDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORT_EVENT_TYPE),
    (0, class_validator_1.Validate)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START),
    __metadata("design:type", String)
], AGENT_COMPACT_TransportStartDTO.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_OrganizationDTO),
    __metadata("design:type", general_1.COMPACT_OrganizationDTO)
], AGENT_COMPACT_TransportStartDTO.prototype, "initiator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_COMPACT_TransportStartDTO.prototype, "billOfLadingNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PlaceDTO),
    __metadata("design:type", general_1.COMPACT_PlaceDTO)
], AGENT_COMPACT_TransportStartDTO.prototype, "place", void 0);
class AGENT_COMPACT_TransportEndDTO {
    eventType;
    productId;
    initiator;
    billOfLadingNumber;
    shippingDate;
    arrivalDate;
    expectedWeight;
    deliveredWeight;
    originAddress;
    deliveryAddress;
}
exports.AGENT_COMPACT_TransportEndDTO = AGENT_COMPACT_TransportEndDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORT_EVENT_TYPE),
    (0, class_validator_1.Validate)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.END),
    __metadata("design:type", String)
], AGENT_COMPACT_TransportEndDTO.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_COMPACT_TransportEndDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_OrganizationDTO),
    __metadata("design:type", general_1.COMPACT_OrganizationDTO)
], AGENT_COMPACT_TransportEndDTO.prototype, "initiator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_COMPACT_TransportEndDTO.prototype, "billOfLadingNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AGENT_COMPACT_TransportEndDTO.prototype, "shippingDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AGENT_COMPACT_TransportEndDTO.prototype, "arrivalDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_MeasurementDTO),
    __metadata("design:type", general_1.COMPACT_MeasurementDTO)
], AGENT_COMPACT_TransportEndDTO.prototype, "expectedWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_MeasurementDTO),
    __metadata("design:type", general_1.COMPACT_MeasurementDTO)
], AGENT_COMPACT_TransportEndDTO.prototype, "deliveredWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PostalAddressDTO),
    __metadata("design:type", general_1.COMPACT_PostalAddressDTO)
], AGENT_COMPACT_TransportEndDTO.prototype, "originAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PostalAddressDTO),
    __metadata("design:type", general_1.COMPACT_PostalAddressDTO)
], AGENT_COMPACT_TransportEndDTO.prototype, "deliveryAddress", void 0);
class TransportProductDataDto {
    batchNumber;
    shipper;
    pipeline;
    nominationMonth;
    commodity;
}
exports.TransportProductDataDto = TransportProductDataDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportProductDataDto.prototype, "batchNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportProductDataDto.prototype, "shipper", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportProductDataDto.prototype, "pipeline", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], TransportProductDataDto.prototype, "nominationMonth", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportProductDataDto.prototype, "commodity", void 0);
class CORE_TransportProductDTO {
    productData;
    vc;
}
exports.CORE_TransportProductDTO = CORE_TransportProductDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TransportProductDataDto),
    __metadata("design:type", TransportProductDataDto)
], CORE_TransportProductDTO.prototype, "productData", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => credentials_1.EnvelopedVerifiableCredential),
    __metadata("design:type", credentials_1.EnvelopedVerifiableCredential)
], CORE_TransportProductDTO.prototype, "vc", void 0);
