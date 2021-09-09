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
exports.CORE_StorageProductDTO = exports.AGENT_StorageProductDTO = exports.AGENT_COMPACT_StoreProductDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const event_vc_dto_1 = require("./event.vc.dto");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
const constants_1 = require("../../constants");
const swagger_1 = require("@nestjs/swagger");
class AGENT_COMPACT_StoreProductDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.STORAGE_TYPE),
    (0, class_validator_1.Validate)(o => o.eventType === constants_1.STORAGE_TYPE.STORAGE_START),
    __metadata("design:type", String)
], AGENT_COMPACT_StoreProductDTO.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_OrganizationDTO),
    __metadata("design:type", general_1.COMPACT_OrganizationDTO)
], AGENT_COMPACT_StoreProductDTO.prototype, "initiator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PlaceDTO),
    __metadata("design:type", general_1.COMPACT_PlaceDTO)
], AGENT_COMPACT_StoreProductDTO.prototype, "place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => products_1.ProductBrief),
    __metadata("design:type", products_1.ProductBrief)
], AGENT_COMPACT_StoreProductDTO.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_MeasurementDTO),
    __metadata("design:type", general_1.COMPACT_MeasurementDTO)
], AGENT_COMPACT_StoreProductDTO.prototype, "storedWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_ObservationDTO),
    __metadata("design:type", Array)
], AGENT_COMPACT_StoreProductDTO.prototype, "observation", void 0);
exports.AGENT_COMPACT_StoreProductDTO = AGENT_COMPACT_StoreProductDTO;
class AGENT_StorageProductDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.EVENT_TYPE),
    __metadata("design:type", String)
], AGENT_StorageProductDTO.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_StorageProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO)
], AGENT_StorageProductDTO.prototype, "credentialSubject", void 0);
exports.AGENT_StorageProductDTO = AGENT_StorageProductDTO;
class CORE_StorageProductDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_vc_dto_1.StorageEventVCDTO),
    __metadata("design:type", event_vc_dto_1.StorageEventVCDTO)
], CORE_StorageProductDTO.prototype, "eventVC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "txHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "txTimestamp", void 0);
exports.CORE_StorageProductDTO = CORE_StorageProductDTO;
