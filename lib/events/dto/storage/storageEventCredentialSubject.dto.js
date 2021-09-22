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
exports.AGENT_StorageEventCredentialSubjectDTO = exports.CORE_StorageEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("../../../general/dto");
const constants_1 = require("../../constants");
const constants_2 = require("../../../products/constants");
class CORE_StorageEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.STORAGE_EVENT_TYPE),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.AddressDTO),
    __metadata("design:type", dto_1.AddressDTO)
], CORE_StorageEventCredentialSubjectDTO.prototype, "geo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "eventCreator", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "volume", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.STORAGE_EVENT_TYPE.START),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageEventCredentialSubjectDTO.prototype, "uom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.AddressDTO),
    __metadata("design:type", dto_1.AddressDTO)
], CORE_StorageEventCredentialSubjectDTO.prototype, "tankLocation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.PhysicalSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.PhysicalSpecsDTO)
], CORE_StorageEventCredentialSubjectDTO.prototype, "physicalSpecs", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.ChemicalSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.ChemicalSpecsDTO)
], CORE_StorageEventCredentialSubjectDTO.prototype, "chemicalSpecs", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.GasSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category === constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.GasSpecsDTO)
], CORE_StorageEventCredentialSubjectDTO.prototype, "gasSpecs", void 0);
exports.CORE_StorageEventCredentialSubjectDTO = CORE_StorageEventCredentialSubjectDTO;
class AGENT_StorageEventCredentialSubjectDTO extends CORE_StorageEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_StorageEventCredentialSubjectDTO.prototype, "productId", void 0);
exports.AGENT_StorageEventCredentialSubjectDTO = AGENT_StorageEventCredentialSubjectDTO;
