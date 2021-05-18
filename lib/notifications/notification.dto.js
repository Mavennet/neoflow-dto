var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsOptional, IsNumber, IsUUID, IsString, IsDateString, IsEnum, IsBoolean, Matches } from 'class-validator';
import { NOTIFICATION_TYPE } from './constants';
export class NotificationDTO {
}
__decorate([
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "notificationId", void 0);
__decorate([
    IsNotEmpty(),
    IsEnum(NOTIFICATION_TYPE),
    __metadata("design:type", String)
], NotificationDTO.prototype, "notificationType", void 0);
__decorate([
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], NotificationDTO.prototype, "productId", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "contractId", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "transferRequestId", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    Matches(/^did:/),
    __metadata("design:type", String)
], NotificationDTO.prototype, "sender", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], NotificationDTO.prototype, "senderName", void 0);
__decorate([
    IsNotEmpty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], NotificationDTO.prototype, "read", void 0);
__decorate([
    IsNotEmpty(),
    IsDateString(),
    __metadata("design:type", Date)
], NotificationDTO.prototype, "createdAt", void 0);
