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
exports.CORE_DeliveryTicketResponseDto = exports.DELIVERY_TICKET_STATUS = exports.AGENT_DeliveryTicketDTO = exports.CORE_DeliveryTicketDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const credentials_1 = require("../../../credentials");
const general_1 = require("../../../general");
class CORE_DeliveryTicketDTO {
    productId;
    gasShipmentId;
    uploadFileKey;
    eventVC;
}
exports.CORE_DeliveryTicketDTO = CORE_DeliveryTicketDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_DeliveryTicketDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_DeliveryTicketDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CORE_DeliveryTicketDTO.prototype, "uploadFileKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.WrappedEnvelopedVCDTO),
    __metadata("design:type", general_1.WrappedEnvelopedVCDTO)
], CORE_DeliveryTicketDTO.prototype, "eventVC", void 0);
class AGENT_DeliveryTicketDTO {
    productId;
    workflowId;
    gasShipmentId;
    uploadFileKey;
    credentialSubject;
}
exports.AGENT_DeliveryTicketDTO = AGENT_DeliveryTicketDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.gasShipmentId || o.productId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_DeliveryTicketDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AGENT_DeliveryTicketDTO.prototype, "workflowId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.productId || o.gasShipmentId),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_DeliveryTicketDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AGENT_DeliveryTicketDTO.prototype, "uploadFileKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.DeliveryTicketCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.DeliveryTicketCredentialSubjectDTO)
], AGENT_DeliveryTicketDTO.prototype, "credentialSubject", void 0);
var DELIVERY_TICKET_STATUS;
(function (DELIVERY_TICKET_STATUS) {
    DELIVERY_TICKET_STATUS["SUCCESS"] = "SUCCESS";
    DELIVERY_TICKET_STATUS["DUPLICATE"] = "DUPLICATE";
})(DELIVERY_TICKET_STATUS || (exports.DELIVERY_TICKET_STATUS = DELIVERY_TICKET_STATUS = {}));
class CORE_DeliveryTicketResponseDto {
    deliveryTicketStatus;
    eventVC;
}
exports.CORE_DeliveryTicketResponseDto = CORE_DeliveryTicketResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", String)
], CORE_DeliveryTicketResponseDto.prototype, "deliveryTicketStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => credentials_1.EnvelopedVerifiableCredential),
    __metadata("design:type", credentials_1.EnvelopedVerifiableCredential)
], CORE_DeliveryTicketResponseDto.prototype, "eventVC", void 0);
