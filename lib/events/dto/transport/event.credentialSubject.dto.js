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
exports.CORE_BillOfLadingCredentialSubjectDTO = exports.CORE_TransportEventCredentialSubjectDTO = exports.AGENT_BillOfLadingCredentialSubjectDTO = exports.AGENT_TransportEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
class AGENT_TransportEventCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    __metadata("design:type", String)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AGENT_TransportEventCredentialSubjectDTO.prototype, "trackingNumber", void 0);
exports.AGENT_TransportEventCredentialSubjectDTO = AGENT_TransportEventCredentialSubjectDTO;
class AGENT_BillOfLadingCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    __metadata("design:type", String)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "billOfLadingNumber", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "shippingDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "arrivalDate", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.MeasurementDTO),
    __metadata("design:type", general_1.MeasurementDTO)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "expectedWeight", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.MeasurementDTO),
    __metadata("design:type", Object)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "deliveredWeight", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.ParcelDeliveryDTO),
    __metadata("design:type", general_1.ParcelDeliveryDTO)
], AGENT_BillOfLadingCredentialSubjectDTO.prototype, "freight", void 0);
exports.AGENT_BillOfLadingCredentialSubjectDTO = AGENT_BillOfLadingCredentialSubjectDTO;
class CORE_TransportEventCredentialSubjectDTO extends AGENT_TransportEventCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransportEventCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransportEventCredentialSubjectDTO.prototype, "type", void 0);
exports.CORE_TransportEventCredentialSubjectDTO = CORE_TransportEventCredentialSubjectDTO;
class CORE_BillOfLadingCredentialSubjectDTO extends AGENT_BillOfLadingCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_BillOfLadingCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_BillOfLadingCredentialSubjectDTO.prototype, "type", void 0);
exports.CORE_BillOfLadingCredentialSubjectDTO = CORE_BillOfLadingCredentialSubjectDTO;
