var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsArray, ArrayMinSize, ArrayMaxSize, ValidateNested, Validate } from 'class-validator';
import { Type } from 'class-transformer';
import { JSON_TYPE_METAL } from '../../general';
import { JSON_TYPE } from 'mavennet-dto';
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto';
import { VerifiableCredentialDTO } from 'mavennet-dto';
export class ProductVCDTO extends VerifiableCredentialDTO {
}
__decorate([
    IsArray(),
    ArrayMinSize(3),
    ArrayMaxSize(3),
    Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/') &&
        o['@context'].includes('https://mavennet.github.io/contexts/metal-product-v1.0.jsonld')),
    __metadata("design:type", Array)
], ProductVCDTO.prototype, "@context", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(2),
    ArrayMaxSize(2),
    Validate(o => o.type.includes(JSON_TYPE.VERIFIABLE_CREDENTIAL) &&
        o.type.includes(JSON_TYPE_METAL.METAL_PRODUCT)),
    __metadata("design:type", Array)
], ProductVCDTO.prototype, "type", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => ProductCredentialSubjectDTO),
    __metadata("design:type", ProductCredentialSubjectDTO)
], ProductVCDTO.prototype, "credentialSubject", void 0);