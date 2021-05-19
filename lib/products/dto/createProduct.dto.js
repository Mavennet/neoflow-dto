var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsString, ValidateNested, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductVCDTO } from './product.vc.dto';
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto';
import { EventCreateVCDTO, AGENT_EventCreateCredentialSubjectDTO } from '../../events';
export class AGENT_CreateProductDTO {
}
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], AGENT_CreateProductDTO.prototype, "productId", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => ProductCredentialSubjectDTO),
    __metadata("design:type", ProductCredentialSubjectDTO)
], AGENT_CreateProductDTO.prototype, "productCredentialSubject", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => AGENT_EventCreateCredentialSubjectDTO),
    __metadata("design:type", AGENT_EventCreateCredentialSubjectDTO)
], AGENT_CreateProductDTO.prototype, "eventCredentialSubject", void 0);
export class CORE_CreateProductDTO {
}
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "productId", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => ProductVCDTO),
    __metadata("design:type", ProductVCDTO)
], CORE_CreateProductDTO.prototype, "productVC", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "productVCHash", void 0);
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "eventId", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => EventCreateVCDTO),
    __metadata("design:type", EventCreateVCDTO)
], CORE_CreateProductDTO.prototype, "eventVC", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "txHash", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "txTimestamp", void 0);
