'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0 = require('class-validator');
var require$$1 = require('class-transformer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);

var index_cjs = {};

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var classValidator = require$$0__default['default'];
var classTransformer = require$$1__default['default'];

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

class AnalyticsDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "currentMillis", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsUUID(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "productId", void 0);

class ValidationDTO {
}

class ConfirmContractDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], ConfirmContractDTO.prototype, "contractId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], ConfirmContractDTO.prototype, "receiver", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsBoolean(),
    __metadata("design:type", Boolean)
], ConfirmContractDTO.prototype, "status", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ConfirmContractDTO.prototype, "destination", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ConfirmContractDTO.prototype, "comment", void 0);

class CreateContractDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "sender", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "receiver", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "destination", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "startDate", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "endDate", void 0);

class DeleteContractsDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayMinSize(1),
    __metadata("design:type", Array)
], DeleteContractsDTO.prototype, "contractIds", void 0);

class UpdateContractDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], UpdateContractDTO.prototype, "contractId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], UpdateContractDTO.prototype, "startDate", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], UpdateContractDTO.prototype, "endDate", void 0);

exports.UPLOAD_TYPE = void 0;
(function (UPLOAD_TYPE) {
    UPLOAD_TYPE["CONTRACT"] = "contract";
    UPLOAD_TYPE["PRODUCT_EVENT"] = "product_event";
    UPLOAD_TYPE["TRANSFER_REQUEST"] = "transfer_request";
})(exports.UPLOAD_TYPE || (exports.UPLOAD_TYPE = {}));

class SaveS3DocumentsFolderPathDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.UPLOAD_TYPE),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "uploadType", void 0);
__decorate([
    classValidator.ValidateIf(o => o.uploadType === exports.UPLOAD_TYPE.TRANSFER_REQUEST && !o.receiverS3DocumentsFolderPath),
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "senderS3DocumentsFolderPath", void 0);
__decorate([
    classValidator.ValidateIf(o => o.uploadType === exports.UPLOAD_TYPE.TRANSFER_REQUEST && !o.senderS3DocumentsFolderPath),
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "receiverS3DocumentsFolderPath", void 0);
__decorate([
    classValidator.ValidateIf(o => o.uploadType === exports.UPLOAD_TYPE.CONTRACT || o.uploadType === exports.UPLOAD_TYPE.PRODUCT_EVENT),
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "s3DocumentsFolderPath", void 0);

exports.JSON_TYPE = void 0;
(function (JSON_TYPE) {
    JSON_TYPE["VERIFIABLE_CREDENTIAL"] = "VerifiableCredential";
    JSON_TYPE["PLACE"] = "Place";
    JSON_TYPE["GEO_COORDINATES"] = "GeoCoordinates";
    JSON_TYPE["POSTAL_ADDRESS"] = "PostalAddress";
    JSON_TYPE["PARCEL_DELIVERY"] = "ParcelDelivery";
    JSON_TYPE["PRODUCT"] = "Product";
    JSON_TYPE["ORGANIZATION"] = "Organization";
    JSON_TYPE["OBSERVATION"] = "Observation";
    JSON_TYPE["MEASURED_VALUE"] = "MeasuredValue";
    JSON_TYPE["QUANTITATIVE_VALUE"] = "QuantitativeValue";
    JSON_TYPE["MECHANICAL_PROPERTY"] = "MechanicalProperty";
    JSON_TYPE["CHEMICAL_PROPERTY"] = "ChemicalProperty";
    JSON_TYPE["INBOND"] = "Inbond";
    JSON_TYPE["BILL_OF_LADING"] = "BillOfLading";
    JSON_TYPE["ED25519_SIGNATURE_2018"] = "Ed25519Signature2018";
    JSON_TYPE["QP_IN_BOND_EVENT_CREDENTIAL"] = "QPInBondEventCredential";
})(exports.JSON_TYPE || (exports.JSON_TYPE = {}));

exports.PROOF_PURPOSE_TYPE = void 0;
(function (PROOF_PURPOSE_TYPE) {
    PROOF_PURPOSE_TYPE["ASSERTION_METHOD"] = "assertionMethod";
    PROOF_PURPOSE_TYPE["AUTHENTICATION"] = "authentication";
})(exports.PROOF_PURPOSE_TYPE || (exports.PROOF_PURPOSE_TYPE = {}));

class AddressDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], AddressDTO.prototype, "address", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLatitude(),
    __metadata("design:type", String)
], AddressDTO.prototype, "latitude", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLongitude(),
    __metadata("design:type", String)
], AddressDTO.prototype, "longitude", void 0);

class GeoCoordinatesDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.GEO_COORDINATES]),
    __metadata("design:type", Array)
], GeoCoordinatesDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLatitude(),
    __metadata("design:type", String)
], GeoCoordinatesDTO.prototype, "latitude", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLongitude(),
    __metadata("design:type", String)
], GeoCoordinatesDTO.prototype, "longitude", void 0);

class IssuerDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayMinSize(1),
    classValidator.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], IssuerDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], IssuerDTO.prototype, "id", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsUrl(),
    __metadata("design:type", String)
], IssuerDTO.prototype, "url", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], IssuerDTO.prototype, "name", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], IssuerDTO.prototype, "description", void 0);

class MeasurementDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.MEASURED_VALUE] || o.type === [exports.JSON_TYPE.QUANTITATIVE_VALUE]),
    __metadata("design:type", Array)
], MeasurementDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], MeasurementDTO.prototype, "unitCode", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], MeasurementDTO.prototype, "value", void 0);

class PropertyDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.MECHANICAL_PROPERTY] ||
        o.type === [exports.JSON_TYPE.CHEMICAL_PROPERTY]),
    __metadata("design:type", Array)
], PropertyDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "identifier", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "name", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "description", void 0);

class ObservationDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.OBSERVATION]),
    __metadata("design:type", Array)
], ObservationDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PropertyDTO),
    __metadata("design:type", PropertyDTO)
], ObservationDTO.prototype, "property", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => MeasurementDTO),
    __metadata("design:type", MeasurementDTO)
], ObservationDTO.prototype, "measurement", void 0);

class PostalAddressDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.POSTAL_ADDRESS]),
    __metadata("design:type", Array)
], PostalAddressDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "organizationName", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "streetAddress", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressLocality", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressRegion", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "postalCode", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressCountry", void 0);

class OrganizationDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.ORGANIZATION]),
    __metadata("design:type", Array)
], OrganizationDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "name", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "description", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], OrganizationDTO.prototype, "address", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsEmail(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "email", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "phoneNumber", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "faxNumber", void 0);

class ParcelDeliveryDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.PARCEL_DELIVERY]),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], ParcelDeliveryDTO.prototype, "originAddress", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], ParcelDeliveryDTO.prototype, "deliveryAddress", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "deliveryMethod", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "trackingNumber", void 0);

class PlaceDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.PLACE]),
    __metadata("design:type", Array)
], PlaceDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PlaceDTO.prototype, "globalLocationNumber", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => GeoCoordinatesDTO),
    __metadata("design:type", GeoCoordinatesDTO)
], PlaceDTO.prototype, "geo", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], PlaceDTO.prototype, "address", void 0);

class ProofDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE),
    classValidator.Equals(exports.JSON_TYPE.ED25519_SIGNATURE_2018),
    __metadata("design:type", String)
], ProofDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsDateString(),
    __metadata("design:type", Date)
], ProofDTO.prototype, "created", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ProofDTO.prototype, "jws", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.PROOF_PURPOSE_TYPE),
    __metadata("design:type", String)
], ProofDTO.prototype, "proofPurpose", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], ProofDTO.prototype, "verificationMethod", void 0);

class VerifiableCredentialDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayMinSize(2),
    classValidator.ArrayMaxSize(2),
    classValidator.Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/')),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "@context", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsUrl(),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "id", void 0);
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayMinSize(2),
    classValidator.ArrayMaxSize(2),
    classValidator.Validate(o => o.type.includes('VerifiableCredential')),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "issuer", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsDateString(),
    __metadata("design:type", Date)
], VerifiableCredentialDTO.prototype, "issuanceDate", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => ProofDTO),
    __metadata("design:type", ProofDTO)
], VerifiableCredentialDTO.prototype, "proof", void 0);

exports.NOTIFICATION_TYPE = void 0;
(function (NOTIFICATION_TYPE) {
    NOTIFICATION_TYPE["CONTRACT_CREATED"] = "CONTRACT_CREATED";
    NOTIFICATION_TYPE["CONTRACT_ACCEPTED"] = "CONTRACT_ACCEPTED";
    NOTIFICATION_TYPE["CONTRACT_REJECTED"] = "CONTRACT_REJECTED";
    NOTIFICATION_TYPE["CONTRACT_UPDATED"] = "CONTRACT_UPDATED";
    NOTIFICATION_TYPE["TRANSPORT_STARTED"] = "TRANSPORT_STARTED";
    NOTIFICATION_TYPE["TRANSPORT_FINISHED"] = "TRANSPORT_FINISHED";
    NOTIFICATION_TYPE["STORAGE_STARTED"] = "STORAGE_STARTED";
    NOTIFICATION_TYPE["STORAGE_FINISHED"] = "STORAGE_FINISHED";
    NOTIFICATION_TYPE["PRODUCT_SHARED"] = "PRODUCT_SHARED";
    NOTIFICATION_TYPE["PRODUCT_UNSHARED"] = "PRODUCT_UNSHARED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_CREATED"] = "TRANSFER_OWNERSHIP_CREATED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_ACCEPTED"] = "TRANSFER_OWNERSHIP_ACCEPTED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_CHANGE_REQUESTED"] = "TRANSFER_OWNERSHIP_CHANGE_REQUESTED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_FINISHED"] = "TRANSFER_OWNERSHIP_FINISHED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_CREATED"] = "TRANSFER_CUSTODY_CREATED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_ACCEPTED"] = "TRANSFER_CUSTODY_ACCEPTED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_CHANGE_REQUESTED"] = "TRANSFER_CUSTODY_CHANGE_REQUESTED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_FINISHED"] = "TRANSFER_CUSTODY_FINISHED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_UPDATED"] = "TRANSFER_OWNERSHIP_UPDATED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_UPDATED"] = "TRANSFER_CUSTODY_UPDATED";
})(exports.NOTIFICATION_TYPE || (exports.NOTIFICATION_TYPE = {}));

exports.SOCKET_EVENT_NAME = void 0;
(function (SOCKET_EVENT_NAME) {
    SOCKET_EVENT_NAME["CONTRACTS_CHANGED"] = "CONTRACTS_CHANGED";
    SOCKET_EVENT_NAME["NOTIFICATIONS_CHANGED"] = "NOTIFICATIONS_CHANGED";
    SOCKET_EVENT_NAME["PRODUCTS_CHANGED"] = "PRODUCTS_CHANGED";
    SOCKET_EVENT_NAME["ACTIONS_CHANGED"] = "ACTIONS_CHANGED";
    SOCKET_EVENT_NAME["TRANSPORT_CHANGED"] = "TRANSPORT_CHANGED";
    SOCKET_EVENT_NAME["STORAGE_CHANGED"] = "STORAGE_CHANGED";
})(exports.SOCKET_EVENT_NAME || (exports.SOCKET_EVENT_NAME = {}));

class NotificationDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "notificationId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.NOTIFICATION_TYPE),
    __metadata("design:type", String)
], NotificationDTO.prototype, "notificationType", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsUUID(),
    __metadata("design:type", String)
], NotificationDTO.prototype, "productId", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "contractId", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "transferRequestId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], NotificationDTO.prototype, "sender", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], NotificationDTO.prototype, "senderName", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsBoolean(),
    __metadata("design:type", Boolean)
], NotificationDTO.prototype, "read", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsDateString(),
    __metadata("design:type", Date)
], NotificationDTO.prototype, "createdAt", void 0);

class CategorizedNotificationsDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ValidateNested({ each: true }),
    classTransformer.Type(() => NotificationDTO),
    __metadata("design:type", Array)
], CategorizedNotificationsDTO.prototype, "new", void 0);
__decorate([
    classValidator.IsArray(),
    classValidator.ValidateNested({ each: true }),
    classTransformer.Type(() => NotificationDTO),
    __metadata("design:type", Array)
], CategorizedNotificationsDTO.prototype, "previous", void 0);

class ReadNotificationDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumberString(),
    __metadata("design:type", Number)
], ReadNotificationDTO.prototype, "notificationId", void 0);

class SocketEventDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SocketEventDTO.prototype, "eventName", void 0);

class UpdateNotificationSettingsDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateNotificationSettingsDTO.prototype, "actionableOnly", void 0);

exports.ORGANIZATION_ROLE = void 0;
(function (ORGANIZATION_ROLE) {
    ORGANIZATION_ROLE["CLIENT"] = "client";
    ORGANIZATION_ROLE["AGENCY"] = "agency";
    ORGANIZATION_ROLE["BROKER"] = "broker";
})(exports.ORGANIZATION_ROLE || (exports.ORGANIZATION_ROLE = {}));

class CreateOrganizationDto {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "name", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEmail(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "email", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "address", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsPhoneNumber('CA'),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "phone", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.ORGANIZATION_ROLE),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "role", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "did", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "backendLink", void 0);

class ProductDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.PRODUCT]),
    __metadata("design:type", Array)
], ProductDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => OrganizationDTO),
    __metadata("design:type", OrganizationDTO)
], ProductDTO.prototype, "manufacturer", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ProductDTO.prototype, "name", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ProductDTO.prototype, "description", void 0);

class ProductCredentialSubjectDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumberString(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "HSCode", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "productionDate", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], ProductCredentialSubjectDTO.prototype, "facility", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => ProductDTO),
    __metadata("design:type", ProductDTO)
], ProductCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    classValidator.IsArray(),
    classValidator.ValidateNested({ each: true }),
    classTransformer.Type(() => ObservationDTO),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTO.prototype, "observation", void 0);

exports.AddressDTO = AddressDTO;
exports.AnalyticsDTO = AnalyticsDTO;
exports.CategorizedNotificationsDTO = CategorizedNotificationsDTO;
exports.ConfirmContractDTO = ConfirmContractDTO;
exports.CreateContractDTO = CreateContractDTO;
exports.CreateOrganizationDto = CreateOrganizationDto;
exports.DeleteContractsDTO = DeleteContractsDTO;
exports.GeoCoordinatesDTO = GeoCoordinatesDTO;
exports.IssuerDTO = IssuerDTO;
exports.MeasurementDTO = MeasurementDTO;
exports.NotificationDTO = NotificationDTO;
exports.ObservationDTO = ObservationDTO;
exports.OrganizationDTO = OrganizationDTO;
exports.ParcelDeliveryDTO = ParcelDeliveryDTO;
exports.PlaceDTO = PlaceDTO;
exports.PostalAddressDTO = PostalAddressDTO;
exports.ProductCredentialSubjectDTO = ProductCredentialSubjectDTO;
exports.ProductDTO = ProductDTO;
exports.ProofDTO = ProofDTO;
exports.PropertyDTO = PropertyDTO;
exports.ReadNotificationDTO = ReadNotificationDTO;
exports.SaveS3DocumentsFolderPathDTO = SaveS3DocumentsFolderPathDTO;
exports.SocketEventDTO = SocketEventDTO;
exports.UpdateContractDTO = UpdateContractDTO;
exports.UpdateNotificationSettingsDTO = UpdateNotificationSettingsDTO;
exports.ValidationDTO = ValidationDTO;
exports.VerifiableCredentialDTO = VerifiableCredentialDTO;
}(index_cjs));

