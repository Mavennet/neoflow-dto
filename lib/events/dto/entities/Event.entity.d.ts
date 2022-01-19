import { Organization } from '../../organizations/entities/Organization.entity';
import { Product } from '../../products/entities/Product.entity';
export declare enum EVENT_TYPE {
    CREATE = "CREATE",
    INSPECT = "INSPECT",
    TRANSPORT_START = "TRANSPORT_START",
    TRANSPORT_END = "TRANSPORT_END",
    STORAGE_START = "STORAGE_START",
    STORAGE_END = "STORAGE_END",
    TRANSFORM_UPGRADE = "TRANSFORM_UPGRADE",
    TRANSFORM_REFINE = "TRANSFORM_REFINE",
    TRANSFORM_POOL = "TRANSFORM_POOL",
    TRANSFORM_BLEND = "TRANSFORM_BLEND",
    TRANSFORM_SPLIT = "TRANSFORM_SPLIT",
    TRANSFER_OF_OWNERSHIP = "TRANSFER_OF_OWNERSHIP",
    TRANSFER_OF_CUSTODY = "TRANSFER_OF_CUSTODY",
    CREATE_QP_IN_BOND = "CREATE_QP_IN_BOND"
}
export declare const EVENT_TYPE_NAME: Map<string, string>;
export declare class Event {
    id: string;
    createdById: number;
    createdBy: Organization;
    eventType: EVENT_TYPE;
    products: Product[];
    txHash: string;
    txTimestamp: string;
    eventVC: any;
    eventVCHash: string;
    createdAt: Date;
    s3DocumentsFolderPath: string;
}
