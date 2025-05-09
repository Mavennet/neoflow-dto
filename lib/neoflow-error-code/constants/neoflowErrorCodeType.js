"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.ErrorGroup = exports.ErrorOrganizationType = void 0;
var ErrorOrganizationType;
(function (ErrorOrganizationType) {
    ErrorOrganizationType["CLIENT"] = "1";
    ErrorOrganizationType["SHIPPER"] = "2";
    ErrorOrganizationType["PIPELINE"] = "3";
    ErrorOrganizationType["AGENCY"] = "4";
    ErrorOrganizationType["BROKER"] = "5";
    ErrorOrganizationType["UNKNOWN"] = "0";
})(ErrorOrganizationType || (exports.ErrorOrganizationType = ErrorOrganizationType = {}));
var ErrorGroup;
(function (ErrorGroup) {
    ErrorGroup["DELIVERY_SCHEDULE"] = "01";
    ErrorGroup["SHIPPER_POSTARRIVAL"] = "02";
    ErrorGroup["DELIVERY_TICKET"] = "03";
    ErrorGroup["ORGANIZATION"] = "04";
    ErrorGroup["UNKNOWN_GROUP"] = "99";
})(ErrorGroup || (exports.ErrorGroup = ErrorGroup = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INVALID_FILE_TYPE"] = "01";
    ErrorCode["INVALID_RECORDS"] = "02";
    ErrorCode["INVALID_CREATOR"] = "03";
    ErrorCode["INVALID_FORMAT"] = "04";
    ErrorCode["PRODUCT_CREATION"] = "11";
    ErrorCode["PRODUCT_GET"] = "12";
    ErrorCode["PRODUCT_UPDATE"] = "13";
    ErrorCode["PRODUCT_DELETE"] = "14";
    ErrorCode["PRODUCT_NOT_FOUND"] = "15";
    ErrorCode["SCHEDULE_PROCEDURE_FAILED"] = "21";
    ErrorCode["TABLE_SNAPSHOT_FAILED"] = "22";
    ErrorCode["TMPL_PAIRING_FAILED"] = "23";
    ErrorCode["DUPLICATE_BATCH"] = "31";
    ErrorCode["UNAUTHORIZED"] = "32";
    ErrorCode["NOT_FOUND"] = "33";
    ErrorCode["UNKNOWN_ERROR"] = "99";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
