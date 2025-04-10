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
exports.AGENT_DeliveryStatementDTO = exports.CORE_DeliveryStatementDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const credentials_1 = require("../../../credentials");
class CORE_DeliveryStatementDTO {
    productId;
    gasShipmentId;
    uploadFileKey;
    eventId;
    eventVC;
}
exports.CORE_DeliveryStatementDTO = CORE_DeliveryStatementDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_DeliveryStatementDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_DeliveryStatementDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CORE_DeliveryStatementDTO.prototype, "uploadFileKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_DeliveryStatementDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => credentials_1.EnvelopedVerifiableCredential),
    __metadata("design:type", credentials_1.EnvelopedVerifiableCredential)
], CORE_DeliveryStatementDTO.prototype, "eventVC", void 0);
class AGENT_DeliveryStatementDTO {
    productId;
    gasShipmentId;
    uploadFileKey;
    credentialSubject;
}
exports.AGENT_DeliveryStatementDTO = AGENT_DeliveryStatementDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_DeliveryStatementDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_DeliveryStatementDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AGENT_DeliveryStatementDTO.prototype, "uploadFileKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.DeliveryStatementCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.DeliveryStatementCredentialSubjectDTO)
], AGENT_DeliveryStatementDTO.prototype, "credentialSubject", void 0);
