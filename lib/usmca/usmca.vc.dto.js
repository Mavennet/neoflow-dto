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
exports.AGENT_USMCADTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const usmcaCredentialSubject_dto_1 = require("./usmcaCredentialSubject.dto");
const general_1 = require("../general");
class AGENT_USMCADTO {
    validFrom;
    validUntil;
    issuer;
    credentialSubject;
}
exports.AGENT_USMCADTO = AGENT_USMCADTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], AGENT_USMCADTO.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], AGENT_USMCADTO.prototype, "validUntil", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.IssuerDTO),
    __metadata("design:type", general_1.IssuerDTO)
], AGENT_USMCADTO.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => usmcaCredentialSubject_dto_1.USMCACredentialSubjectDTO),
    __metadata("design:type", usmcaCredentialSubject_dto_1.USMCACredentialSubjectDTO)
], AGENT_USMCADTO.prototype, "credentialSubject", void 0);
