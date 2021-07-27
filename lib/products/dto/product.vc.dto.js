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
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../general");
const product_credentialSubject_dto_1 = require("./product.credentialSubject.dto");
const swagger_1 = require("@nestjs/swagger");
class ProductVCDTO extends general_1.VerifiableCredentialDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(3),
    class_validator_1.ArrayMaxSize(3),
    class_validator_1.Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/') &&
        o['@context'].includes('https://mavennet.github.io/contexts/metal-product-v1.0.jsonld')),
    __metadata("design:type", Array)
], ProductVCDTO.prototype, "@context", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(2),
    class_validator_1.ArrayMaxSize(2),
    class_validator_1.Validate(o => o.type.includes(general_1.JSON_TYPE.VERIFIABLE_CREDENTIAL) &&
        o.type.includes(general_1.JSON_TYPE_METAL.METAL_PRODUCT)),
    __metadata("design:type", Array)
], ProductVCDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], ProductVCDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => product_credentialSubject_dto_1.ProductCredentialSubjectDTO),
    __metadata("design:type", product_credentialSubject_dto_1.ProductCredentialSubjectDTO)
], ProductVCDTO.prototype, "credentialSubject", void 0);
exports.ProductVCDTO = ProductVCDTO;
