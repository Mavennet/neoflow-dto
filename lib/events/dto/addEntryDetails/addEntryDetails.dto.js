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
exports.CORE_AddEntryDetailsDTO = exports.AGENT_AddEntryDetailsDTO = exports.AGENT_FLAT_AddEntryDetailsDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_vc_dto_1 = require("./event.vc.dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
const swagger_1 = require("@nestjs/swagger");
class AGENT_FLAT_AddEntryDetailsDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "transactionNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "expectedDeliveryDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.FLAT_PlaceDTO),
    __metadata("design:type", general_1.FLAT_PlaceDTO)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "portOfEntry", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.FLAT_PlaceDTO),
    __metadata("design:type", general_1.FLAT_PlaceDTO)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "portOfDestination", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.FLAT_OrganizationDTO),
    __metadata("design:type", general_1.FLAT_OrganizationDTO)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "carrier", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.FLAT_OrganizationDTO),
    __metadata("design:type", general_1.FLAT_OrganizationDTO)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "recipient", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.FLAT_PostalAddressDTO),
    __metadata("design:type", general_1.FLAT_PostalAddressDTO)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "originAddress", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.FLAT_PostalAddressDTO),
    __metadata("design:type", general_1.FLAT_PostalAddressDTO)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "deliveryAddress", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "valuePerItem", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "totalOrderValue", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => products_1.ProductBrief),
    __metadata("design:type", products_1.ProductBrief)
], AGENT_FLAT_AddEntryDetailsDTO.prototype, "product", void 0);
exports.AGENT_FLAT_AddEntryDetailsDTO = AGENT_FLAT_AddEntryDetailsDTO;
class AGENT_AddEntryDetailsDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_AddEntryDetailsDTO.prototype, "productId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_AddEntryDetailsDTO.prototype, "eventId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => event_credentialSubject_dto_1.AGENT_AddEntryDetailsCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_AddEntryDetailsCredentialSubjectDTO)
], AGENT_AddEntryDetailsDTO.prototype, "addEntryDetailsCredentialSubject", void 0);
exports.AGENT_AddEntryDetailsDTO = AGENT_AddEntryDetailsDTO;
class CORE_AddEntryDetailsDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_AddEntryDetailsDTO.prototype, "productId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_AddEntryDetailsDTO.prototype, "eventId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => event_vc_dto_1.AddEntryDetailsVCDTO),
    __metadata("design:type", event_vc_dto_1.AddEntryDetailsVCDTO)
], CORE_AddEntryDetailsDTO.prototype, "addEntryDetailsVC", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_AddEntryDetailsDTO.prototype, "eventVCHash", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_AddEntryDetailsDTO.prototype, "txHash", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_AddEntryDetailsDTO.prototype, "txTimestamp", void 0);
exports.CORE_AddEntryDetailsDTO = CORE_AddEntryDetailsDTO;
