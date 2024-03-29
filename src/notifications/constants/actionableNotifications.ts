import { NOTIFICATION_TYPE } from './notificationType'

export const ActionableNotifications = new Map<string, boolean>([
  [NOTIFICATION_TYPE.CONTRACT_CREATED, true],
  [NOTIFICATION_TYPE.CONTRACT_ACCEPTED, false],
  [NOTIFICATION_TYPE.TRANSPORT_STARTED, false],
  [NOTIFICATION_TYPE.TRANSPORT_FINISHED, false],
  [NOTIFICATION_TYPE.STORAGE_STARTED, false],
  [NOTIFICATION_TYPE.STORAGE_FINISHED, false],
  [NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_CREATED, true],
  [NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_ACCEPTED, true],
  [NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_CHANGE_REQUESTED, true],
  [NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_FINISHED, false],
  [NOTIFICATION_TYPE.TRANSFER_CUSTODY_CREATED, true],
  [NOTIFICATION_TYPE.TRANSFER_CUSTODY_ACCEPTED, true],
  [NOTIFICATION_TYPE.TRANSFER_CUSTODY_CHANGE_REQUESTED, true],
  [NOTIFICATION_TYPE.TRANSFER_CUSTODY_FINISHED, false],
  [NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_UPDATED, true],
  [NOTIFICATION_TYPE.TRANSFER_CUSTODY_UPDATED, true]
])
