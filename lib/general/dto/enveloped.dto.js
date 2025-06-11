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
exports.CORE_EnvelopedVCDTO = exports.WrappedEnvelopedVCDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class WrappedEnvelopedVCDTO {
    eventId;
    vc;
}
exports.WrappedEnvelopedVCDTO = WrappedEnvelopedVCDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identifier for the event in Neoflow' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], WrappedEnvelopedVCDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The issued verifiable credential object' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Function)
], WrappedEnvelopedVCDTO.prototype, "vc", void 0);
class CORE_EnvelopedVCDTO {
    vcs;
}
exports.CORE_EnvelopedVCDTO = CORE_EnvelopedVCDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [WrappedEnvelopedVCDTO], description: 'List of wrapped verifiable credentials' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => WrappedEnvelopedVCDTO),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CORE_EnvelopedVCDTO.prototype, "vcs", void 0);
