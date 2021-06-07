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
exports.ProductDTO = void 0;
const class_validator_1 = require("class-validator");
const mavennet_dto_1 = require("mavennet-dto");
const constants_1 = require("../constants");
class ProductDTO extends mavennet_dto_1.ProductDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.PRODUCT_NAME),
    __metadata("design:type", String)
], ProductDTO.prototype, "name", void 0);
exports.ProductDTO = ProductDTO;
