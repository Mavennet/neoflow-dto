var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsNotEmpty, IsString, IsNumberString, IsOptional, Matches, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PlaceDTO } from '../../../general';
export class TransferCustodyRequestDTO {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], TransferCustodyRequestDTO.prototype, "productId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], TransferCustodyRequestDTO.prototype, "countryOfDestination", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], TransferCustodyRequestDTO.prototype, "portOfEntry", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], TransferCustodyRequestDTO.prototype, "portOfDestination", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], TransferCustodyRequestDTO.prototype, "receiptLocation", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    Matches(/^did:/),
    __metadata("design:type", String)
], TransferCustodyRequestDTO.prototype, "receiver", void 0);
__decorate([
    IsNotEmpty(),
    IsNumberString(),
    __metadata("design:type", Number)
], TransferCustodyRequestDTO.prototype, "weight", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], TransferCustodyRequestDTO.prototype, "unit", void 0);
__decorate([
    IsNotEmpty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], TransferCustodyRequestDTO.prototype, "hasDocuments", void 0);
