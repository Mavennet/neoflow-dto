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
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../../general/constants");
const verifiableCredential_dto_1 = require("../../../../general/dto/verifiableCredential.dto");
const oilGasBillOfLadingCredentialSubject_dto_1 = require("./oilGasBillOfLadingCredentialSubject.dto");
class OGBillOfLadingVCDTO {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], OGBillOfLadingVCDTO.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], OGBillOfLadingVCDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayContains)([constants_1.JSON_TYPE.VERIFIABLE_CREDENTIAL]),
    __metadata("design:type", Array)
], OGBillOfLadingVCDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], OGBillOfLadingVCDTO.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], OGBillOfLadingVCDTO.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => oilGasBillOfLadingCredentialSubject_dto_1.OGBillOfLadingCredentialSubjectDTO),
    __metadata("design:type", oilGasBillOfLadingCredentialSubject_dto_1.OGBillOfLadingCredentialSubjectDTO)
], OGBillOfLadingVCDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => verifiableCredential_dto_1.VerifiableCredentialDTO),
    __metadata("design:type", verifiableCredential_dto_1.VerifiableCredentialDTO)
], OGBillOfLadingVCDTO.prototype, "proof", void 0);
exports.OGBillOfLadingVCDTO = OGBillOfLadingVCDTO;