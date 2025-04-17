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
exports.CORE_USMCADTO = exports.AGENT_USMCADTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const usmcaCredentialSubject_dto_1 = require("./usmcaCredentialSubject.dto");
const general_1 = require("../general");
const contactForm_dto_1 = require("./contactForm.dto");
const goods_dto_1 = require("./goods.dto");
const credentials_1 = require("../credentials");
class AGENT_USMCADTO {
    validFrom;
    validUntil;
    issuer;
    certifierDetails;
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
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contactForm_dto_1.ContactFormDTO)
], AGENT_USMCADTO.prototype, "certifierDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => usmcaCredentialSubject_dto_1.USMCACredentialSubjectDTO),
    __metadata("design:type", usmcaCredentialSubject_dto_1.USMCACredentialSubjectDTO)
], AGENT_USMCADTO.prototype, "credentialSubject", void 0);
class CORE_USMCADTO {
    certifierDetails;
    exporterDetails;
    producerDetails;
    importerDetails;
    goods;
    variousProducers;
    validFrom;
    validUntil;
    certificationId;
    certificationVC;
}
exports.CORE_USMCADTO = CORE_USMCADTO;
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contactForm_dto_1.ContactFormDTO)
], CORE_USMCADTO.prototype, "certifierDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contactForm_dto_1.ContactFormDTO)
], CORE_USMCADTO.prototype, "exporterDetails", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contactForm_dto_1.ContactFormDTO)
], CORE_USMCADTO.prototype, "producerDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contactForm_dto_1.ContactFormDTO)
], CORE_USMCADTO.prototype, "importerDetails", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => goods_dto_1.GoodsDTO),
    (0, swagger_1.ApiProperty)({ isArray: true, type: goods_dto_1.GoodsDTO }),
    __metadata("design:type", Array)
], CORE_USMCADTO.prototype, "goods", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CORE_USMCADTO.prototype, "variousProducers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CORE_USMCADTO.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CORE_USMCADTO.prototype, "validUntil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CORE_USMCADTO.prototype, "certificationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => credentials_1.EnvelopedVerifiableCredential),
    __metadata("design:type", credentials_1.EnvelopedVerifiableCredential)
], CORE_USMCADTO.prototype, "certificationVC", void 0);
