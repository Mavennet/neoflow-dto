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
exports.CORE_TransformProductDTO = exports.CORE_TransformOutputProductDTO = exports.AGENT_TransformProductDTO = exports.AGENT_TransformOutputProductDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const products_1 = require("../../../products");
const event_vc_dto_1 = require("./event.vc.dto");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
const swagger_1 = require("@nestjs/swagger");
class AGENT_TransformOutputProductDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], AGENT_TransformOutputProductDTO.prototype, "productId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => products_1.ProductCredentialSubjectDTO),
    __metadata("design:type", products_1.ProductCredentialSubjectDTO)
], AGENT_TransformOutputProductDTO.prototype, "productCredentialSubject", void 0);
exports.AGENT_TransformOutputProductDTO = AGENT_TransformOutputProductDTO;
class AGENT_TransformProductDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], AGENT_TransformProductDTO.prototype, "inputProductIds", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => AGENT_TransformOutputProductDTO),
    __metadata("design:type", Array)
], AGENT_TransformProductDTO.prototype, "outputProducts", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => event_credentialSubject_dto_1.AGENT_TransformEventCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.AGENT_TransformEventCredentialSubjectDTO)
], AGENT_TransformProductDTO.prototype, "eventCredentialSubject", void 0);
exports.AGENT_TransformProductDTO = AGENT_TransformProductDTO;
class CORE_TransformOutputProductDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_TransformOutputProductDTO.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => products_1.ProductVCDTO),
    __metadata("design:type", products_1.ProductVCDTO)
], CORE_TransformOutputProductDTO.prototype, "productVC", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_TransformOutputProductDTO.prototype, "productVCHash", void 0);
exports.CORE_TransformOutputProductDTO = CORE_TransformOutputProductDTO;
class CORE_TransformProductDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => CORE_TransformOutputProductDTO),
    __metadata("design:type", Array)
], CORE_TransformProductDTO.prototype, "outputProducts", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "eventId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => event_vc_dto_1.TransformEventVCDTO),
    __metadata("design:type", event_vc_dto_1.TransformEventVCDTO)
], CORE_TransformProductDTO.prototype, "eventVC", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "txHash", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CORE_TransformProductDTO.prototype, "txTimestamp", void 0);
exports.CORE_TransformProductDTO = CORE_TransformProductDTO;
