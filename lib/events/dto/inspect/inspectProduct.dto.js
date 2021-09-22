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
exports.AGENT_InspectProductDTO = exports.CORE_InspectProductDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const inspectionEventCredentialSubject_dto_1 = require("./inspectionEventCredentialSubject.dto");
const inspectionEvent_vc_dto_1 = require("./inspectionEvent.vc.dto");
class CORE_InspectProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_InspectProductDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_InspectProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => inspectionEvent_vc_dto_1.InspectionEventDetailsDTO),
    __metadata("design:type", inspectionEvent_vc_dto_1.InspectionEventDetailsDTO)
], CORE_InspectProductDTO.prototype, "eventVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_InspectProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_InspectProductDTO.prototype, "txHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_InspectProductDTO.prototype, "txTimestamp", void 0);
exports.CORE_InspectProductDTO = CORE_InspectProductDTO;
class AGENT_InspectProductDTO extends CORE_InspectProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => inspectionEventCredentialSubject_dto_1.AGENT_InspectionEventCredentialSubjectDTO),
    __metadata("design:type", inspectionEventCredentialSubject_dto_1.AGENT_InspectionEventCredentialSubjectDTO)
], AGENT_InspectProductDTO.prototype, "inspectCredentialSubject", void 0);
exports.AGENT_InspectProductDTO = AGENT_InspectProductDTO;
