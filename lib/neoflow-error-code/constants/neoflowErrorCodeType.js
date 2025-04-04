"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.ErrorGroup = exports.ErrorSourceRepo = void 0;
var ErrorSourceRepo;
(function (ErrorSourceRepo) {
    ErrorSourceRepo["CORE"] = "C";
    ErrorSourceRepo["AGENT"] = "A";
    ErrorSourceRepo["FRONTEND"] = "F";
})(ErrorSourceRepo || (exports.ErrorSourceRepo = ErrorSourceRepo = {}));
var ErrorGroup;
(function (ErrorGroup) {
    ErrorGroup["DELIVERY_SCHEDULE"] = "01";
    ErrorGroup["SHIPPER_POSTARRIVAL"] = "02";
})(ErrorGroup || (exports.ErrorGroup = ErrorGroup = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INVALID_FILE_TYPE"] = "01";
    ErrorCode["INVALID_RECORDS"] = "02";
    ErrorCode["DUPLICATE_BATCH"] = "03";
    ErrorCode["PRODUCT_CREATION"] = "04";
    ErrorCode["PRODUCT_GET"] = "05";
    ErrorCode["PRODUCT_UPDATE"] = "06";
    ErrorCode["PRODUCT_DELETE"] = "07";
    ErrorCode["SCHEDULE_PROCEDURE_FAILED"] = "08";
    ErrorCode["TABLE_SNAPSHOT_FAILED"] = "09";
    ErrorCode["TMPL_PAIRING_FAILED"] = "10";
    ErrorCode["UNKNOWN_ERROR"] = "99";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
