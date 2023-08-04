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
exports.IntentToImportVC = void 0;
const traceability_dto_1 = require("@mavennet/traceability-dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class IntentToImport {
    type;
    importIntent;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.Validate)((o) => o.type.includes('IntentToImport')),
    __metadata("design:type", Array)
], IntentToImport.prototype, "type", void 0);
class IntentToImportVC extends traceability_dto_1.CredentialDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.Validate)((o) => o.type.includes('IntentToImportCredential')),
    (0, class_validator_1.Validate)((o) => o.includes('VerifiableCredential')),
    __metadata("design:type", Array)
], IntentToImportVC.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", IntentToImport)
], IntentToImportVC.prototype, "credentialSubject", void 0);
exports.IntentToImportVC = IntentToImportVC;
