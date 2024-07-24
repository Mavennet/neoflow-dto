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
exports.LocationsDto = exports.XBorderDto = exports.LocationDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CoordinatesDto {
    lat;
    lng;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CoordinatesDto.prototype, "lat", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CoordinatesDto.prototype, "lng", void 0);
class PostalAddressDto {
    streetAddress;
    addressLocality;
    addressRegion;
    postalCode;
    addressCountry;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostalAddressDto.prototype, "streetAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostalAddressDto.prototype, "addressLocality", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostalAddressDto.prototype, "addressRegion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostalAddressDto.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostalAddressDto.prototype, "addressCountry", void 0);
class DetailsDto {
    address;
    coordinates;
    postalAddress;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DetailsDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CoordinatesDto),
    __metadata("design:type", CoordinatesDto)
], DetailsDto.prototype, "coordinates", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PostalAddressDto),
    __metadata("design:type", PostalAddressDto)
], DetailsDto.prototype, "postalAddress", void 0);
class LocationDto {
    id;
    value;
    label;
    alias;
    firmsCode;
    portCode;
    details;
    isOil;
    isGas;
}
exports.LocationDto = LocationDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDto.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], LocationDto.prototype, "alias", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDto.prototype, "firmsCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocationDto.prototype, "portCode", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", DetailsDto)
], LocationDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], LocationDto.prototype, "isOil", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], LocationDto.prototype, "isGas", void 0);
class XBorderDto {
    receiptLocationId;
    deliveryFacilityId;
}
exports.XBorderDto = XBorderDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], XBorderDto.prototype, "receiptLocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], XBorderDto.prototype, "deliveryFacilityId", void 0);
class LocationsDto {
    deliveryFacilities;
    receiptLocations;
    ports;
    xborderMappings;
}
exports.LocationsDto = LocationsDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => LocationDto),
    __metadata("design:type", Array)
], LocationsDto.prototype, "deliveryFacilities", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => LocationDto),
    __metadata("design:type", Array)
], LocationsDto.prototype, "receiptLocations", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => LocationDto),
    __metadata("design:type", Array)
], LocationsDto.prototype, "ports", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => XBorderDto),
    __metadata("design:type", Array)
], LocationsDto.prototype, "xborderMappings", void 0);
