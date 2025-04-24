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
exports.DraftGoodsDTO = exports.GoodsDTO = void 0;
const class_validator_1 = require("class-validator");
const general_1 = require("../general");
const swagger_1 = require("@nestjs/swagger");
const originCriteria_1 = require("./constants/originCriteria");
class GoodsDTO {
    type;
    streamType;
    ch27TariffClassification;
    ch99TariffClassification;
    originCriteria;
    countryOfOrigin;
}
exports.GoodsDTO = GoodsDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Equals)(general_1.JSON_TYPE.USMCA_PRODUCT),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsDTO.prototype, "streamType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsDTO.prototype, "ch27TariffClassification", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsDTO.prototype, "ch99TariffClassification", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(originCriteria_1.ORIGIN_CRITERIA),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsDTO.prototype, "originCriteria", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GoodsDTO.prototype, "countryOfOrigin", void 0);
class DraftGoodsDTO {
    type;
    streamType;
    ch27TariffClassification;
    ch99TariffClassification;
    originCriteria;
    countryOfOrigin;
}
exports.DraftGoodsDTO = DraftGoodsDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], DraftGoodsDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], DraftGoodsDTO.prototype, "streamType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], DraftGoodsDTO.prototype, "ch27TariffClassification", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], DraftGoodsDTO.prototype, "ch99TariffClassification", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false, enum: originCriteria_1.ORIGIN_CRITERIA, type: 'string' }),
    __metadata("design:type", String)
], DraftGoodsDTO.prototype, "originCriteria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], DraftGoodsDTO.prototype, "countryOfOrigin", void 0);
