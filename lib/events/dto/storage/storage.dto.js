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
exports.AGENT_StorageProductDTO = exports.CORE_StorageProductDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const event_vc_dto_1 = require("./event.vc.dto");
class CORE_StorageProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_vc_dto_1.CORE_StorageEventDetailsDTO),
    __metadata("design:type", event_vc_dto_1.CORE_StorageEventDetailsDTO)
], CORE_StorageProductDTO.prototype, "eventVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "txHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_StorageProductDTO.prototype, "txTimestamp", void 0);
exports.CORE_StorageProductDTO = CORE_StorageProductDTO;
class AGENT_StorageProductDTO extends CORE_StorageProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_vc_dto_1.AGENT_StorageEventDetailsDTO),
    __metadata("design:type", event_vc_dto_1.AGENT_StorageEventDetailsDTO)
], AGENT_StorageProductDTO.prototype, "eventVC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_StorageProductDTO.prototype, "productHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_StorageEventCredentialSubjectDTO)
], AGENT_StorageProductDTO.prototype, "storageCredentialSubject", void 0);
exports.AGENT_StorageProductDTO = AGENT_StorageProductDTO;
