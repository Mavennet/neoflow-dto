var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsEnum, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PRODUCT_NAME } from '../constants';
import { MeasurementDTO } from '../../general';
import { ProductDTO as ProductDTOBase } from 'mavennet-dto';
export class ProductDTO extends ProductDTOBase {
}
__decorate([
    IsNotEmpty(),
    IsEnum(PRODUCT_NAME),
    __metadata("design:type", String)
], ProductDTO.prototype, "name", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => MeasurementDTO),
    __metadata("design:type", MeasurementDTO)
], ProductDTO.prototype, "weight", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], ProductDTO.prototype, "id", void 0);
