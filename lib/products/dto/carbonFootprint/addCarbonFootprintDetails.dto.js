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
exports.AddCarbonFootprintDetailsDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _1 = require("./");
const swagger_1 = require("@nestjs/swagger");
class AddCarbonFootprintDetailsDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AddCarbonFootprintDetailsDTO.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => _1.CarbonFootprintDetailsDTO }),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => _1.CarbonFootprintDetailsDTO),
    __metadata("design:type", _1.CarbonFootprintDetailsDTO)
], AddCarbonFootprintDetailsDTO.prototype, "carbonFootprintDetails", void 0);
exports.AddCarbonFootprintDetailsDTO = AddCarbonFootprintDetailsDTO;
