var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsArray, ArrayMinSize, IsString, ValidateNested, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductVCDTO, ProductCredentialSubjectDTO } from '../../../products';
import { TransformEventVCDTO } from './event.vc.dto';
import { AGENT_TransformEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export class AGENT_TransformOutputProductDTO {
}
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], AGENT_TransformOutputProductDTO.prototype, "productId", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => ProductCredentialSubjectDTO),
    __metadata("design:type", ProductCredentialSubjectDTO)
], AGENT_TransformOutputProductDTO.prototype, "productCredentialSubject", void 0);
export class AGENT_TransformProductDTO {
}
__decorate([
    IsNotEmpty(),
    IsArray(),
    ArrayMinSize(1),
    __metadata("design:type", Array)
], AGENT_TransformProductDTO.prototype, "inputProductIds", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => AGENT_TransformOutputProductDTO),
    __metadata("design:type", Array)
], AGENT_TransformProductDTO.prototype, "outputProducts", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => AGENT_TransformEventCredentialSubjectDTO),
    __metadata("design:type", AGENT_TransformEventCredentialSubjectDTO)
], AGENT_TransformProductDTO.prototype, "eventCredentialSubject", void 0);
export class CORE_TransformOutputProductDTO {
}
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], CORE_TransformOutputProductDTO.prototype, "productId", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => ProductVCDTO),
    __metadata("design:type", ProductVCDTO)
], CORE_TransformOutputProductDTO.prototype, "productVC", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_TransformOutputProductDTO.prototype, "productVCHash", void 0);
export class CORE_TransformProductDTO {
}
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => CORE_TransformOutputProductDTO),
    __metadata("design:type", Array)
], CORE_TransformProductDTO.prototype, "outputProducts", void 0);
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "eventId", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => TransformEventVCDTO),
    __metadata("design:type", TransformEventVCDTO)
], CORE_TransformProductDTO.prototype, "eventVC", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "txHash", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "txTimestamp", void 0);
