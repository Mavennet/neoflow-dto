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
exports.SaveS3DocumentsFolderPathDTO = void 0;
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
const swagger_1 = require("@nestjs/swagger");
class SaveS3DocumentsFolderPathDTO {
    uploadType;
    senderS3DocumentsFolderPath;
    receiverS3DocumentsFolderPath;
    s3DocumentsFolderPath;
}
exports.SaveS3DocumentsFolderPathDTO = SaveS3DocumentsFolderPathDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.UPLOAD_TYPE),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "uploadType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => o.uploadType === constants_1.UPLOAD_TYPE.TRANSFER_REQUEST && !o.receiverS3DocumentsFolderPath),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "senderS3DocumentsFolderPath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => o.uploadType === constants_1.UPLOAD_TYPE.TRANSFER_REQUEST && !o.senderS3DocumentsFolderPath),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "receiverS3DocumentsFolderPath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateIf)((o) => o.uploadType === constants_1.UPLOAD_TYPE.CONTRACT || o.uploadType === constants_1.UPLOAD_TYPE.PRODUCT_EVENT),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "s3DocumentsFolderPath", void 0);
