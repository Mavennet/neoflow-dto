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
exports.CORE_TransportProductDTO = exports.AGENT_TransportProductDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_vc_dto_1 = require("./event.vc.dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const constants_1 = require("../../constants");
const swagger_1 = require("@nestjs/swagger");
class AGENT_TransportProductDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    __metadata("design:type", String)
], AGENT_TransportProductDTO.prototype, "eventType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_TransportProductDTO.prototype, "productId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_TransportProductDTO.prototype, "eventId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_validator_1.ValidateIf(o => o.eventType === constants_1.EVENT_TYPE.TRANSPORT_START),
    class_transformer_1.Type(() => event_credentialSubject_dto_1.AGENT_TransportEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_TransportEventCredentialSubjectDTO)
], AGENT_TransportProductDTO.prototype, "transportCredentialSubject", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_validator_1.ValidateIf(o => o.eventType === constants_1.EVENT_TYPE.TRANSPORT_END),
    class_transformer_1.Type(() => event_credentialSubject_dto_1.AGENT_BillOfLadingCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_BillOfLadingCredentialSubjectDTO)
], AGENT_TransportProductDTO.prototype, "billOfLadingCredentialSubject", void 0);
exports.AGENT_TransportProductDTO = AGENT_TransportProductDTO;
class CORE_TransportProductDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_TransportProductDTO.prototype, "productId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_TransportProductDTO.prototype, "eventId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    __metadata("design:type", String)
], CORE_TransportProductDTO.prototype, "eventType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_validator_1.ValidateIf(o => o.eventType === constants_1.EVENT_TYPE.TRANSPORT_START),
    class_transformer_1.Type(() => event_vc_dto_1.TransportEventVCDTO),
    __metadata("design:type", event_vc_dto_1.TransportEventVCDTO)
], CORE_TransportProductDTO.prototype, "transportVC", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_validator_1.ValidateIf(o => o.eventType === constants_1.EVENT_TYPE.TRANSPORT_END),
    class_transformer_1.Type(() => event_vc_dto_1.BillOfLadingVCDTO),
    __metadata("design:type", event_vc_dto_1.BillOfLadingVCDTO)
], CORE_TransportProductDTO.prototype, "bolVC", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_TransportProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_TransportProductDTO.prototype, "txHash", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_TransportProductDTO.prototype, "txTimestamp", void 0);
exports.CORE_TransportProductDTO = CORE_TransportProductDTO;