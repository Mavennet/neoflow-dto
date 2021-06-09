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
exports.CORE_TransferEventCredentialSubjectDTO = exports.AGENT_TransferEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
class AGENT_TransferEventCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    class_validator_1.Validate(o => (o.eventType === constants_1.EVENT_TYPE.TRANSFER_CUSTODY ||
        o.eventType === constants_1.EVENT_TYPE.TRANSFER_CUSTODY)),
    __metadata("design:type", String)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "receiver", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "portOfEntry", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "portOfDestination", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "countryOfDestination", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    class_validator_1.ValidateIf(o => o.eventType === constants_1.EVENT_TYPE.TRANSFER_CUSTODY),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "receiptLocation", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    class_validator_1.ValidateIf(o => o.eventType === constants_1.EVENT_TYPE.TRANSFER_OWNERSHIP),
    __metadata("design:type", String)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "price", void 0);
exports.AGENT_TransferEventCredentialSubjectDTO = AGENT_TransferEventCredentialSubjectDTO;
class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransferEventCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransferEventCredentialSubjectDTO.prototype, "type", void 0);
exports.CORE_TransferEventCredentialSubjectDTO = CORE_TransferEventCredentialSubjectDTO;
