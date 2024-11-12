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
exports.CORE_AdvanceManifestDTO_OIL = exports.CORE_AdvanceManifestDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const credentials_1 = require("../credentials");
const class_transformer_1 = require("class-transformer");
const advanceManifest_vc_dto_1 = require("./advanceManifest.vc.dto");
class CORE_AdvanceManifestDTO {
    eventId;
    eventVC;
}
exports.CORE_AdvanceManifestDTO = CORE_AdvanceManifestDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_AdvanceManifestDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => credentials_1.EnvelopedVerifiableCredential),
    __metadata("design:type", credentials_1.EnvelopedVerifiableCredential)
], CORE_AdvanceManifestDTO.prototype, "eventVC", void 0);
class CORE_AdvanceManifestDTO_OIL {
    eventId;
    eventVC;
}
exports.CORE_AdvanceManifestDTO_OIL = CORE_AdvanceManifestDTO_OIL;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_AdvanceManifestDTO_OIL.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => advanceManifest_vc_dto_1.AdvanceManifestVCDTO),
    __metadata("design:type", advanceManifest_vc_dto_1.AdvanceManifestVCDTO)
], CORE_AdvanceManifestDTO_OIL.prototype, "eventVC", void 0);
