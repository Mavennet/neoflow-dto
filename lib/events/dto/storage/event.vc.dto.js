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
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const general_1 = require("../../../general");
const proof_dto_1 = require("../../../general/dto/proof.dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class StorageEventDetailsDTOBase {
    id;
    '@context';
    issuer;
    validFrom;
    proof;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StorageEventDetailsDTOBase.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], StorageEventDetailsDTOBase.prototype, "@context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => general_1.IssuerDTO),
    __metadata("design:type", general_1.IssuerDTO)
], StorageEventDetailsDTOBase.prototype, "issuer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], StorageEventDetailsDTOBase.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => proof_dto_1.ProofDTO),
    __metadata("design:type", proof_dto_1.ProofDTO)
], StorageEventDetailsDTOBase.prototype, "proof", void 0);
class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
    credentialSubject;
}
exports.AGENT_StorageEventDetailsDTO = AGENT_StorageEventDetailsDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO)
], AGENT_StorageEventDetailsDTO.prototype, "credentialSubject", void 0);
class CORE_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
    credentialSubject;
}
exports.CORE_StorageEventDetailsDTO = CORE_StorageEventDetailsDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.CORE_StorageEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.CORE_StorageEventCredentialSubjectDTO)
], CORE_StorageEventDetailsDTO.prototype, "credentialSubject", void 0);
