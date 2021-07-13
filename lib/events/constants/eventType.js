"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_TYPE = void 0;
var EVENT_TYPE;
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
    EVENT_TYPE["MILL_TEST_REPORT"] = "MillTestReport";
})(EVENT_TYPE = exports.EVENT_TYPE || (exports.EVENT_TYPE = {}));
