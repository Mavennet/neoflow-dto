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
exports.CORE_EventCreateCredentialSubjectDTO = exports.AGENT_EventCreateCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
const constants_1 = require("../../constants");
class EventCreateCredentialSubjectDTOBase {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(constants_1.EVENT_TYPE),
    class_validator_1.Validate(o => o.eventType === constants_1.EVENT_TYPE.CREATE),
    __metadata("design:type", String)
], EventCreateCredentialSubjectDTOBase.prototype, "eventType", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EventCreateCredentialSubjectDTOBase.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], EventCreateCredentialSubjectDTOBase.prototype, "place", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.Matches(/^did:/),
    __metadata("design:type", String)
], EventCreateCredentialSubjectDTOBase.prototype, "eventCreator", void 0);
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => general_1.OrganizationDTO),
    __metadata("design:type", general_1.OrganizationDTO)
], EventCreateCredentialSubjectDTOBase.prototype, "initiator", void 0);
class AGENT_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_EventCreateCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_EventCreateCredentialSubjectDTO.prototype, "productId", void 0);
exports.AGENT_EventCreateCredentialSubjectDTO = AGENT_EventCreateCredentialSubjectDTO;
class CORE_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_EventCreateCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(2),
    class_validator_1.ArrayMaxSize(2),
    class_validator_1.Validate(o => o.type.includes(general_1.JSON_TYPE_METAL.EVENT_CREDENTIAL) &&
        o.type.includes(general_1.JSON_TYPE_METAL.PRODUCT_CREATION_EVENT_CREDENTIAL)),
    __metadata("design:type", Array)
], CORE_EventCreateCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_EventCreateCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], CORE_EventCreateCredentialSubjectDTO.prototype, "productId", void 0);
exports.CORE_EventCreateCredentialSubjectDTO = CORE_EventCreateCredentialSubjectDTO;
