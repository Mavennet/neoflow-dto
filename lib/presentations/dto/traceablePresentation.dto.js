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
exports.TraceablePresentationDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const general_1 = require("../../general");
const credentials_1 = require("../../credentials");
const workflow_dto_1 = require("./workflow.dto");
class TraceablePresentationDTO {
    '@context';
    id;
    type;
    holder;
    verifiableCredential;
    workflow;
    proof;
}
exports.TraceablePresentationDTO = TraceablePresentationDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    (0, class_validator_1.Validate)((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2')),
    (0, class_validator_1.Validate)((o) => o['@context'].includes('https://w3id.org/traceability/v1')),
    __metadata("design:type", Array)
], TraceablePresentationDTO.prototype, "@context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TraceablePresentationDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.Validate)((o) => o.includes('VerifiablePresentation')),
    (0, class_validator_1.Validate)((o) => o.includes('TraceablePresentation')),
    __metadata("design:type", Array)
], TraceablePresentationDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TraceablePresentationDTO.prototype, "holder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => credentials_1.EnvelopedVerifiableCredential),
    __metadata("design:type", Array)
], TraceablePresentationDTO.prototype, "verifiableCredential", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => workflow_dto_1.WorkflowDTO),
    __metadata("design:type", workflow_dto_1.WorkflowDTO)
], TraceablePresentationDTO.prototype, "workflow", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.ProofDTO),
    __metadata("design:type", general_1.ProofDTO)
], TraceablePresentationDTO.prototype, "proof", void 0);
