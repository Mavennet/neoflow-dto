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
exports.ProductVCDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const proof_dto_1 = require("../../general/dto/proof.dto");
const productCredentialSubject_dto_1 = require("./productCredentialSubject.dto");
class ProductVCDTOBase {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ProductVCDTOBase.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductVCDTOBase.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ProductVCDTOBase.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductVCDTOBase.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], ProductVCDTOBase.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => productCredentialSubject_dto_1.ProductCredentialSubjectDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", productCredentialSubject_dto_1.ProductCredentialSubjectDTO)
], ProductVCDTOBase.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => proof_dto_1.ProofDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", proof_dto_1.ProofDTO)
], ProductVCDTOBase.prototype, "proof", void 0);
class ProductVCDTO extends ProductVCDTOBase {
}
exports.ProductVCDTO = ProductVCDTO;
