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
exports.TransportProductDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _1 = require("./");
const constants_1 = require("../../constants");
class TransportProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransportProductDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransportProductDTO.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORT_EVENT_TYPE),
    __metadata("design:type", String)
], TransportProductDTO.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START),
    (0, class_transformer_1.Type)(() => _1.TransportationEventDetailsDTO),
    __metadata("design:type", _1.TransportationEventDetailsDTO)
], TransportProductDTO.prototype, "transportVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.END),
    (0, class_transformer_1.Type)(() => _1.OGBillOfLadingVCDTO),
    __metadata("design:type", _1.OGBillOfLadingVCDTO)
], TransportProductDTO.prototype, "bolVC", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportProductDTO.prototype, "txHash", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportProductDTO.prototype, "txTimestamp", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START),
    (0, class_transformer_1.Type)(() => _1.TransportationEventCredentialSubjectDTO),
    __metadata("design:type", _1.TransportationEventCredentialSubjectDTO)
], TransportProductDTO.prototype, "transportCredentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.END),
    (0, class_transformer_1.Type)(() => _1.OGBillOfLadingCredentialSubjectDTO),
    __metadata("design:type", _1.OGBillOfLadingCredentialSubjectDTO)
], TransportProductDTO.prototype, "billOfLadingCredentialSubject", void 0);
exports.TransportProductDTO = TransportProductDTO;
