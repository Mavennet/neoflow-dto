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
exports.TransformEventVCDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class TransformEventVCDTO extends general_1.VerifiableCredentialDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(3),
    class_validator_1.ArrayMaxSize(3),
    class_validator_1.Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/') &&
        o['@context'].includes('https://mavennet.github.io/contexts/metal-product-EVENT-v1.0.jsonld')),
    __metadata("design:type", Array)
], TransformEventVCDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ArrayMaxSize(1),
    class_validator_1.Validate(o => o.type.includes(general_1.JSON_TYPE.VERIFIABLE_CREDENTIAL)),
    __metadata("design:type", Array)
], TransformEventVCDTO.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], TransformEventVCDTO.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => event_credentialSubject_dto_1.CORE_TransformEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.CORE_TransformEventCredentialSubjectDTO)
], TransformEventVCDTO.prototype, "credentialSubject", void 0);
exports.TransformEventVCDTO = TransformEventVCDTO;
