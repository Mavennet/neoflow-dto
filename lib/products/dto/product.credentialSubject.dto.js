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
exports.ProductCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../constants");
const general_1 = require("../../general");
const product_dto_1 = require("./product.dto");
const mavennet_dto_1 = require("mavennet-dto");
const swagger_1 = require("@nestjs/swagger");
class ProductCredentialSubjectDTO extends mavennet_dto_1.ProductCredentialSubjectDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(general_1.JSON_TYPE_METAL, { each: true }),
    (0, class_validator_1.Validate)(o => o.type === [general_1.JSON_TYPE_METAL.METAL_PRODUCT]),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.ValidateIf)(o => o.product.name !== constants_1.PRODUCT_NAME.HEAT),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "HSCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.ValidateIf)(o => o.product.name === constants_1.PRODUCT_NAME.HEAT),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "heatNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => product_dto_1.ProductDTO),
    __metadata("design:type", product_dto_1.ProductDTO)
], ProductCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "grade", void 0);
exports.ProductCredentialSubjectDTO = ProductCredentialSubjectDTO;
