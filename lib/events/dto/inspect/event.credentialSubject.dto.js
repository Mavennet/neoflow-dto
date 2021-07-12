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
exports.CORE_InspectCredentialSubjectDTO = exports.AGENT_InspectCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
class AGENT_InspectCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_InspectCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], AGENT_InspectCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], AGENT_InspectCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], AGENT_InspectCredentialSubjectDTO.prototype, "observations", void 0);
exports.AGENT_InspectCredentialSubjectDTO = AGENT_InspectCredentialSubjectDTO;
class CORE_InspectCredentialSubjectDTO extends AGENT_InspectCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_InspectCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], CORE_InspectCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], CORE_InspectCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], CORE_InspectCredentialSubjectDTO.prototype, "product", void 0);
exports.CORE_InspectCredentialSubjectDTO = CORE_InspectCredentialSubjectDTO;
