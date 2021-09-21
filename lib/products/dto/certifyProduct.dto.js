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
exports.CertifyProductDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../constants");
const class_transformer_1 = require("class-transformer");
const certifier_dto_1 = require("./certifier.dto");
class CertifyProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CertifyProductDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => certifier_dto_1.CertifierDTO),
    __metadata("design:type", certifier_dto_1.CertifierDTO)
], CertifyProductDTO.prototype, "certifier", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => certifier_dto_1.CertifierDTO),
    __metadata("design:type", certifier_dto_1.CertifierDTO)
], CertifyProductDTO.prototype, "exporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => certifier_dto_1.CertifierDTO),
    __metadata("design:type", certifier_dto_1.CertifierDTO)
], CertifyProductDTO.prototype, "producer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => certifier_dto_1.CertifierDTO),
    __metadata("design:type", certifier_dto_1.CertifierDTO)
], CertifyProductDTO.prototype, "importer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CertifyProductDTO.prototype, "htsCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(constants_1.ORIGIN_CRITERION),
    __metadata("design:type", String)
], CertifyProductDTO.prototype, "originCriterion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CertifyProductDTO.prototype, "blanketPeriod", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CertifyProductDTO.prototype, "authName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CertifyProductDTO.prototype, "authDate", void 0);
exports.CertifyProductDTO = CertifyProductDTO;
