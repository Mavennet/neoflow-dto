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
exports.PropertyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
class PropertyDTO {
    type;
    identifier;
    name;
    description;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.Validate)((o) => o.type.includes(constants_1.JSON_TYPE_NF.MECHANICAL_PROPERTY) ||
        o.type.includes(constants_1.JSON_TYPE_NF.CHEMICAL_PROPERTY) ||
        o.type.includes(constants_1.JSON_TYPE_NF.GAS_PROPERTY)),
    __metadata("design:type", Array)
], PropertyDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)({
        ...constants_1.MECHANICAL_PROPERTY_TYPE,
        ...constants_1.CHEMICAL_PROPERTY_TYPE,
        ...constants_1.GAS_PROPERTY_TYPE
    }),
    __metadata("design:type", String)
], PropertyDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "description", void 0);
exports.PropertyDTO = PropertyDTO;
