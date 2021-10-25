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
exports.AGENT_TransferEventCredentialSubjectDTO = exports.CORE_TransferEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const address_dto_1 = require("../../../general/dto/address.dto");
const constants_1 = require("../../constants");
class CORE_TransferEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)({ require_tld: process.env.NODE_ENV !== "development" }),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSFER_EVENT_TYPE),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDTO),
    __metadata("design:type", address_dto_1.AddressDTO)
], CORE_TransferEventCredentialSubjectDTO.prototype, "geo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "eventCreator", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "sender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "receiver", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDTO),
    __metadata("design:type", address_dto_1.AddressDTO)
], CORE_TransferEventCredentialSubjectDTO.prototype, "portOfArrival", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDTO),
    __metadata("design:type", address_dto_1.AddressDTO)
], CORE_TransferEventCredentialSubjectDTO.prototype, "portOfDestination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_TransferEventCredentialSubjectDTO.prototype, "countryOfDestination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDTO),
    __metadata("design:type", address_dto_1.AddressDTO)
], CORE_TransferEventCredentialSubjectDTO.prototype, "receiptLocation", void 0);
exports.CORE_TransferEventCredentialSubjectDTO = CORE_TransferEventCredentialSubjectDTO;
class AGENT_TransferEventCredentialSubjectDTO extends CORE_TransferEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDTO),
    __metadata("design:type", address_dto_1.AddressDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "portOfEntry", void 0);
exports.AGENT_TransferEventCredentialSubjectDTO = AGENT_TransferEventCredentialSubjectDTO;
