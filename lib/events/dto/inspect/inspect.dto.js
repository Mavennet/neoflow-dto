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
exports.CORE_InspectDTO = exports.AGENT_InspectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const event_vc_dto_1 = require("./event.vc.dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class AGENT_InspectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_InspectDTO.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_InspectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => event_credentialSubject_dto_1.AGENT_InspectCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_InspectCredentialSubjectDTO)
], AGENT_InspectDTO.prototype, "inspectCredentialSubject", void 0);
exports.AGENT_InspectDTO = AGENT_InspectDTO;
class CORE_InspectDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_InspectDTO.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_InspectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => event_vc_dto_1.InspectVCDTO),
    __metadata("design:type", event_vc_dto_1.InspectVCDTO)
], CORE_InspectDTO.prototype, "eventVC", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_InspectDTO.prototype, "eventVCHash", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_InspectDTO.prototype, "txHash", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_InspectDTO.prototype, "txTimestamp", void 0);
exports.CORE_InspectDTO = CORE_InspectDTO;
