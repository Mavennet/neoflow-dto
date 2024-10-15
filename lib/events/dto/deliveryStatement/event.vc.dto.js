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
exports.DeliveryStatementVCDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const general_1 = require("../../../general");
const proof_dto_1 = require("../../../general/dto/proof.dto");
const constants_1 = require("../../constants");
const event_credentialSubject_dto_1 = require("./event.credentialSubject.dto");
class DeliveryStatementVCDTO {
    '@context';
    id;
    type;
    issuer;
    validFrom;
    credentialSubject;
    proof;
    ticketType;
}
exports.DeliveryStatementVCDTO = DeliveryStatementVCDTO;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], DeliveryStatementVCDTO.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeliveryStatementVCDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_validator_1.ArrayContains)([general_1.JSON_TYPE_NF.VERIFIABLE_CREDENTIAL, general_1.JSON_TYPE_NF.DELIVERY_STATEMENT_CREDENTIAL]),
    (0, class_validator_1.IsEnum)(general_1.JSON_TYPE_NF, { each: true }),
    __metadata("design:type", Array)
], DeliveryStatementVCDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^did:/),
    __metadata("design:type", String)
], DeliveryStatementVCDTO.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], DeliveryStatementVCDTO.prototype, "validFrom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => event_credentialSubject_dto_1.DeliveryStatementCredentialSubjectDTO),
    __metadata("design:type", event_credentialSubject_dto_1.DeliveryStatementCredentialSubjectDTO)
], DeliveryStatementVCDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => proof_dto_1.ProofDTO),
    __metadata("design:type", proof_dto_1.ProofDTO)
], DeliveryStatementVCDTO.prototype, "proof", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(constants_1.TICKET_TYPE),
    __metadata("design:type", String)
], DeliveryStatementVCDTO.prototype, "ticketType", void 0);
