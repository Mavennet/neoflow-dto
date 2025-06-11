/**
 * This file contains constants for NeoflowExceptions. NeoflowExceptions have 5 components
 * 1) Prefix "EC" or "EA"(predefined in neoflow-error-code-service of core and org): to indicate the source of error (EC for Core, EA for Org Agent).
 * 2) Organization Type(found in this file): Whether they are client, shipper, pipeline, agency, broker, etc.
 * 3) Organization ID(defined in Neoflow's DB): The unique ID of the organization that caused the error.
 * 4) Error Group(found in this file): which represents the service which caused the error.
 * 5) Error Code(found in this file): which is the specific error code that represents the error, please find the most suitable error code for your use case.
 */

// Item 2 in the list above
export const ErrorOrganizationType = {
  CLIENT: '1',
  SHIPPER: '2',
  PIPELINE: '3',
  AGENCY: '4',
  BROKER: '5',
  UNKNOWN: '0'
} as const

// Item 4 in the list above. Usually corresponds to the service that caused the error.
export const ErrorGroup = {
  DELIVERY_SCHEDULE: '01',
  SHIPPER_POSTARRIVAL: '02',
  DELIVERY_TICKET: '03',
  ORGANIZATION: '04',
  ADVANCE_MANIFEST: '05',
  CONTRACT: '06',
  CREDENTIAL: '07',
  DOCUMENT: '08',
  REVOCATION: '09',
  EVENT: '10',
  PIPELINE_POSTARRIVAL: '11',
  PRODUCT_CERTIFY: '12',
  PRODUCT_CREATE: '13',
  PRODUCT_DELETE: '14',
  PRODUCT_GET: '15',
  PRODUCT_INSPECT: '16',
  PRODUCT_SHARE: '17',
  PRODUCT_TRANSPORT: '18',
  PRODUCT_UPDATE: '19',
  PRODUCT_STORE: '20',
  DELIVERY_STATEMENT: '21',
  LOCATION: '22',
  NOTIFICATION: '23',
  PRICING: '24',
  ENTRY_NUMBER: '25',
  SHARE_VC: '26',
  SETTINGS: '27',
  USMCA_CERT: '28',
  READ_FILE: '29',
  USER: '30',
  VAULT: '31',
  UNKNOWN_GROUP: '99'
} as const

// Item 5 in the list above
export const ErrorCode = {
  UNAUTHORIZED: '01', // This is a generic error code for unauthorized access
  NOT_FOUND: '02', // This is a generic error code for not found resources
  INVALID_INPUT_DETAIL: '03', // When input details, including "batches" in files, are not valid, e.g., missing required fields or incorrect data types
  INVALID_CREDENTIAL: '04', // Invalid verifiable credentials
  INVALID_DATE: '05', // When a date is not in the expected format or is invalid
  INVALID_STATUS: '06', // When a status is not valid
  EXISTING: '07', // When an entity already exists, e.g., product, delivery schedule, etc.
  REPEATED_ACTION: '08', // When an action is repeated, e.g., trying to create a product that already exists
  NULL_INPUT: '09', // When an input is null or undefined
  CREATION_FAILED: '20', // When an entity creation fails, e.g., product, delivery schedule, etc.
  DELETE_FAILED: '21', // When an entity deletion fails, e.g., product, delivery schedule, etc.
  DB_OPERATION_FAILED: '22', // When a database operation fails, e.g., create, update, delete, etc.
  S3_OPERATION_FAILED: '23', // When an aws S3 operation fails
  HTTP_OPERATION_FAILED: '24', // When an HTTP operation fails, usually call from org to core
  CONTRACT_OPERATION_FAILED: '25', // When a contract operation fails
  REVOCATION_FAILED: '26', // When revocation fails (advance manifest, delivery ticket, etc.)
  EVENT_OPERATION_FAILED: '27', // When an event operation fails
  PRODUCT_OPERATION_FAILED: '28', // When a product operation fails
  STATEMENT_OPERATION_FAILED: '29', // When a statement operation fails
  NOTIFICATION_OPERATION_FAILED: '30', // When a notification operation fails
  PRICING_OPERATION_FAILED: '31', // When a pricing operation fails
  SETTINGS_OPERATION_FAILED: '32', // When a settings operation fails
  USER_OPERATION_FAILED: '33', // When a user operation fails
  FILE_ANALYSIS_FAILED: '34', // When file analysis fails eg. OCR
  FILE_UPLOAD_FAILED: '35', // When file does not meet the required format or isn't valid for any reason
  UNKNOWN_ERROR: '99'
} as const
