var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsNotEmptyObject, IsUUID, IsUrl, IsEnum, IsArray, IsDateString, ArrayMinSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TRANSFORM_TYPE } from '../../constants';
import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export class AGENT_TransformEventCredentialSubjectDTO {
}
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    IsNotEmpty(),
    IsDateString(),
    __metadata("design:type", Date)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => OrganizationDTO),
    __metadata("design:type", OrganizationDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => ProductDTO),
    __metadata("design:type", ProductDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "newProduct", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => ProductDTO),
    __metadata("design:type", ProductDTO)
], AGENT_TransformEventCredentialSubjectDTO.prototype, "consumedProducts", void 0);
export class CORE_TransformEventCredentialSubjectDTO extends AGENT_TransformEventCredentialSubjectDTO {
}
__decorate([
    IsArray(),
    ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransformEventCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransformEventCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    IsNotEmpty(),
    IsEnum(TRANSFORM_TYPE),
    __metadata("design:type", String)
], CORE_TransformEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    IsNotEmpty(),
    IsUrl(),
    __metadata("design:type", String)
], CORE_TransformEventCredentialSubjectDTO.prototype, "eventId", void 0);
