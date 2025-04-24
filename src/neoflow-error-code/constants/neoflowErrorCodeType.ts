// enum to indicate the source of the error
export enum ErrorOrganizationType {
  CLIENT = '1',
  SHIPPER = '2',
  PIPELINE = '3',
  AGENCY = '4',
  BROKER = '5',
  UNKNOWN = '0'
}

export enum ErrorGroup {
  DELIVERY_SCHEDULE = '01',
  SHIPPER_POSTARRIVAL = '02',
  DELIVERY_TICKET = '03',
  ORGANIZATION = '04',
  UNKNOWN_GROUP = '99'
}

export enum ErrorCode {
  INVALID_FILE_TYPE = '01',
  INVALID_RECORDS = '02',
  INVALID_CREATOR = '03',
  INVALID_FORMAT = '04',
  PRODUCT_CREATION = '11',
  PRODUCT_GET = '12',
  PRODUCT_UPDATE = '13',
  PRODUCT_DELETE = '14',
  PRODUCT_NOT_FOUND = '15',
  SCHEDULE_PROCEDURE_FAILED = '21',
  TABLE_SNAPSHOT_FAILED = '22',
  TMPL_PAIRING_FAILED = '23',
  DUPLICATE_BATCH = '31',
  UNAUTHORIZED = '32',
  NOT_FOUND = '33',
  UNKNOWN_ERROR = '99'
}
