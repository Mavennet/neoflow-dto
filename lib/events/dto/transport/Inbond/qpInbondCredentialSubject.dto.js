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
exports.QPInbondCredentialSubjectDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("../../../../general/dto");
const constants_1 = require("../../../../general/constants");
const product_dto_1 = require("../../../../products/dto/product.dto");
const constants_2 = require("../../../constants");
class QPInbondCredentialSubjectDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.JSON_TYPE, { each: true }),
    (0, class_validator_1.Validate)((o) => o.type === [constants_1.JSON_TYPE.INBOND]),
    __metadata("design:type", Array)
], QPInbondCredentialSubjectDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "entryId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "inBondNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "irsNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "ftzNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(constants_2.IN_BOND_TYPE),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "inBondType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.OrganizationDTO),
    __metadata("design:type", dto_1.OrganizationDTO)
], QPInbondCredentialSubjectDto.prototype, "carrier", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.OrganizationDTO),
    __metadata("design:type", dto_1.OrganizationDTO)
], QPInbondCredentialSubjectDto.prototype, "recipient", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.ParcelDeliveryDTO),
    __metadata("design:type", dto_1.ParcelDeliveryDTO)
], QPInbondCredentialSubjectDto.prototype, "shipment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "billOfLadingNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "expectedDeliveryDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "valuePerItem", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], QPInbondCredentialSubjectDto.prototype, "totalOrderValue", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => product_dto_1.ProductDTO),
    __metadata("design:type", product_dto_1.ProductDTO)
], QPInbondCredentialSubjectDto.prototype, "product", void 0);
exports.QPInbondCredentialSubjectDto = QPInbondCredentialSubjectDto;
