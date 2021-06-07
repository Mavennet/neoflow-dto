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
exports.VerifiableCredentialDTO = void 0;
const class_validator_1 = require("class-validator");
const mavennet_dto_1 = require("mavennet-dto");
const constants_1 = require("../constants");
class VerifiableCredentialDTO extends mavennet_dto_1.VerifiableCredentialDTO {
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayNotEmpty(),
    class_validator_1.IsEnum({
        ...mavennet_dto_1.JSON_TYPE,
        ...constants_1.JSON_TYPE_METAL
    }, { each: true }),
    __metadata("design:type", Object)
], VerifiableCredentialDTO.prototype, "type", void 0);
exports.VerifiableCredentialDTO = VerifiableCredentialDTO;
