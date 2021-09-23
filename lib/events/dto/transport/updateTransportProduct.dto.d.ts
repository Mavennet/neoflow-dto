import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants';
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants';
export declare class AGENT_UpdateTransportProductDTO {
    productId: string;
    eventId: string;
    revokeEventId: string;
    category: PRODUCT_CATEGORY_TYPE;
    eventType: TRANSPORT_EVENT_TYPE;
    transportType: TRANSPORTATION_TYPE;
    batchNo: string;
    scn: string;
    bol: string;
    displacementId: string;
    closingVolume: string;
    trackingNumber: string;
}
