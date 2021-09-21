"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionableNotifications = void 0;
const notificationType_1 = require("./notificationType");
exports.ActionableNotifications = new Map([
    [notificationType_1.NOTIFICATION_TYPE.CONTRACT_CREATED, true],
    [notificationType_1.NOTIFICATION_TYPE.CONTRACT_ACCEPTED, false],
    [notificationType_1.NOTIFICATION_TYPE.TRANSPORT_STARTED, false],
    [notificationType_1.NOTIFICATION_TYPE.TRANSPORT_FINISHED, false],
    [notificationType_1.NOTIFICATION_TYPE.STORAGE_STARTED, false],
    [notificationType_1.NOTIFICATION_TYPE.STORAGE_FINISHED, false],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_CREATED, true],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_ACCEPTED, true],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_CHANGE_REQUESTED, true],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_FINISHED, false],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_CUSTODY_CREATED, true],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_CUSTODY_ACCEPTED, true],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_CUSTODY_CHANGE_REQUESTED, true],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_CUSTODY_FINISHED, false],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_UPDATED, true],
    [notificationType_1.NOTIFICATION_TYPE.TRANSFER_CUSTODY_UPDATED, true]
]);
