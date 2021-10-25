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
exports.CreateQPInbondDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const qpInbondCredentialSubject_dto_1 = require("./qpInbondCredentialSubject.dto");
const qpInBondEvent_vc_dto_1 = require("./qpInBondEvent.vc.dto");
class CreateQPInbondDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.productId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], CreateQPInbondDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], CreateQPInbondDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => qpInbondCredentialSubject_dto_1.QPInbondCredentialSubjectDTO),
    __metadata("design:type", qpInbondCredentialSubject_dto_1.QPInbondCredentialSubjectDTO)
], CreateQPInbondDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => qpInBondEvent_vc_dto_1.QPInBondEventVCDTO),
    __metadata("design:type", qpInBondEvent_vc_dto_1.QPInBondEventVCDTO)
], CreateQPInbondDTO.prototype, "eventVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQPInbondDTO.prototype, "eventVCHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQPInbondDTO.prototype, "txHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQPInbondDTO.prototype, "txTimestamp", void 0);
exports.CreateQPInbondDTO = CreateQPInbondDTO;
