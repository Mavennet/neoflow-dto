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
exports.CreationEventDetailsDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const proof_dto_1 = require("../../../general/dto/proof.dto");
const event_credentialSubject_1 = require("./event.credentialSubject");
class CreationEventDetailsDTOBase {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CreationEventDetailsDTOBase.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(?:https:\/\/api-)(?:staging|prod)\..+\.neoflow\.energy$/),
    __metadata("design:type", String)
], CreationEventDetailsDTOBase.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_validator_1.ValidateIf)((o) => o.type.includes('VerifiableCredential') && o.type.includes('CreationEventCredential')),
    __metadata("design:type", Array)
], CreationEventDetailsDTOBase.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CreationEventDetailsDTOBase.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreationEventDetailsDTOBase.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_1.CORE_CreationEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_1.CORE_CreationEventCredentialSubjectDTO)
], CreationEventDetailsDTOBase.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => proof_dto_1.ProofDTO),
    __metadata("design:type", proof_dto_1.ProofDTO)
], CreationEventDetailsDTOBase.prototype, "proof", void 0);
class CreationEventDetailsDTO extends CreationEventDetailsDTOBase {
}
exports.CreationEventDetailsDTO = CreationEventDetailsDTO;
