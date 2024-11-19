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
exports.OGBillOfLadingVCDTO = void 0;
const credentials_1 = require("../../../../credentials");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const oilGas_event_credentialSubject_dto_1 = require("./oilGas.event.credentialSubject.dto");
class OGBillOfLadingVCDTO extends credentials_1.CredentialDTO {
    credentialSubject;
}
exports.OGBillOfLadingVCDTO = OGBillOfLadingVCDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => oilGas_event_credentialSubject_dto_1.OGBillOfLadingCredentialSubjectDTO),
    __metadata("design:type", oilGas_event_credentialSubject_dto_1.OGBillOfLadingCredentialSubjectDTO)
], OGBillOfLadingVCDTO.prototype, "credentialSubject", void 0);
