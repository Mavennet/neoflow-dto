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
exports.PipelinePostArrivalResponseDto = exports.PipelinePostArrivalDto_AGENT = exports.PipelinePostArrivalRecord = exports.PIPELINE_TYPE = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var PIPELINE_TYPE;
(function (PIPELINE_TYPE) {
    PIPELINE_TYPE["ENBRIDGE"] = "ENBRIDGE";
    PIPELINE_TYPE["EXPRESS"] = "EXPRESS";
    PIPELINE_TYPE["KEYSTONE"] = "KEYSTONE";
})(PIPELINE_TYPE || (exports.PIPELINE_TYPE = PIPELINE_TYPE = {}));
class PipelinePostArrivalRecord {
    pipeline;
    shipper;
    destination;
    ticket_number;
    batch_name;
    density;
    api;
    commodity;
    gsv_m3;
    nsv_m3;
    consignee;
    gsv_bbl;
    nsv_bbl;
    productId;
}
exports.PipelinePostArrivalRecord = PipelinePostArrivalRecord;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ enum: PIPELINE_TYPE }),
    (0, class_validator_1.IsEnum)(PIPELINE_TYPE),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "pipeline", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "shipper", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "destination", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "ticket_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "batch_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "density", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "api", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "commodity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "gsv_m3", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "nsv_m3", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "consignee", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "gsv_bbl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "nsv_bbl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PipelinePostArrivalRecord.prototype, "productId", void 0);
class PipelinePostArrivalDto_AGENT {
    records;
}
exports.PipelinePostArrivalDto_AGENT = PipelinePostArrivalDto_AGENT;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [PipelinePostArrivalRecord] }),
    __metadata("design:type", Array)
], PipelinePostArrivalDto_AGENT.prototype, "records", void 0);
class PipelinePostArrivalResponseDto {
    records;
    errors;
}
exports.PipelinePostArrivalResponseDto = PipelinePostArrivalResponseDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: [PipelinePostArrivalRecord] }),
    __metadata("design:type", Array)
], PipelinePostArrivalResponseDto.prototype, "records", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], PipelinePostArrivalResponseDto.prototype, "errors", void 0);
