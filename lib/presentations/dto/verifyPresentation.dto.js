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
exports.VerifyPresentationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const presentationOptions_dto_1 = require("./presentationOptions.dto");
const verifiablePresentation_dto_1 = require("./verifiablePresentation.dto");
class VerifyPresentationDTO {
    verifiablePresentation;
    options;
}
exports.VerifyPresentationDTO = VerifyPresentationDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => verifiablePresentation_dto_1.VerifiablePresentationDTO),
    __metadata("design:type", verifiablePresentation_dto_1.VerifiablePresentationDTO)
], VerifyPresentationDTO.prototype, "verifiablePresentation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => presentationOptions_dto_1.PresentationOptionsDTO),
    __metadata("design:type", presentationOptions_dto_1.PresentationOptionsDTO)
], VerifyPresentationDTO.prototype, "options", void 0);
