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
exports.TransferEventDetailsDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const verifiableCredential_dto_1 = require("../../general/dto/verifiableCredential.dto");
const transferEventCredentialSubject_dto_1 = require("./transferEventCredentialSubject.dto");
class TransferEventDetailsDTO {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(3),
    (0, class_validator_1.ArrayMaxSize)(3),
    (0, class_validator_1.ValidateIf)((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/') &&
        o['@context'].includes('https://mavennet.github.io/contexts/v1.jsonld')),
    __metadata("design:type", Array)
], TransferEventDetailsDTO.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.id.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], TransferEventDetailsDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_validator_1.ValidateIf)((o) => o.type.includes('VerifiableCredential') && o.type.includes('TransferEventCredential')),
    __metadata("design:type", Array)
], TransferEventDetailsDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], TransferEventDetailsDTO.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], TransferEventDetailsDTO.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => transferEventCredentialSubject_dto_1.TransferEventCredentialSubjectDTO),
    __metadata("design:type", transferEventCredentialSubject_dto_1.TransferEventCredentialSubjectDTO)
], TransferEventDetailsDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => verifiableCredential_dto_1.VerifiableCredentialDTO),
    __metadata("design:type", verifiableCredential_dto_1.VerifiableCredentialDTO)
], TransferEventDetailsDTO.prototype, "proof", void 0);
exports.TransferEventDetailsDTO = TransferEventDetailsDTO;
