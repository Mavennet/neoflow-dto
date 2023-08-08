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
exports.DeliveryTicketCredentialSubjectDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
const products_1 = require("../../../products");
class DeliveryTicketCredentialSubjectDTO {
    type;
    createdDate;
    openDate;
    closeDate;
    carrier;
    consignor;
    consignee;
    ticketControlNumber;
    batchNumber;
    notificationOfShipment;
    destination;
    product;
    observation;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)({
        ...general_1.JSON_TYPE,
        ...general_1.JSON_TYPE_NF
    }, { each: true }),
    __metadata("design:type", Array)
], DeliveryTicketCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryTicketCredentialSubjectDTO.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], DeliveryTicketCredentialSubjectDTO.prototype, "openDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryTicketCredentialSubjectDTO.prototype, "closeDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], DeliveryTicketCredentialSubjectDTO.prototype, "carrier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], DeliveryTicketCredentialSubjectDTO.prototype, "consignor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], DeliveryTicketCredentialSubjectDTO.prototype, "consignee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryTicketCredentialSubjectDTO.prototype, "ticketControlNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DeliveryTicketCredentialSubjectDTO.prototype, "batchNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryTicketCredentialSubjectDTO.prototype, "notificationOfShipment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], DeliveryTicketCredentialSubjectDTO.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => products_1.ProductDTO),
    __metadata("design:type", products_1.ProductDTO)
], DeliveryTicketCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: () => general_1.ObservationDTO }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => general_1.ObservationDTO),
    __metadata("design:type", Array)
], DeliveryTicketCredentialSubjectDTO.prototype, "observation", void 0);
exports.DeliveryTicketCredentialSubjectDTO = DeliveryTicketCredentialSubjectDTO;
