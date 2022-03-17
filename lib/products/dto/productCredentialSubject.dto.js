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
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("../../general/dto");
const constants_1 = require("../../general/constants");
const product_dto_1 = require("./product.dto");
const constants_2 = require("../constants");
class ProductCredentialSubjectDTOBase {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.JSON_TYPE, { each: true }),
    (0, class_validator_1.Validate)((o) => o.type === [constants_1.JSON_TYPE.CRUDE_OIL_PRODUCT] || o.type === [constants_1.JSON_TYPE.NATURAL_GAS_PRODUCT]),
    (0, swagger_1.ApiProperty)({ enum: constants_1.JSON_TYPE, isArray: true }),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTOBase.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_2.HTS_CODE),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTOBase.prototype, "HSCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTOBase.prototype, "UWI", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTOBase.prototype, "productionDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.PlaceDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", dto_1.PlaceDTO)
], ProductCredentialSubjectDTOBase.prototype, "facility", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => product_dto_1.ProductDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", product_dto_1.ProductDTO)
], ProductCredentialSubjectDTOBase.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => dto_1.ObservationDTO),
    (0, swagger_1.ApiProperty)({ isArray: true }),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTOBase.prototype, "observation", void 0);
class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
}
exports.ProductCredentialSubjectDTO = ProductCredentialSubjectDTO;
