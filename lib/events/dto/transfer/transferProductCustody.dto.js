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
exports.AGENT_TransferProductCustodyDTO = void 0;
const json_ld_context_1 = require("../../../json-ld.context");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const event_dto_1 = require("./event.dto");
class AGENT_TransferProductCustodyDTO extends json_ld_context_1.JsonLdContext {
    productId;
    eventDetails;
    '@type';
}
exports.AGENT_TransferProductCustodyDTO = AGENT_TransferProductCustodyDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AGENT_TransferProductCustodyDTO.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_dto_1.AGENT_TransferEventDTO),
    __metadata("design:type", event_dto_1.AGENT_TransferEventDTO)
], AGENT_TransferProductCustodyDTO.prototype, "eventDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Equals)('TransferProductAction'),
    __metadata("design:type", String)
], AGENT_TransferProductCustodyDTO.prototype, "@type", void 0);
