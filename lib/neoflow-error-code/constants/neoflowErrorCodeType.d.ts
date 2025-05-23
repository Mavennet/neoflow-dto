export declare const ErrorOrganizationType: {
    readonly CLIENT: "1";
    readonly SHIPPER: "2";
    readonly PIPELINE: "3";
    readonly AGENCY: "4";
    readonly BROKER: "5";
    readonly UNKNOWN: "0";
};
export declare const ErrorGroup: {
    readonly DELIVERY_SCHEDULE: "01";
    readonly SHIPPER_POSTARRIVAL: "02";
    readonly DELIVERY_TICKET: "03";
    readonly ORGANIZATION: "04";
    readonly ADVANCE_MANIFEST: "05";
    readonly CONTRACT: "06";
    readonly CREDENTIAL: "07";
    readonly DOCUMENT: "08";
    readonly REVOCATION: "09";
    readonly EVENT: "10";
    readonly UNKNOWN_GROUP: "99";
};
export declare const ErrorCode: {
    readonly UNAUTHORIZED: "01";
    readonly NOT_FOUND: "02";
    readonly INVALID_FILE: "03";
    readonly INVALID_INPUT_DETAIL: "04";
    readonly INVALID_FORMAT: "05";
    readonly INVALID_CREDENTIAL: "06";
    readonly INVALID_DATE: "07";
    readonly CREATION_FAILED: "10";
    readonly FILE_UPLOAD_FAILED: "11";
    readonly REVOKE_FAILED: "12";
    readonly DELETE_FAILED: "13";
    readonly DB_OPERATION_FAILED: "14";
    readonly S3_OPERATION_FAILED: "15";
    readonly HTTP_OPERATION_FAILED: "16";
    readonly CONTRACT_OPERATION_FAILED: "17";
    readonly VERIFICATION_FAILED: "18";
    readonly REVOCATION_FAILED: "19";
    readonly EVENT_OPERATION_FAILED: "20";
    readonly EXISTING: "30";
    readonly REPEATED_ACTION: "31";
    readonly NULL_INPUT: "32";
    readonly UNKNOWN_ERROR: "99";
};
