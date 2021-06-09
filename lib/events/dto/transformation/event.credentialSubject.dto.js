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
exports.CORE_TransformEventCredentialSubjectDTO = exports.AGENT_TransformEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
class AGENT_TransformEventCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.TRANSFORM_TYPE),
    __metadata("design:type", String)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "newProduct", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "consumedProducts", void 0);
exports.AGENT_TransformEventCredentialSubjectDTO = AGENT_TransformEventCredentialSubjectDTO;
class CORE_TransformEventCredentialSubjectDTO extends AGENT_TransformEventCredentialSubjectDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransformEventCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransformEventCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_TransformEventCredentialSubjectDTO.prototype, "eventId", void 0);
exports.CORE_TransformEventCredentialSubjectDTO = CORE_TransformEventCredentialSubjectDTO;
