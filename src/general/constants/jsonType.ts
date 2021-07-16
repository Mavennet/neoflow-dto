export { JSON_TYPE } from 'mavennet-dto'

export enum JSON_TYPE_METAL {
  METAL_PRODUCT = 'MetalProduct',
  STEEL_PRODUCT = 'SteelProduct',
  CREATION_EVENT_CREDENTIAL = 'CreationEventCredential',
  EVENT_CREDENTIAL = 'EventCredential',
  PRODUCT_CREATION_EVENT_CREDENTIAL = 'ProductCreationEventCredential',
  TRANSFER_EVENT_CREDENTIAL = 'TransferEventCredential',
  TRANSFORM_EVENT_CREDENTIAL = 'TransformEventCredential',
  START_TRANSPORT_EVENT_CREDENTIAL = 'StartTransportEventCredential',
  END_TRANSPORT_EVENT_CREDENTIAL = 'EndTransportEventCredential',
  ADD_ENTRY_DETAILS_EVENT_CREDENTIAL = 'AddEntryDetailsEventCredential',
  INSPECT_EVENT_CREDENTIAL = 'InspectionEventCredential',
  MILL_TEST_CREDENTIAL = 'MillTestCredential',
  INSPECTION_REPORT = 'InspectionReport',
  START_STORAGE_EVENT_CREDENTIAL = 'StartStorageEventCredential',
  END_STORAGE_EVENT_CREDENTIAL = 'EndStorageEventCredential',
}
