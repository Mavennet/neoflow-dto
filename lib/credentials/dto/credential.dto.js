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
exports.CredentialDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const issuer_dto_1 = require("../../general/dto/issuer.dto");
const class_transformer_1 = require("class-transformer");
const credentialSchema_dto_1 = require("./credentialSchema.dto");
class CredentialDTO {
    '@context';
    id;
    type;
    issuer;
    validFrom;
    validUntil;
    credentialStatus;
    credentialSchema;
}
exports.CredentialDTO = CredentialDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    (0, class_validator_1.Validate)((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2')),
    __metadata("design:type", Array)
], CredentialDTO.prototype, "@context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((object, value) => value !== undefined),
    __metadata("design:type", String)
], CredentialDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CredentialDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => issuer_dto_1.IssuerDTO),
    __metadata("design:type", issuer_dto_1.IssuerDTO)
], CredentialDTO.prototype, "issuer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CredentialDTO.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CredentialDTO.prototype, "validUntil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], CredentialDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CredentialDTO.prototype, "credentialStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => credentialSchema_dto_1.CredentialSchema),
    __metadata("design:type", credentialSchema_dto_1.CredentialSchema)
], CredentialDTO.prototype, "credentialSchema", void 0);