class AnalyticsDTO extends index_cjs.AnalyticsDTO {
}

class ValidationDTO extends index_cjs.ValidationDTO {
}

class ConfirmContractDTO extends index_cjs.ConfirmContractDTO {
}

class CreateContractDTO extends index_cjs.CreateContractDTO {
}

class DeleteContractsDTO extends index_cjs.DeleteContractsDTO {
}

class UpdateContractDTO extends index_cjs.UpdateContractDTO {
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var _a;
class SaveS3DocumentsFolderPathDTO {
}
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsEnum(index_cjs.UPLOAD_TYPE),
    __metadata("design:type", typeof (_a = typeof index_cjs.UPLOAD_TYPE !== "undefined" && index_cjs.UPLOAD_TYPE) === "function" ? _a : Object)
], SaveS3DocumentsFolderPathDTO.prototype, "uploadType", void 0);
__decorate([
    require$$0.ValidateIf(o => o.uploadType === index_cjs.UPLOAD_TYPE.TRANSFER_REQUEST && !o.receiverS3DocumentsFolderPath),
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "senderS3DocumentsFolderPath", void 0);
__decorate([
    require$$0.ValidateIf(o => o.uploadType === index_cjs.UPLOAD_TYPE.TRANSFER_REQUEST && !o.senderS3DocumentsFolderPath),
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "receiverS3DocumentsFolderPath", void 0);
__decorate([
    require$$0.ValidateIf(o => o.uploadType === index_cjs.UPLOAD_TYPE.CONTRACT || o.uploadType === index_cjs.UPLOAD_TYPE.PRODUCT_EVENT),
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "s3DocumentsFolderPath", void 0);

exports.EVENT_TYPE = void 0;
(function (EVENT_TYPE) {
    EVENT_TYPE["CREATE"] = "Create";
    EVENT_TYPE["TRANSFER_CUSTODY"] = "TransferCustody";
    EVENT_TYPE["TRANSFER_OWNERSHIP"] = "TransferOwnership";
    EVENT_TYPE["TRANSFORMATION"] = "Transformation";
    EVENT_TYPE["TRANSPORT_START"] = "TransportStart";
    EVENT_TYPE["TRANSPORT_END"] = "TransportEnd";
    EVENT_TYPE["STORAGE_START"] = "StorageStart";
    EVENT_TYPE["STORAGE_END"] = "StorageEnd";
    EVENT_TYPE["INSPECT"] = "Inspect";
    EVENT_TYPE["INBOND"] = "Inbond";
})(exports.EVENT_TYPE || (exports.EVENT_TYPE = {}));

exports.TRANSFORM_TYPE = void 0;
(function (TRANSFORM_TYPE) {
    TRANSFORM_TYPE["CASTING"] = "Casting";
    TRANSFORM_TYPE["FABRICATE"] = "Fabricate";
    TRANSFORM_TYPE["FINISHING"] = "Finishing";
    TRANSFORM_TYPE["SMELT"] = "Smelt";
})(exports.TRANSFORM_TYPE || (exports.TRANSFORM_TYPE = {}));

exports.PRODUCT_NAME = void 0;
(function (PRODUCT_NAME) {
    PRODUCT_NAME["METALLURGICAL_COKE"] = "Metallurgical Coke";
    PRODUCT_NAME["IRON_ORE"] = "Iron Ore";
    PRODUCT_NAME["SCRAP_STEEL"] = "Scrap Steel";
    PRODUCT_NAME["HEAT"] = "Heat";
    PRODUCT_NAME["CARBON_ALLOY_SEMI"] = "Carbon and alloy semi-finished products";
    PRODUCT_NAME["CARBON_ALLOY_FLAT"] = "Carbon and alloy flat product";
    PRODUCT_NAME["CARBON_ALLOY_PIPE_TUBE"] = "Carbon and alloy pipe and tube products";
})(exports.PRODUCT_NAME || (exports.PRODUCT_NAME = {}));

exports.JSON_TYPE_METAL = void 0;
(function (JSON_TYPE_METAL) {
    JSON_TYPE_METAL["METAL_PRODUCT"] = "MetalProduct";
    JSON_TYPE_METAL["CREATION_EVENT_CREDENTIAL"] = "CreationEventCredential";
    JSON_TYPE_METAL["EVENT_CREDENTIAL"] = "EventCredential";
    JSON_TYPE_METAL["PRODUCT_CREATION_EVENT_CREDENTIAL"] = "ProductCreationEventCredential";
})(exports.JSON_TYPE_METAL || (exports.JSON_TYPE_METAL = {}));

class AddressDTO extends index_cjs.AddressDTO {
}

class GeoCoordinatesDTO extends index_cjs.GeoCoordinatesDTO {
}

class IssuerDTO extends index_cjs.IssuerDTO {
}

class MeasurementDTO extends index_cjs.MeasurementDTO {
}

class ObservationDTO extends index_cjs.ObservationDTO {
}

class OrganizationDTO extends index_cjs.OrganizationDTO {
}

class ParcelDeliveryDTO extends index_cjs.ParcelDeliveryDTO {
}

class PlaceDTO extends index_cjs.PlaceDTO {
}

class PostalAddressDTO extends index_cjs.PostalAddressDTO {
}

class ProofDTO extends index_cjs.ProofDTO {
}

class PropertyDTO extends index_cjs.PropertyDTO {
}

class VerifiableCredentialDTO extends index_cjs.VerifiableCredentialDTO {
}
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayNotEmpty(),
    require$$0.IsEnum({
        ...index_cjs.JSON_TYPE,
        ...exports.JSON_TYPE_METAL
    }, { each: true }),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "type", void 0);

class ProductDTO extends index_cjs.ProductDTO {
}
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsEnum(exports.PRODUCT_NAME),
    __metadata("design:type", String)
], ProductDTO.prototype, "name", void 0);
__decorate([
    require$$0.IsNotEmptyObject(),
    require$$0.ValidateNested(),
    require$$1.Type(() => MeasurementDTO),
    __metadata("design:type", MeasurementDTO)
], ProductDTO.prototype, "weight", void 0);
__decorate([
    require$$0.IsOptional(),
    require$$0.IsString(),
    __metadata("design:type", String)
], ProductDTO.prototype, "id", void 0);

