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
exports.AGENT_UpdateStorageProductDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("../../../general/dto");
const constants_1 = require("../../../products/constants");
class AGENT_UpdateStorageProductDTO {
    productId;
    eventId;
    revokeEventId;
    physicalSpecs;
    chemicalSpecs;
    gasSpecs;
}
exports.AGENT_UpdateStorageProductDTO = AGENT_UpdateStorageProductDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_UpdateStorageProductDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_UpdateStorageProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_UpdateStorageProductDTO.prototype, "revokeEventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.PhysicalSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category !== constants_1.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.PhysicalSpecsDTO)
], AGENT_UpdateStorageProductDTO.prototype, "physicalSpecs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.ChemicalSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category !== constants_1.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.ChemicalSpecsDTO)
], AGENT_UpdateStorageProductDTO.prototype, "chemicalSpecs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.GasSpecsDTO),
    (0, class_validator_1.ValidateIf)((o) => o.category === constants_1.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", dto_1.GasSpecsDTO)
], AGENT_UpdateStorageProductDTO.prototype, "gasSpecs", void 0);
