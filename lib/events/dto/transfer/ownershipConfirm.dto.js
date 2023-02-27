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
exports.TransferOwnershipConfirmationDTO = exports.COMPACT_TransferOwnershipConfirmationDTO = void 0;
const class_validator_1 = require("class-validator");
const general_1 = require("../../../general");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class COMPACT_TransferOwnershipConfirmationDTO {
    transferOwnershipRequestId;
    portOfEntry;
    portOfDestination;
    countryOfDestination;
    confirmationStatus;
    comment;
    hasDocuments;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], COMPACT_TransferOwnershipConfirmationDTO.prototype, "transferOwnershipRequestId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PlaceDTO),
    __metadata("design:type", general_1.COMPACT_PlaceDTO)
], COMPACT_TransferOwnershipConfirmationDTO.prototype, "portOfEntry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PlaceDTO),
    __metadata("design:type", general_1.COMPACT_PlaceDTO)
], COMPACT_TransferOwnershipConfirmationDTO.prototype, "portOfDestination", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], COMPACT_TransferOwnershipConfirmationDTO.prototype, "countryOfDestination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], COMPACT_TransferOwnershipConfirmationDTO.prototype, "confirmationStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], COMPACT_TransferOwnershipConfirmationDTO.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)(o => o.confirmationStatus === false),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], COMPACT_TransferOwnershipConfirmationDTO.prototype, "hasDocuments", void 0);
exports.COMPACT_TransferOwnershipConfirmationDTO = COMPACT_TransferOwnershipConfirmationDTO;
class TransferOwnershipConfirmationDTO {
    transferOwnershipRequestId;
    portOfEntry;
    portOfArrival;
    portOfDestination;
    countryOfDestination;
    confirmationStatus;
    comment;
    hasDocuments;
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransferOwnershipConfirmationDTO.prototype, "transferOwnershipRequestId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], TransferOwnershipConfirmationDTO.prototype, "portOfEntry", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], TransferOwnershipConfirmationDTO.prototype, "portOfArrival", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], TransferOwnershipConfirmationDTO.prototype, "portOfDestination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransferOwnershipConfirmationDTO.prototype, "countryOfDestination", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TransferOwnershipConfirmationDTO.prototype, "confirmationStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransferOwnershipConfirmationDTO.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.confirmationStatus === false),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TransferOwnershipConfirmationDTO.prototype, "hasDocuments", void 0);
exports.TransferOwnershipConfirmationDTO = TransferOwnershipConfirmationDTO;
