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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AGENT_InspectProductDTO = exports.CORE_InspectProductDTO = exports.AGENT_COMPACT_InspectionDTO = void 0;
const class_validator_1 = require("class-validator");
const general_1 = require("../../../general");
const class_transformer_1 = require("class-transformer");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const event_vc_dto_1 = require("./event.vc.dto");
const swagger_1 = require("@nestjs/swagger");
class AGENT_COMPACT_InspectionDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_OrganizationDTO),
    __metadata("design:type", typeof (_a = typeof general_1.COMPACT_OrganizationDTO !== "undefined" && general_1.COMPACT_OrganizationDTO) === "function" ? _a : Object)
], AGENT_COMPACT_InspectionDTO.prototype, "initiator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_PlaceDTO),
    __metadata("design:type", general_1.COMPACT_PlaceDTO)
], AGENT_COMPACT_InspectionDTO.prototype, "place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => general_1.COMPACT_ObservationDTO),
    __metadata("design:type", Array)
], AGENT_COMPACT_InspectionDTO.prototype, "observation", void 0);
exports.AGENT_COMPACT_InspectionDTO = AGENT_COMPACT_InspectionDTO;
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
    (0, class_transformer_1.Type)(() => event_vc_dto_1.InspectionEventDetailsDTO),
    __metadata("design:type", event_vc_dto_1.InspectionEventDetailsDTO)
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
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.AGENT_InspectionEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_InspectionEventCredentialSubjectDTO)
], AGENT_InspectProductDTO.prototype, "inspectCredentialSubject", void 0);
exports.AGENT_InspectProductDTO = AGENT_InspectProductDTO;
