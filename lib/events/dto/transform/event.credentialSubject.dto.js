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
exports.AGENT_TransformationEventCredentialSubjectDTO = exports.CORE_TransformationEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const address_dto_1 = require("../../../general/dto/address.dto");
const transformationEventType_1 = require("../../constants/transformationEventType");
class CORE_TransformationEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(transformationEventType_1.TRANSFORMATION_EVENT_TYPE),
    __metadata("design:type", String)
], CORE_TransformationEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_TransformationEventCredentialSubjectDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDTO),
    __metadata("design:type", address_dto_1.AddressDTO)
], CORE_TransformationEventCredentialSubjectDTO.prototype, "geo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_TransformationEventCredentialSubjectDTO.prototype, "eventCreator", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CORE_TransformationEventCredentialSubjectDTO.prototype, "productPredecessors", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CORE_TransformationEventCredentialSubjectDTO.prototype, "productSuccessors", void 0);
exports.CORE_TransformationEventCredentialSubjectDTO = CORE_TransformationEventCredentialSubjectDTO;
class AGENT_TransformationEventCredentialSubjectDTO extends CORE_TransformationEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_TransformationEventCredentialSubjectDTO.prototype, "eventId", void 0);
exports.AGENT_TransformationEventCredentialSubjectDTO = AGENT_TransformationEventCredentialSubjectDTO;
