var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsNotEmpty, IsString, IsNumber, IsNumberString, IsOptional } from 'class-validator';
export class TransferOwnershipRequestDTO {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], TransferOwnershipRequestDTO.prototype, "productId", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    __metadata("design:type", Number)
], TransferOwnershipRequestDTO.prototype, "contractId", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], TransferOwnershipRequestDTO.prototype, "receiver", void 0);
__decorate([
    IsNotEmpty(),
    IsNumberString(),
    __metadata("design:type", Number)
], TransferOwnershipRequestDTO.prototype, "price", void 0);
__decorate([
    IsNotEmpty(),
    IsNumberString(),
    __metadata("design:type", Number)
], TransferOwnershipRequestDTO.prototype, "weight", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], TransferOwnershipRequestDTO.prototype, "unit", void 0);
__decorate([
    IsNotEmpty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], TransferOwnershipRequestDTO.prototype, "hasDocuments", void 0);
