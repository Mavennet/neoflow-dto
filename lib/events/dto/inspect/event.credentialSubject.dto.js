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
exports.AGENT_InspectionEventCredentialSubjectDTO = exports.CORE_InspectionEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("../../../general/dto");
const constants_1 = require("../../../products/constants");
class CORE_InspectionEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)({ require_tld: process.env.NODE_ENV !== "development" }),
    (0, class_validator_1.ValidateIf)((o) => o.productId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.AddressDTO),
    __metadata("design:type", dto_1.AddressDTO)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "geo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "eventCreator", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "producer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "certifier", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.HTS_CODE),
    __metadata("design:type", String)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "hsCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.PhysicalSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category !== constants_1.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.PhysicalSpecsDTO)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "physicalSpecs", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.ChemicalSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category !== constants_1.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.ChemicalSpecsDTO)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "chemicalSpecs", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.GasSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category === constants_1.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.GasSpecsDTO)
], CORE_InspectionEventCredentialSubjectDTO.prototype, "gasSpecs", void 0);
exports.CORE_InspectionEventCredentialSubjectDTO = CORE_InspectionEventCredentialSubjectDTO;
class AGENT_InspectionEventCredentialSubjectDTO extends CORE_InspectionEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], AGENT_InspectionEventCredentialSubjectDTO.prototype, "eventId", void 0);
exports.AGENT_InspectionEventCredentialSubjectDTO = AGENT_InspectionEventCredentialSubjectDTO;
