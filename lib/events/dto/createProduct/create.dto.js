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
exports.CORE_CreateProductDTO = exports.AGENT_CreateProductDTO = exports.AGENT_COMPACT_CreateProductDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
const productCredentialSubject_dto_1 = require("../../../products/dto/productCredentialSubject.dto");
const event_credentialSubject_1 = require("./event.credentialSubject");
const event_vc_dto_1 = require("./event.vc.dto");
class CreateProductDTOBase {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateProductDTOBase.prototype, "productId", void 0);
class AGENT_COMPACT_CreateProductDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(products_1.PRODUCT_NAME),
    __metadata("design:type", String)
], AGENT_COMPACT_CreateProductDTO.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_COMPACT_CreateProductDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_COMPACT_CreateProductDTO.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_COMPACT_CreateProductDTO.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PlaceDTO),
    __metadata("design:type", general_1.COMPACT_PlaceDTO)
], AGENT_COMPACT_CreateProductDTO.prototype, "facility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_OrganizationDTO),
    __metadata("design:type", general_1.COMPACT_OrganizationDTO)
], AGENT_COMPACT_CreateProductDTO.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_MeasurementDTO),
    __metadata("design:type", general_1.COMPACT_MeasurementDTO)
], AGENT_COMPACT_CreateProductDTO.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_MeasurementDTO),
    __metadata("design:type", general_1.COMPACT_MeasurementDTO)
], AGENT_COMPACT_CreateProductDTO.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_MeasurementDTO),
    __metadata("design:type", general_1.COMPACT_MeasurementDTO)
], AGENT_COMPACT_CreateProductDTO.prototype, "length", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [general_1.COMPACT_ObservationDTO] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_ObservationDTO),
    __metadata("design:type", Array)
], AGENT_COMPACT_CreateProductDTO.prototype, "observation", void 0);
exports.AGENT_COMPACT_CreateProductDTO = AGENT_COMPACT_CreateProductDTO;
class AGENT_CreateProductDTO extends CreateProductDTOBase {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => productCredentialSubject_dto_1.ProductCredentialSubjectDTO),
    __metadata("design:type", productCredentialSubject_dto_1.ProductCredentialSubjectDTO)
], AGENT_CreateProductDTO.prototype, "productCredentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_1.AGENT_CreationEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_1.AGENT_CreationEventCredentialSubjectDTO)
], AGENT_CreateProductDTO.prototype, "eventCredentialSubject", void 0);
exports.AGENT_CreateProductDTO = AGENT_CreateProductDTO;
class CORE_CreateProductDTO extends CreateProductDTOBase {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => products_1.ProductVCDTO),
    __metadata("design:type", products_1.ProductVCDTO)
], CORE_CreateProductDTO.prototype, "productVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "productVCHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_vc_dto_1.CreationEventDetailsDTO),
    __metadata("design:type", event_vc_dto_1.CreationEventDetailsDTO)
], CORE_CreateProductDTO.prototype, "eventVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "txHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "txTimestamp", void 0);
exports.CORE_CreateProductDTO = CORE_CreateProductDTO;
