var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsNotEmpty, IsNotEmptyObject, IsNumberString, IsString, IsEnum, IsArray, ArrayNotEmpty, Validate, ValidateNested, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { PRODUCT_NAME } from '../constants';
import { JSON_TYPE_METAL } from '../../general';
import { ProductDTO } from './product.dto';
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase } from 'mavennet-dto';
export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
}
__decorate([
    IsArray(),
    ArrayNotEmpty(),
    IsEnum(JSON_TYPE_METAL, { each: true }),
    Validate(o => o.type === [JSON_TYPE_METAL.METAL_PRODUCT]),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    IsNotEmpty(),
    IsNumberString(),
    ValidateIf(o => o.name !== PRODUCT_NAME.HEAT),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "HSCode", void 0);
__decorate([
    IsNotEmpty(),
    IsNumberString(),
    ValidateIf(o => o.name === PRODUCT_NAME.HEAT),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "heatNumber", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => ProductDTO),
    __metadata("design:type", ProductDTO)
], ProductCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "grade", void 0);
