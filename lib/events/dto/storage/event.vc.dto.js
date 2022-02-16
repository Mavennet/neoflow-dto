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
exports.CORE_StorageEventDetailsDTO = exports.AGENT_StorageEventDetailsDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const verifiableCredential_dto_1 = require("../../../general/dto/verifiableCredential.dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class StorageEventDetailsDTOBase {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StorageEventDetailsDTOBase.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], StorageEventDetailsDTOBase.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], StorageEventDetailsDTOBase.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], StorageEventDetailsDTOBase.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => verifiableCredential_dto_1.VerifiableCredentialDTO),
    __metadata("design:type", verifiableCredential_dto_1.VerifiableCredentialDTO)
], StorageEventDetailsDTOBase.prototype, "proof", void 0);
class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((o) => o.id.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], AGENT_StorageEventDetailsDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO)
], AGENT_StorageEventDetailsDTO.prototype, "credentialSubject", void 0);
exports.AGENT_StorageEventDetailsDTO = AGENT_StorageEventDetailsDTO;
class CORE_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.CORE_StorageEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.CORE_StorageEventCredentialSubjectDTO)
], CORE_StorageEventDetailsDTO.prototype, "credentialSubject", void 0);
exports.CORE_StorageEventDetailsDTO = CORE_StorageEventDetailsDTO;
