export declare enum ErrorSourceRepo {
    CORE = "C",
    AGENT = "A",
    FRONTEND = "F"
}
export declare enum ErrorOrganizationType {
    CLIENT = "1",
    SHIPPER = "2",
    PIPELINE = "3",
    AGENCY = "4",
    BROKER = "5"
}
export declare enum ErrorGroup {
    DELIVERY_SCHEDULE = "01",
    SHIPPER_POSTARRIVAL = "02"
}
export declare enum ErrorCode {
    INVALID_FILE_TYPE = "01",
    INVALID_RECORDS = "02",
    DUPLICATE_BATCH = "03",
    PRODUCT_CREATION = "04",
    PRODUCT_GET = "05",
    PRODUCT_UPDATE = "06",
    PRODUCT_DELETE = "07",
    SCHEDULE_PROCEDURE_FAILED = "08",
    TABLE_SNAPSHOT_FAILED = "09",
    TMPL_PAIRING_FAILED = "10",
    UNKNOWN_ERROR = "99"
}
