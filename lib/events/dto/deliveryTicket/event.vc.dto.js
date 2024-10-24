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
exports.DeliveryTicketVCDTO = void 0;
const traceability_dto_1 = require("@mavennet/traceability-dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../constants");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class DeliveryTicketVCDTO extends traceability_dto_1.CredentialDTO {
    credentialSubject;
    ticketType;
}
exports.DeliveryTicketVCDTO = DeliveryTicketVCDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.DeliveryTicketCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.DeliveryTicketCredentialSubjectDTO)
], DeliveryTicketVCDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(constants_1.TICKET_TYPE),
    __metadata("design:type", String)
], DeliveryTicketVCDTO.prototype, "ticketType", void 0);