class ProductCredentialSubjectDTO extends index_cjs.ProductCredentialSubjectDTO {
}
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayNotEmpty(),
    require$$0.IsEnum(exports.JSON_TYPE_METAL, { each: true }),
    require$$0.Validate(o => o.type === [exports.JSON_TYPE_METAL.METAL_PRODUCT]),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsNumberString(),
    require$$0.ValidateIf(o => o.name !== exports.PRODUCT_NAME.HEAT),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "HSCode", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsNumberString(),
    require$$0.ValidateIf(o => o.name === exports.PRODUCT_NAME.HEAT),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "heatNumber", void 0);
__decorate([
    require$$0.IsNotEmptyObject(),
    require$$0.ValidateNested(),
    require$$1.Type(() => ProductDTO),
    __metadata("design:type", ProductDTO)
], ProductCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    require$$0.IsOptional(),
    require$$0.IsString(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "grade", void 0);

class ProductVCDTO extends VerifiableCredentialDTO {
}
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayMinSize(3),
    require$$0.ArrayMaxSize(3),
    require$$0.Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/') &&
        o['@context'].includes('https://mavennet.github.io/contexts/metal-product-v1.0.jsonld')),
    __metadata("design:type", Array)
], ProductVCDTO.prototype, "@context", void 0);
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayMinSize(2),
    require$$0.ArrayMaxSize(2),
    require$$0.Validate(o => o.type.includes(index_cjs.JSON_TYPE.VERIFIABLE_CREDENTIAL) &&
        o.type.includes(exports.JSON_TYPE_METAL.METAL_PRODUCT)),
    __metadata("design:type", Array)
], ProductVCDTO.prototype, "type", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUrl(),
    __metadata("design:type", String)
], ProductVCDTO.prototype, "id", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.ValidateNested(),
    require$$1.Type(() => ProductCredentialSubjectDTO),
    __metadata("design:type", ProductCredentialSubjectDTO)
], ProductVCDTO.prototype, "credentialSubject", void 0);

