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
exports.CORE_CreateEntryNumberDTO = exports.CreateEntryNumberDTO = exports.CreateEntryNumberDTOBase = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _1 = require(".");
const traceability_dto_1 = require("@mavennet/traceability-dto");
class CreateEntryNumberDTOBase {
    productId;
    gasShipmentId;
}
exports.CreateEntryNumberDTOBase = CreateEntryNumberDTOBase;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateEntryNumberDTOBase.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateEntryNumberDTOBase.prototype, "gasShipmentId", void 0);
class CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
    credentialSubject;
    portEntry;
}
exports.CreateEntryNumberDTO = CreateEntryNumberDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => _1.EntryNumberCredentialSubjectDTO),
    __metadata("design:type", _1.EntryNumberCredentialSubjectDTO)
], CreateEntryNumberDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateEntryNumberDTO.prototype, "portEntry", void 0);
class CORE_CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
    eventId;
    eventVC;
}
exports.CORE_CreateEntryNumberDTO = CORE_CreateEntryNumberDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_CreateEntryNumberDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => traceability_dto_1.EnvelopedVerifiableCredential),
    __metadata("design:type", traceability_dto_1.EnvelopedVerifiableCredential)
], CORE_CreateEntryNumberDTO.prototype, "eventVC", void 0);
