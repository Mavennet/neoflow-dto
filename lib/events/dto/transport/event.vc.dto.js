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
exports.AGENT_TransportationEventDetailsDTO = exports.CORE_TransportationEventDetailsDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const credentials_1 = require("../../../credentials");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class CORE_TransportationEventDetailsDTO extends credentials_1.CredentialDTO {
    credentialSubject;
}
exports.CORE_TransportationEventDetailsDTO = CORE_TransportationEventDetailsDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.CORE_TransportationEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.CORE_TransportationEventCredentialSubjectDTO)
], CORE_TransportationEventDetailsDTO.prototype, "credentialSubject", void 0);
class AGENT_TransportationEventDetailsDTO extends credentials_1.CredentialDTO {
    credentialSubject;
}
exports.AGENT_TransportationEventDetailsDTO = AGENT_TransportationEventDetailsDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.AGENT_TransportationEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_TransportationEventCredentialSubjectDTO)
], AGENT_TransportationEventDetailsDTO.prototype, "credentialSubject", void 0);
