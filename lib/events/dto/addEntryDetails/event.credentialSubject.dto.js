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
exports.CORE_AddEntryDetailsCredentialSubjectDTO = exports.AGENT_AddEntryDetailsCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
const mavennet_dto_1 = require("mavennet-dto");
class AGENT_AddEntryDetailsCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "portOfEntry", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "carrier", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "recipient", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "portOfDestination", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => mavennet_dto_1.ParcelDeliveryDTO),
    __metadata("design:type", mavennet_dto_1.ParcelDeliveryDTO)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "shipment", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "transactionNumber", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "expectedDeliveryDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "valuePerItem", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "totalOrderValue", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], AGENT_AddEntryDetailsCredentialSubjectDTO.prototype, "product", void 0);
exports.AGENT_AddEntryDetailsCredentialSubjectDTO = AGENT_AddEntryDetailsCredentialSubjectDTO;
class CORE_AddEntryDetailsCredentialSubjectDTO extends AGENT_AddEntryDetailsCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_AddEntryDetailsCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_AddEntryDetailsCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_AddEntryDetailsCredentialSubjectDTO.prototype, "productId", void 0);
exports.CORE_AddEntryDetailsCredentialSubjectDTO = CORE_AddEntryDetailsCredentialSubjectDTO;
