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
exports.AGENT_CreationEventCredentialSubjectDTO = exports.CORE_CreationEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const place_dto_1 = require("../../../general/dto/place.dto");
const swagger_1 = require("@nestjs/swagger");
class CORE_CreationEventCredentialSubjectDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)({ require_tld: process.env.NODE_ENV !== "development" }),
    __metadata("design:type", String)
], CORE_CreationEventCredentialSubjectDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_CreationEventCredentialSubjectDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => place_dto_1.PlaceDTO),
    __metadata("design:type", place_dto_1.PlaceDTO)
], CORE_CreationEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], CORE_CreationEventCredentialSubjectDTO.prototype, "eventCreator", void 0);
exports.CORE_CreationEventCredentialSubjectDTO = CORE_CreationEventCredentialSubjectDTO;
class AGENT_CreationEventCredentialSubjectDTO extends CORE_CreationEventCredentialSubjectDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_CreationEventCredentialSubjectDTO.prototype, "eventId", void 0);
exports.AGENT_CreationEventCredentialSubjectDTO = AGENT_CreationEventCredentialSubjectDTO;
