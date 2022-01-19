"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = exports.EVENT_TYPE_NAME = exports.EVENT_TYPE = void 0;
const typeorm_1 = require("typeorm");
const Organization_entity_1 = require("../../organizations/entities/Organization.entity");
const Product_entity_1 = require("../../products/entities/Product.entity");
var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["CREATE"] = "CREATE";
    EVENT_TYPE["INSPECT"] = "INSPECT";
    EVENT_TYPE["TRANSPORT_START"] = "TRANSPORT_START";
    EVENT_TYPE["TRANSPORT_END"] = "TRANSPORT_END";
    EVENT_TYPE["STORAGE_START"] = "STORAGE_START";
    EVENT_TYPE["STORAGE_END"] = "STORAGE_END";
    EVENT_TYPE["TRANSFORM_UPGRADE"] = "TRANSFORM_UPGRADE";
    EVENT_TYPE["TRANSFORM_REFINE"] = "TRANSFORM_REFINE";
    EVENT_TYPE["TRANSFORM_POOL"] = "TRANSFORM_POOL";
    EVENT_TYPE["TRANSFORM_BLEND"] = "TRANSFORM_BLEND";
    EVENT_TYPE["TRANSFORM_SPLIT"] = "TRANSFORM_SPLIT";
    EVENT_TYPE["TRANSFER_OF_OWNERSHIP"] = "TRANSFER_OF_OWNERSHIP";
    EVENT_TYPE["TRANSFER_OF_CUSTODY"] = "TRANSFER_OF_CUSTODY";
    EVENT_TYPE["CREATE_QP_IN_BOND"] = "CREATE_QP_IN_BOND";
})(EVENT_TYPE = exports.EVENT_TYPE || (exports.EVENT_TYPE = {}));
exports.EVENT_TYPE_NAME = new Map([
    [EVENT_TYPE.CREATE, 'New'],
    [EVENT_TYPE.TRANSFORM_UPGRADE, 'Consumed'],
    [EVENT_TYPE.TRANSFORM_REFINE, 'Consumed'],
    [EVENT_TYPE.TRANSFORM_POOL, 'Consumed'],
    [EVENT_TYPE.TRANSFORM_BLEND, 'Consumed'],
    [EVENT_TYPE.TRANSFORM_SPLIT, 'Consumed'],
    [EVENT_TYPE.TRANSFER_OF_OWNERSHIP, 'Ownership transferred'],
    [EVENT_TYPE.TRANSFER_OF_CUSTODY, 'In Transit'],
    [EVENT_TYPE.TRANSPORT_START, 'Scheduled'],
    [EVENT_TYPE.CREATE_QP_IN_BOND, 'Declared'],
    [EVENT_TYPE.TRANSPORT_END, 'Transport Completed'],
    [EVENT_TYPE.INSPECT, 'Inspected'],
    [EVENT_TYPE.STORAGE_START, 'In Storage'],
    [EVENT_TYPE.STORAGE_END, 'Out of Storage']
]);
let Event = class Event {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Event.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Event.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Organization_entity_1.Organization, (organization) => organization.id, {
        cascade: true
    }),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", typeof (_a = typeof Organization_entity_1.Organization !== "undefined" && Organization_entity_1.Organization) === "function" ? _a : Object)
], Event.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: '' }),
    __metadata("design:type", String)
], Event.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Product_entity_1.Product, (product) => product.events),
    __metadata("design:type", Array)
], Event.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true }),
    __metadata("design:type", String)
], Event.prototype, "txHash", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Event.prototype, "txTimestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], Event.prototype, "eventVC", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true }),
    __metadata("design:type", String)
], Event.prototype, "eventVCHash", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6 }),
    __metadata("design:type", Date)
], Event.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Event.prototype, "s3DocumentsFolderPath", void 0);
Event = __decorate([
    (0, typeorm_1.Entity)()
], Event);
exports.Event = Event;