class EventCreateCredentialSubjectDTOBase {
}
__decorate([
    require$$0.IsOptional(),
    require$$0.IsString(),
    __metadata("design:type", String)
], EventCreateCredentialSubjectDTOBase.prototype, "description", void 0);
__decorate([
    require$$0.IsNotEmptyObject(),
    require$$0.ValidateNested(),
    require$$1.Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], EventCreateCredentialSubjectDTOBase.prototype, "place", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    require$$0.Matches(/^did:/),
    __metadata("design:type", String)
], EventCreateCredentialSubjectDTOBase.prototype, "eventCreator", void 0);
class AGENT_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
}
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUUID(),
    __metadata("design:type", String)
], AGENT_EventCreateCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUUID(),
    __metadata("design:type", String)
], AGENT_EventCreateCredentialSubjectDTO.prototype, "productId", void 0);
class CORE_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
}
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayMinSize(1),
    __metadata("design:type", Array)
], CORE_EventCreateCredentialSubjectDTO.prototype, "@context", void 0);
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayMinSize(2),
    require$$0.ArrayMaxSize(2),
    require$$0.Validate(o => o.type.includes(exports.JSON_TYPE_METAL.EVENT_CREDENTIAL) &&
        o.type.includes(exports.JSON_TYPE_METAL.PRODUCT_CREATION_EVENT_CREDENTIAL)),
    __metadata("design:type", Array)
], CORE_EventCreateCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUrl(),
    __metadata("design:type", String)
], CORE_EventCreateCredentialSubjectDTO.prototype, "eventId", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUrl(),
    __metadata("design:type", String)
], CORE_EventCreateCredentialSubjectDTO.prototype, "productId", void 0);

class EventCreateVCDTO extends VerifiableCredentialDTO {
}
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayMinSize(3),
    require$$0.ArrayMaxSize(3),
    require$$0.Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/') &&
        o['@context'].includes('https://mavennet.github.io/contexts/metal-product-EVENT-v1.0.jsonld')),
    __metadata("design:type", Array)
], EventCreateVCDTO.prototype, "@context", void 0);
__decorate([
    require$$0.IsArray(),
    require$$0.ArrayMinSize(2),
    require$$0.ArrayMaxSize(2),
    require$$0.Validate(o => o.type.includes(index_cjs.JSON_TYPE.VERIFIABLE_CREDENTIAL) &&
        o.type.includes(exports.JSON_TYPE_METAL.CREATION_EVENT_CREDENTIAL)),
    __metadata("design:type", Array)
], EventCreateVCDTO.prototype, "type", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUrl(),
    __metadata("design:type", String)
], EventCreateVCDTO.prototype, "id", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.ValidateNested(),
    require$$1.Type(() => CORE_EventCreateCredentialSubjectDTO),
    __metadata("design:type", CORE_EventCreateCredentialSubjectDTO)
], EventCreateVCDTO.prototype, "credentialSubject", void 0);

