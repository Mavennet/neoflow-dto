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
exports.OGBillOfLadingCredentialSubjectDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../../general/constants");
const dto_1 = require("../../../../general/dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class OGBillOfLadingCredentialSubjectDTO {
    type;
    billOfLading;
    shippingDate;
    arrivalDate;
    valuePerItem;
    totalOrderValue;
    freightChargeTerms;
    batchNumber;
    openingVolume;
    closingVolume;
    observation;
}
exports.OGBillOfLadingCredentialSubjectDTO = OGBillOfLadingCredentialSubjectDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Equals)(constants_1.JSON_TYPE_NF.OG_BILL_OF_LADING),
    __metadata("design:type", String)
], OGBillOfLadingCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.BillOfLadingCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.BillOfLadingCredentialSubjectDTO)
], OGBillOfLadingCredentialSubjectDTO.prototype, "billOfLading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], OGBillOfLadingCredentialSubjectDTO.prototype, "shippingDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], OGBillOfLadingCredentialSubjectDTO.prototype, "arrivalDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], OGBillOfLadingCredentialSubjectDTO.prototype, "valuePerItem", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], OGBillOfLadingCredentialSubjectDTO.prototype, "totalOrderValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OGBillOfLadingCredentialSubjectDTO.prototype, "freightChargeTerms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OGBillOfLadingCredentialSubjectDTO.prototype, "batchNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.MeasurementDTO),
    __metadata("design:type", dto_1.MeasurementDTO)
], OGBillOfLadingCredentialSubjectDTO.prototype, "openingVolume", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => dto_1.MeasurementDTO),
    __metadata("design:type", dto_1.MeasurementDTO)
], OGBillOfLadingCredentialSubjectDTO.prototype, "closingVolume", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ isArray: true, type: () => dto_1.ObservationDTO }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => dto_1.ObservationDTO),
    __metadata("design:type", Array)
], OGBillOfLadingCredentialSubjectDTO.prototype, "observation", void 0);
