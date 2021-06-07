var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsOptional, IsNumber, IsString, IsBoolean, ValidateIf, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDTO } from '../../../general';
export class TransferOwnershipConfirmationDTO {
}
__decorate([
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], TransferOwnershipConfirmationDTO.prototype, "transferOwnershipRequestId", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => AddressDTO),
    __metadata("design:type", AddressDTO)
], TransferOwnershipConfirmationDTO.prototype, "portOfEntry", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => AddressDTO),
    __metadata("design:type", AddressDTO)
], TransferOwnershipConfirmationDTO.prototype, "portOfArrival", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => AddressDTO),
    __metadata("design:type", AddressDTO)
], TransferOwnershipConfirmationDTO.prototype, "portOfDestination", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], TransferOwnershipConfirmationDTO.prototype, "countryOfDestination", void 0);
__decorate([
    IsNotEmpty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], TransferOwnershipConfirmationDTO.prototype, "confirmationStatus", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], TransferOwnershipConfirmationDTO.prototype, "comment", void 0);
__decorate([
    ValidateIf(o => o.confirmationStatus === false),
    IsNotEmpty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], TransferOwnershipConfirmationDTO.prototype, "hasDocuments", void 0);
