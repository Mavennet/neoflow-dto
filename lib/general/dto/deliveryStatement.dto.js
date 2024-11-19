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
exports.MonthlyDeliveryStatementDTO = exports.DeliveryStatementDTO = void 0;
const observation_dto_1 = require("./observation.dto");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
const measurement_dto_1 = require("./measurement.dto");
class DeliveryStatementDTO {
    type;
    deliveredDate;
    deliveredVolume;
    observation;
}
exports.DeliveryStatementDTO = DeliveryStatementDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Equals)(constants_1.JSON_TYPE_NF.DELIVERY_STATEMENT),
    __metadata("design:type", String)
], DeliveryStatementDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryStatementDTO.prototype, "deliveredDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => measurement_dto_1.MeasurementDTO),
    __metadata("design:type", measurement_dto_1.MeasurementDTO)
], DeliveryStatementDTO.prototype, "deliveredVolume", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ isArray: true, type: () => observation_dto_1.ObservationDTO }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => observation_dto_1.ObservationDTO),
    __metadata("design:type", Array)
], DeliveryStatementDTO.prototype, "observation", void 0);
class MonthlyDeliveryStatementDTO {
    type;
    statementMonth;
    itemsDelivered;
}
exports.MonthlyDeliveryStatementDTO = MonthlyDeliveryStatementDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Equals)(constants_1.JSON_TYPE_NF.MONTHLY_DELIVERY_STATEMENTS),
    __metadata("design:type", String)
], MonthlyDeliveryStatementDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MonthlyDeliveryStatementDTO.prototype, "statementMonth", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => DeliveryStatementDTO),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], MonthlyDeliveryStatementDTO.prototype, "itemsDelivered", void 0);
