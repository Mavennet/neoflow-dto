var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';
import { AnalyticsDTO as AnalyticsDTOBase } from 'mavennet-dto';
export class AnalyticsDTO extends AnalyticsDTOBase {
}
__decorate([
    IsNotEmpty(),
    IsDateString(),
    __metadata("design:type", Date)
], AnalyticsDTO.prototype, "eventCreatedAt", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "eventType", void 0);
__decorate([
    IsNotEmpty(),
    IsDateString(),
    __metadata("design:type", Date)
], AnalyticsDTO.prototype, "productCreatedAt", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "productionMonth", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "buyerName", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "origin", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "price", void 0);
__decorate([
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "volume", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "aging", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "qpInBond", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "entryId", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "ftzNo", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "portOfEntry", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "streamType", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "startTransportMonth", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "refineryName", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "sulphur", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "density", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "tan", void 0);
