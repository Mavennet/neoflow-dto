var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsArray, IsNumber, IsString, IsDateString, ArrayMinSize, ValidateNested, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { EVENT_TYPE, PlaceDTO, MeasurementDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export class AGENT_TransferEventCredentialSubjectDTO {
}
__decorate([
    IsNotEmpty(),
    IsEnum(EVENT_TYPE),
    __metadata("design:type", String)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    IsNotEmpty(),
    IsDateString(),
    __metadata("design:type", Date)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "eventTime", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => ProductDTO),
    __metadata("design:type", ProductDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => OrganizationDTO),
    __metadata("design:type", OrganizationDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "initiator", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => OrganizationDTO),
    __metadata("design:type", OrganizationDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "receiver", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "portOfEntry", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PlaceDTO),
    ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY),
    __metadata("design:type", PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "portOfArrival", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "portOfDestination", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "countryOfDestination", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PlaceDTO),
    ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY),
    __metadata("design:type", PlaceDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "recipientLocation", void 0);
__decorate([
    IsNotEmpty(),
    IsNumber(),
    ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_OWNERSHIP),
    __metadata("design:type", Number)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "price", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => MeasurementDTO),
    ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY),
    __metadata("design:type", MeasurementDTO)
], AGENT_TransferEventCredentialSubjectDTO.prototype, "transferedWeight", void 0);
export class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
}
__decorate([
    IsArray(),
    ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransferEventCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_TransferEventCredentialSubjectDTO.prototype, "type", void 0);
