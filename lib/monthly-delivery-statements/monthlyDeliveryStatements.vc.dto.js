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
exports.MonthlyDeliveryStatementsVCDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const monthlyDeliveryStatements_credentialSubject_dto_1 = require("./monthlyDeliveryStatements.credentialSubject.dto");
class MonthlyDeliveryStatementsVCDTO {
    '@context';
    id;
    type;
    validFrom;
    credentialSubject;
}
exports.MonthlyDeliveryStatementsVCDTO = MonthlyDeliveryStatementsVCDTO;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], MonthlyDeliveryStatementsVCDTO.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MonthlyDeliveryStatementsVCDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_validator_1.ValidateIf)((o) => o.type.includes('VerifiableCredential') && o.type.includes('MonthlyMonthlyDeliveryStatementsCredential')),
    __metadata("design:type", Array)
], MonthlyDeliveryStatementsVCDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], MonthlyDeliveryStatementsVCDTO.prototype, "validFrom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => monthlyDeliveryStatements_credentialSubject_dto_1.MonthlyDeliveryStatementsCredentialSubjectDTO),
    __metadata("design:type", monthlyDeliveryStatements_credentialSubject_dto_1.MonthlyDeliveryStatementsCredentialSubjectDTO)
], MonthlyDeliveryStatementsVCDTO.prototype, "credentialSubject", void 0);
