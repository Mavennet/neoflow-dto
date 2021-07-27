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
exports.StationaryCombustionDTO = void 0;
const class_validator_1 = require("class-validator");
const mavennet_dto_1 = require("mavennet-dto");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class FuelTypesDetails {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FuelTypesDetails.prototype, "fuelType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => mavennet_dto_1.MeasurementDTO),
    __metadata("design:type", mavennet_dto_1.MeasurementDTO)
], FuelTypesDetails.prototype, "fuelUsage", void 0);
class StationaryCombustionDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], StationaryCombustionDTO.prototype, "co2EmissionsInTonnes", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], StationaryCombustionDTO.prototype, "ch4EmissionsInTonnes", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], StationaryCombustionDTO.prototype, "no2EmissionsInTonnes", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], StationaryCombustionDTO.prototype, "fuelTypesDetails", void 0);
exports.StationaryCombustionDTO = StationaryCombustionDTO;
