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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../general/constants");
const dto_1 = require("../../general/dto");
const constants_2 = require("../constants");
class ProductDTOBase {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.JSON_TYPE, { each: true }),
    (0, class_validator_1.Validate)((o) => o.type === [constants_1.JSON_TYPE.PRODUCT]),
    __metadata("design:type", Array)
], ProductDTOBase.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.OrganizationDTO),
    __metadata("design:type", typeof (_a = typeof dto_1.OrganizationDTO !== "undefined" && dto_1.OrganizationDTO) === "function" ? _a : Object)
], ProductDTOBase.prototype, "manufacturer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_2.PRODUCT_NAME),
    __metadata("design:type", String)
], ProductDTOBase.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.name === constants_2.PRODUCT_NAME.CRUDE_OIL),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_2.CRUDE_STREAM),
    __metadata("design:type", String)
], ProductDTOBase.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductDTOBase.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.MeasurementDTO),
    __metadata("design:type", typeof (_b = typeof dto_1.MeasurementDTO !== "undefined" && dto_1.MeasurementDTO) === "function" ? _b : Object)
], ProductDTOBase.prototype, "sizeOrAmount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.MeasurementDTO),
    __metadata("design:type", typeof (_c = typeof dto_1.MeasurementDTO !== "undefined" && dto_1.MeasurementDTO) === "function" ? _c : Object)
], ProductDTOBase.prototype, "wight", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductDTOBase.prototype, "sku", void 0);
class ProductDTO extends ProductDTOBase {
}
exports.ProductDTO = ProductDTO;
