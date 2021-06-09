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
exports.TransferOwnershipRequestDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
class TransferOwnershipRequestDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TransferOwnershipRequestDTO.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], TransferOwnershipRequestDTO.prototype, "contractId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.Matches(/^did:/),
    __metadata("design:type", String)
], TransferOwnershipRequestDTO.prototype, "receiver", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Number)
], TransferOwnershipRequestDTO.prototype, "price", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], TransferOwnershipRequestDTO.prototype, "portOfEntry", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], TransferOwnershipRequestDTO.prototype, "portOfDestination", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TransferOwnershipRequestDTO.prototype, "countryOfDestination", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], TransferOwnershipRequestDTO.prototype, "hasDocuments", void 0);
exports.TransferOwnershipRequestDTO = TransferOwnershipRequestDTO;
