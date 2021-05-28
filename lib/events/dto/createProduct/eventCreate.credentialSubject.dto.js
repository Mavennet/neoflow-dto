var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsUUID, IsUrl, IsString, ValidateNested, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDTO } from '../../../general';
class EventCreateCredentialSubjectDTOBase {
}
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], EventCreateCredentialSubjectDTOBase.prototype, "description", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => AddressDTO),
    __metadata("design:type", AddressDTO)
], EventCreateCredentialSubjectDTOBase.prototype, "geo", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    Matches(/^did:/),
    __metadata("design:type", String)
], EventCreateCredentialSubjectDTOBase.prototype, "eventCreator", void 0);
export class AGENT_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
}
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], AGENT_EventCreateCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    IsNotEmpty(),
    IsUUID(),
    __metadata("design:type", String)
], AGENT_EventCreateCredentialSubjectDTO.prototype, "productId", void 0);
export class CORE_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
}
__decorate([
    IsNotEmpty(),
    IsUrl(),
    __metadata("design:type", String)
], CORE_EventCreateCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    IsNotEmpty(),
    IsUrl(),
    __metadata("design:type", String)
], CORE_EventCreateCredentialSubjectDTO.prototype, "productId", void 0);
