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
exports.AGENT_TransformProductsDTO = exports.CORE_TransformProductsDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const transformProductSuccessor_dto_1 = require("./transformProductSuccessor.dto");
const transformationEventCredentialSubject_dto_1 = require("./transformationEventCredentialSubject.dto");
const transformationEvent_vc_dto_1 = require("./transformationEvent.vc.dto");
class CORE_TransformProductsDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CORE_TransformProductsDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_TransformProductsDTO.prototype, "eventVCHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_TransformProductsDTO.prototype, "txHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_TransformProductsDTO.prototype, "txTimestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => transformationEvent_vc_dto_1.CORE_TransformationEventDetailsDTO),
    __metadata("design:type", transformationEvent_vc_dto_1.CORE_TransformationEventDetailsDTO)
], CORE_TransformProductsDTO.prototype, "eventVC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => transformProductSuccessor_dto_1.TransformProductSuccessorDTO),
    __metadata("design:type", Array)
], CORE_TransformProductsDTO.prototype, "productSuccessors", void 0);
exports.CORE_TransformProductsDTO = CORE_TransformProductsDTO;
class AGENT_TransformProductsDTO extends CORE_TransformProductsDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => transformationEvent_vc_dto_1.AGENT_TransformationEventDetailsDTO),
    __metadata("design:type", transformationEvent_vc_dto_1.AGENT_TransformationEventDetailsDTO)
], AGENT_TransformProductsDTO.prototype, "eventVC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], AGENT_TransformProductsDTO.prototype, "productParents", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => transformationEventCredentialSubject_dto_1.AGENT_TransformationEventCredentialSubjectDTO),
    __metadata("design:type", transformationEventCredentialSubject_dto_1.AGENT_TransformationEventCredentialSubjectDTO)
], AGENT_TransformProductsDTO.prototype, "eventCredentialSubject", void 0);
exports.AGENT_TransformProductsDTO = AGENT_TransformProductsDTO;
