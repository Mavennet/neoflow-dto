export var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["CREATE"] = "create";
    EVENT_TYPE["TRANSFER_CUSTODY"] = "transferCustody";
    EVENT_TYPE["TRANSFER_OWNERSHIP"] = "transferOwnership";
    EVENT_TYPE["CASTING"] = "casting";
    EVENT_TYPE["SMELT"] = "smelt";
    EVENT_TYPE["FINISHING"] = "finishing";
    EVENT_TYPE["FABRICATING"] = "fabricating";
    EVENT_TYPE["TRANSPORT_START"] = "startTransport";
    EVENT_TYPE["TRANSPORT_END"] = "endTransport";
    EVENT_TYPE["STORAGE_START"] = "storageStart";
    EVENT_TYPE["STORAGE_END"] = "storageEnd";
    EVENT_TYPE["INSPECT"] = "inspect";
    EVENT_TYPE["INBOND"] = "inbond";
})(EVENT_TYPE || (EVENT_TYPE = {}));
