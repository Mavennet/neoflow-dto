export var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["CREATE"] = "Create";
    EVENT_TYPE["TRANSFER_CUSTODY"] = "TransferCustody";
    EVENT_TYPE["TRANSFER_OWNERSHIP"] = "TransferOwnership";
    EVENT_TYPE["CASTING"] = "Casting";
    EVENT_TYPE["SMELT"] = "Smelt";
    EVENT_TYPE["FINISHING"] = "Finishing";
    EVENT_TYPE["FABRICATING"] = "Fabricating";
    EVENT_TYPE["TRANSPORT_START"] = "TransportStart";
    EVENT_TYPE["TRANSPORT_END"] = "TransportEnd";
    EVENT_TYPE["STORAGE_START"] = "StorageStart";
    EVENT_TYPE["STORAGE_END"] = "StorageEnd";
    EVENT_TYPE["INSPECT"] = "Inspect";
    EVENT_TYPE["INBOND"] = "Inbond";
})(EVENT_TYPE || (EVENT_TYPE = {}));