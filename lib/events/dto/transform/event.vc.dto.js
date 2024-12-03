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
exports.AGENT_TransformationEventDetailsDTO = exports.CORE_TransformationEventDetailsDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const proof_dto_1 = require("../../../general/dto/proof.dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const general_1 = require("../../../general");
class TransformationEventDetailsDTOBase {
    '@context';
    id;
    type;
    issuer;
    validFrom;
    proof;
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], TransformationEventDetailsDTOBase.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TransformationEventDetailsDTOBase.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], TransformationEventDetailsDTOBase.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => general_1.IssuerDTO),
    __metadata("design:type", general_1.IssuerDTO)
], TransformationEventDetailsDTOBase.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], TransformationEventDetailsDTOBase.prototype, "validFrom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => proof_dto_1.ProofDTO),
    __metadata("design:type", proof_dto_1.ProofDTO)
], TransformationEventDetailsDTOBase.prototype, "proof", void 0);
class CORE_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
    credentialSubject;
}
exports.CORE_TransformationEventDetailsDTO = CORE_TransformationEventDetailsDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.CORE_TransformationEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.CORE_TransformationEventCredentialSubjectDTO)
], CORE_TransformationEventDetailsDTO.prototype, "credentialSubject", void 0);
class AGENT_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
    credentialSubject;
}
exports.AGENT_TransformationEventDetailsDTO = AGENT_TransformationEventDetailsDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.AGENT_TransformationEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_TransformationEventCredentialSubjectDTO)
], AGENT_TransformationEventDetailsDTO.prototype, "credentialSubject", void 0);
