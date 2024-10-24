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
exports.AGENT_PriceSpecificationDTO = exports.CORE_PriceSpecificationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const traceability_dto_1 = require("@mavennet/traceability-dto");
class CORE_PriceSpecificationDTO {
    gasShipmentId;
    eventId;
    eventVC;
}
exports.CORE_PriceSpecificationDTO = CORE_PriceSpecificationDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_PriceSpecificationDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_PriceSpecificationDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => traceability_dto_1.EnvelopedVerifiableCredential),
    __metadata("design:type", traceability_dto_1.EnvelopedVerifiableCredential)
], CORE_PriceSpecificationDTO.prototype, "eventVC", void 0);
class AGENT_PriceSpecificationDTO {
    gasShipmentId;
    credentialSubject;
}
exports.AGENT_PriceSpecificationDTO = AGENT_PriceSpecificationDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AGENT_PriceSpecificationDTO.prototype, "gasShipmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.PriceSpecificationCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.PriceSpecificationCredentialSubjectDTO)
], AGENT_PriceSpecificationDTO.prototype, "credentialSubject", void 0);
