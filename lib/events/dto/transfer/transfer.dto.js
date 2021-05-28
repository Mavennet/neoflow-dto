var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsString, IsNumber, IsUUID, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDTO } from '../../../general';
import { TransferEventVCDTO } from './event.vc.dto';
export class AGENT_TransferOwnershipDTO {
}
__decorate([
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], AGENT_TransferOwnershipDTO.prototype, "requestId", void 0);
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], AGENT_TransferOwnershipDTO.prototype, "eventId", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => AddressDTO),
    __metadata("design:type", AddressDTO)
], AGENT_TransferOwnershipDTO.prototype, "geo", void 0);
export class CORE_TransferOwnershipDTO {
}
__decorate([
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], CORE_TransferOwnershipDTO.prototype, "requestId", void 0);
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], CORE_TransferOwnershipDTO.prototype, "productId", void 0);
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], CORE_TransferOwnershipDTO.prototype, "eventId", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_TransferOwnershipDTO.prototype, "eventVCHash", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_TransferOwnershipDTO.prototype, "txHash", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_TransferOwnershipDTO.prototype, "txTimestamp", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => TransferEventVCDTO),
    __metadata("design:type", TransferEventVCDTO)
], CORE_TransferOwnershipDTO.prototype, "eventVC", void 0);
