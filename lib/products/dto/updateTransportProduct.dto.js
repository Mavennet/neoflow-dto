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
exports.UpdateTransportProductDTO = void 0;
const class_validator_1 = require("class-validator");
const constants_1 = require("../../events/constants");
const constants_2 = require("../constants");
class UpdateTransportProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventId.startsWith('http://neo-flow.com/credentials/')),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "revokeEventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_2.PRODUCT_CATEGORY_TYPE),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORT_EVENT_TYPE),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORTATION_TYPE),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START && o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "transportType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.transportType === constants_1.TRANSPORTATION_TYPE.PIPELINE &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "batchNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.transportType === constants_1.TRANSPORTATION_TYPE.TRUCK &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "scn", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.transportType === constants_1.TRANSPORTATION_TYPE.RAIL &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "bol", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START && o.category === constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "displacementId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.END),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "closingVolume", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.END),
    __metadata("design:type", String)
], UpdateTransportProductDTO.prototype, "trackingNumber", void 0);
exports.UpdateTransportProductDTO = UpdateTransportProductDTO;
