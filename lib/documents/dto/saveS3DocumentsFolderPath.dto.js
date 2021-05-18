var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { IsEnum, IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { UPLOAD_TYPE } from 'mavennet-dto';
export class SaveS3DocumentsFolderPathDTO {
}
__decorate([
    IsNotEmpty(),
    IsEnum(UPLOAD_TYPE),
    __metadata("design:type", typeof (_a = typeof UPLOAD_TYPE !== "undefined" && UPLOAD_TYPE) === "function" ? _a : Object)
], SaveS3DocumentsFolderPathDTO.prototype, "uploadType", void 0);
__decorate([
    ValidateIf(o => o.uploadType === UPLOAD_TYPE.TRANSFER_REQUEST && !o.receiverS3DocumentsFolderPath),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "senderS3DocumentsFolderPath", void 0);
__decorate([
    ValidateIf(o => o.uploadType === UPLOAD_TYPE.TRANSFER_REQUEST && !o.senderS3DocumentsFolderPath),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "receiverS3DocumentsFolderPath", void 0);
__decorate([
    ValidateIf(o => o.uploadType === UPLOAD_TYPE.CONTRACT || o.uploadType === UPLOAD_TYPE.PRODUCT_EVENT),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "s3DocumentsFolderPath", void 0);
