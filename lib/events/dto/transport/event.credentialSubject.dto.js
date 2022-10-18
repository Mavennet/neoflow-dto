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
exports.CORE_TransportationEventCredentialSubjectDTO = exports.AGENT_TransportationEventCredentialSubjectDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const general_1 = require("../../../general");
const constants_1 = require("../../constants");
const constants_2 = require("../../../products/constants");
class AGENT_TransportationEventCredentialSubjectDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORT_EVENT_TYPE),
    __metadata("design:type", String)
], AGENT_TransportationEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.PlaceDTO),
    __metadata("design:type", general_1.PlaceDTO)
], AGENT_TransportationEventCredentialSubjectDTO.prototype, "place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: () => general_1.OrganizationDTO }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => general_1.OrganizationDTO),
    __metadata("design:type", Array)
], AGENT_TransportationEventCredentialSubjectDTO.prototype, "actor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: () => general_1.ProductHashDTO }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => general_1.ProductHashDTO),
    __metadata("design:type", Array)
], AGENT_TransportationEventCredentialSubjectDTO.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORTATION_TYPE),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START && o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], AGENT_TransportationEventCredentialSubjectDTO.prototype, "deliveryMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.deliveryMethod === constants_1.TRANSPORTATION_TYPE.PIPELINE &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], AGENT_TransportationEventCredentialSubjectDTO.prototype, "trackingNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START &&
        o.deliveryMethod === constants_1.TRANSPORTATION_TYPE.TRUCK &&
        o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], AGENT_TransportationEventCredentialSubjectDTO.prototype, "scn", void 0);
exports.AGENT_TransportationEventCredentialSubjectDTO = AGENT_TransportationEventCredentialSubjectDTO;
class CORE_TransportationEventCredentialSubjectDTO extends general_1.EventDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORT_EVENT_TYPE),
    __metadata("design:type", String)
], CORE_TransportationEventCredentialSubjectDTO.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.TRANSPORTATION_TYPE),
    (0, class_validator_1.ValidateIf)((o) => o.eventType === constants_1.TRANSPORT_EVENT_TYPE.START && o.category !== constants_2.PRODUCT_CATEGORY_TYPE.GAS),
    __metadata("design:type", String)
], CORE_TransportationEventCredentialSubjectDTO.prototype, "deliveryMethod", void 0);
exports.CORE_TransportationEventCredentialSubjectDTO = CORE_TransportationEventCredentialSubjectDTO;
