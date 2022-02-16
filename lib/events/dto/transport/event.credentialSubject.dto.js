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
exports.AGENT_TransportationEventCredentialSubjectDTO = exports.CORE_TransportationEventCredentialSubjectDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const address_dto_1 = require("../../../general/dto/address.dto");
const constants_1 = require("../../constants");
const constants_2 = require("../../../products/constants");
class TransportationEventCredentialSubjectDTOBase {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORT_EVENT_TYPE),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "eventCreator", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORTATION_TYPE),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START && o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "transportType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.transportType === constants_1.TRANSPORTATION_TYPE.PIPELINE &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "batchNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.transportType === constants_1.TRANSPORTATION_TYPE.TRUCK &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "scn", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.transportType === constants_1.TRANSPORTATION_TYPE.RAIL &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "bol", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_2.PRODUCT_CATEGORY_TYPE),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START && o.category === constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], TransportationEventCredentialSubjectDTOBase.prototype, "displacementId", void 0);
class CORE_TransportationEventCredentialSubjectDTO extends TransportationEventCredentialSubjectDTOBase {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CORE_TransportationEventCredentialSubjectDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDTO),
    __metadata("design:type", address_dto_1.AddressDTO)
], CORE_TransportationEventCredentialSubjectDTO.prototype, "geo", void 0);
exports.CORE_TransportationEventCredentialSubjectDTO = CORE_TransportationEventCredentialSubjectDTO;
class AGENT_TransportationEventCredentialSubjectDTO extends TransportationEventCredentialSubjectDTOBase {
}
exports.AGENT_TransportationEventCredentialSubjectDTO = AGENT_TransportationEventCredentialSubjectDTO;
