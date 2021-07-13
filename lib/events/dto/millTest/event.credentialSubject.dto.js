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
exports.CORE_MillTestCredentialSubjectDTO = exports.AGENT_MillTestCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
class AGENT_MillTestCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_MillTestCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], AGENT_MillTestCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    class_validator_1.Validate(o => o.eventType === constants_1.EVENT_TYPE.MILL_TEST_REPORT),
    __metadata("design:type", String)
], AGENT_MillTestCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AGENT_MillTestCredentialSubjectDTO.prototype, "Certifier", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_MillTestCredentialSubjectDTO.prototype, "manufacturer", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => products_1.SteelProductDTO),
    __metadata("design:type", products_1.SteelProductDTO)
], AGENT_MillTestCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.ParcelDeliveryDTO),
    __metadata("design:type", general_1.ParcelDeliveryDTO)
], AGENT_MillTestCredentialSubjectDTO.prototype, "shipment", void 0);
exports.AGENT_MillTestCredentialSubjectDTO = AGENT_MillTestCredentialSubjectDTO;
class CORE_MillTestCredentialSubjectDTO extends AGENT_MillTestCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_MillTestCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_MillTestCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_MillTestCredentialSubjectDTO.prototype, "eventId", void 0);
exports.CORE_MillTestCredentialSubjectDTO = CORE_MillTestCredentialSubjectDTO;
