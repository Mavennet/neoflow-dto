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
exports.TransformProductSuccessorDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const productCredentialSubject_dto_1 = require("./productCredentialSubject.dto");
const product_vc_dto_1 = require("./product.vc.dto");
class TransformProductSuccessorDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransformProductSuccessorDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => product_vc_dto_1.ProductVCDTO),
    __metadata("design:type", product_vc_dto_1.ProductVCDTO)
], TransformProductSuccessorDTO.prototype, "productVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransformProductSuccessorDTO.prototype, "productVCHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransformProductSuccessorDTO.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => productCredentialSubject_dto_1.ProductCredentialSubjectDTO),
    __metadata("design:type", productCredentialSubject_dto_1.ProductCredentialSubjectDTO)
], TransformProductSuccessorDTO.prototype, "credentialSubjects", void 0);
exports.TransformProductSuccessorDTO = TransformProductSuccessorDTO;
