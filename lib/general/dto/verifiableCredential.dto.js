var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsArray, ArrayMinSize, ArrayMaxSize, Validate } from 'class-validator';
import { VerifiableCredentialDTO as VerifiableCredentialDTOBase } from 'mavennet-dto';
export class VerifiableCredentialDTO extends VerifiableCredentialDTOBase {
}
__decorate([
    IsArray(),
    ArrayMinSize(3),
    ArrayMaxSize(3),
    Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/') &&
        o['@context'].includes('https://mavennet.github.io/contexts/metal-EVENT-v1.0.jsonld')),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "@context", void 0);