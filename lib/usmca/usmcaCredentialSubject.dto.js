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
exports.USMCACredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const general_1 = require("../general");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const contactForm_dto_1 = require("./contactForm.dto");
const goods_dto_1 = require("./goods.dto");
class USMCACredentialSubjectDTO {
    type;
    variousImporters;
    exporterDetails;
    producerDetails;
    importerDetails;
    goods;
}
exports.USMCACredentialSubjectDTO = USMCACredentialSubjectDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Equals)(general_1.JSON_TYPE_NF.USMCA_CLAIMS),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], USMCACredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], USMCACredentialSubjectDTO.prototype, "variousImporters", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contactForm_dto_1.ContactFormDTO)
], USMCACredentialSubjectDTO.prototype, "exporterDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)({ isArray: true, type: contactForm_dto_1.ContactFormDTO }),
    __metadata("design:type", Array)
], USMCACredentialSubjectDTO.prototype, "producerDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contactForm_dto_1.ContactFormDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contactForm_dto_1.ContactFormDTO)
], USMCACredentialSubjectDTO.prototype, "importerDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => goods_dto_1.GoodsDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", goods_dto_1.GoodsDTO)
], USMCACredentialSubjectDTO.prototype, "goods", void 0);
