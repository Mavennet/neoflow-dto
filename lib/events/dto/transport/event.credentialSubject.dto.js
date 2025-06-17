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
exports.TransportEventCredentialSubjectDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
class LocationDTO {
    type;
    street;
    locality;
    region;
    postalCode;
    country;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDTO.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDTO.prototype, "locality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDTO.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDTO.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDTO.prototype, "country", void 0);
class TransportEventCredentialSubjectDTO {
    type;
    epcList;
    bizStep;
    action;
    disposition;
    sourceList;
    destinationList;
    eventTime;
    eventId;
}
exports.TransportEventCredentialSubjectDTO = TransportEventCredentialSubjectDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: general_1.JSON_TYPE_NF }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(general_1.JSON_TYPE_NF),
    __metadata("design:type", String)
], TransportEventCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], TransportEventCredentialSubjectDTO.prototype, "epcList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportEventCredentialSubjectDTO.prototype, "bizStep", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportEventCredentialSubjectDTO.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportEventCredentialSubjectDTO.prototype, "disposition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [LocationDTO] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => LocationDTO),
    __metadata("design:type", Array)
], TransportEventCredentialSubjectDTO.prototype, "sourceList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [LocationDTO] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => LocationDTO),
    __metadata("design:type", Array)
], TransportEventCredentialSubjectDTO.prototype, "destinationList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportEventCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportEventCredentialSubjectDTO.prototype, "eventId", void 0);