class AGENT_CreateProductDTO {
}
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUUID(),
    __metadata("design:type", String)
], AGENT_CreateProductDTO.prototype, "productId", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.ValidateNested(),
    require$$1.Type(() => ProductCredentialSubjectDTO),
    __metadata("design:type", ProductCredentialSubjectDTO)
], AGENT_CreateProductDTO.prototype, "productCredentialSubject", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.ValidateNested(),
    require$$1.Type(() => AGENT_EventCreateCredentialSubjectDTO),
    __metadata("design:type", AGENT_EventCreateCredentialSubjectDTO)
], AGENT_CreateProductDTO.prototype, "eventCredentialSubject", void 0);
class CORE_CreateProductDTO {
}
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUUID(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "productId", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.ValidateNested(),
    require$$1.Type(() => ProductVCDTO),
    __metadata("design:type", ProductVCDTO)
], CORE_CreateProductDTO.prototype, "productVC", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "productVCHash", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsUUID(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "eventId", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.ValidateNested(),
    require$$1.Type(() => EventCreateVCDTO),
    __metadata("design:type", EventCreateVCDTO)
], CORE_CreateProductDTO.prototype, "eventVC", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "eventVCHash", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "txHash", void 0);
__decorate([
    require$$0.IsNotEmpty(),
    require$$0.IsString(),
    __metadata("design:type", String)
], CORE_CreateProductDTO.prototype, "txTimestamp", void 0);

class CategorizedNotificationsDTO extends index_cjs.CategorizedNotificationsDTO {
}

class NotificationDTO extends index_cjs.NotificationDTO {
}

class ReadNotificationDTO extends index_cjs.ReadNotificationDTO {
}

class SocketEventDTO extends index_cjs.SocketEventDTO {
}

class UpdateNotificationSettingsDTO extends index_cjs.UpdateNotificationSettingsDTO {
}

class CreateOrganizationDto extends index_cjs.CreateOrganizationDto {
}

exports.AGENT_CreateProductDTO = AGENT_CreateProductDTO;
exports.AGENT_EventCreateCredentialSubjectDTO = AGENT_EventCreateCredentialSubjectDTO;
exports.AddressDTO = AddressDTO;
exports.AnalyticsDTO = AnalyticsDTO;
exports.CORE_CreateProductDTO = CORE_CreateProductDTO;
exports.CORE_EventCreateCredentialSubjectDTO = CORE_EventCreateCredentialSubjectDTO;
exports.CategorizedNotificationsDTO = CategorizedNotificationsDTO;
exports.ConfirmContractDTO = ConfirmContractDTO;
exports.CreateContractDTO = CreateContractDTO;
exports.CreateOrganizationDto = CreateOrganizationDto;
exports.DeleteContractsDTO = DeleteContractsDTO;
exports.EventCreateVCDTO = EventCreateVCDTO;
exports.GeoCoordinatesDTO = GeoCoordinatesDTO;
exports.IssuerDTO = IssuerDTO;
exports.JSON_TYPE = index_cjs.JSON_TYPE;
exports.MeasurementDTO = MeasurementDTO;
exports.NotificationDTO = NotificationDTO;
exports.ORGANIZATION_ROLE = index_cjs.ORGANIZATION_ROLE;
exports.ObservationDTO = ObservationDTO;
exports.OrganizationDTO = OrganizationDTO;
exports.ParcelDeliveryDTO = ParcelDeliveryDTO;
exports.PlaceDTO = PlaceDTO;
exports.PostalAddressDTO = PostalAddressDTO;
exports.ProductCredentialSubjectDTO = ProductCredentialSubjectDTO;
exports.ProductDTO = ProductDTO;
exports.ProductVCDTO = ProductVCDTO;
exports.ProofDTO = ProofDTO;
exports.PropertyDTO = PropertyDTO;
exports.ReadNotificationDTO = ReadNotificationDTO;
exports.SaveS3DocumentsFolderPathDTO = SaveS3DocumentsFolderPathDTO;
exports.SocketEventDTO = SocketEventDTO;
exports.UpdateContractDTO = UpdateContractDTO;
exports.UpdateNotificationSettingsDTO = UpdateNotificationSettingsDTO;
exports.ValidationDTO = ValidationDTO;
exports.VerifiableCredentialDTO = VerifiableCredentialDTO;
