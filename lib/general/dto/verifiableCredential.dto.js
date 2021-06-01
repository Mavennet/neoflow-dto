var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsArray, ArrayNotEmpty, IsEnum } from 'class-validator';
import { JSON_TYPE, VerifiableCredentialDTO as VerifiableCredentialDTOBase } from 'mavennet-dto';
import { JSON_TYPE_METAL } from '../constants';
export class VerifiableCredentialDTO extends VerifiableCredentialDTOBase {
}
__decorate([
    IsArray(),
    ArrayNotEmpty(),
    IsEnum({
        ...JSON_TYPE,
        ...JSON_TYPE_METAL
    }, { each: true }),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "type", void 0);
