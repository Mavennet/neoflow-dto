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
exports.CarbonFootprintDetailsDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const _1 = require("./");
class CarbonFootprintDetailsDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CarbonFootprintDetailsDTO.prototype, "startDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CarbonFootprintDetailsDTO.prototype, "endDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CarbonFootprintDetailsDTO.prototype, "role", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => _1.ProcessEmissionDTO),
    __metadata("design:type", _1.ProcessEmissionDTO)
], CarbonFootprintDetailsDTO.prototype, "processEmission", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => _1.StationaryCombustionDTO),
    __metadata("design:type", _1.StationaryCombustionDTO)
], CarbonFootprintDetailsDTO.prototype, "stationaryCombustion", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => _1.MobileCombustionUsageDTO),
    __metadata("design:type", _1.MobileCombustionUsageDTO)
], CarbonFootprintDetailsDTO.prototype, "mobileCombustionUsage", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => _1.MobileCombustionDistanceDTO),
    __metadata("design:type", _1.MobileCombustionDistanceDTO)
], CarbonFootprintDetailsDTO.prototype, "mobileCombustionDistance", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => _1.PurchasedElectricityDTO),
    __metadata("design:type", _1.PurchasedElectricityDTO)
], CarbonFootprintDetailsDTO.prototype, "purchasedElectricity", void 0);
exports.CarbonFootprintDetailsDTO = CarbonFootprintDetailsDTO;
