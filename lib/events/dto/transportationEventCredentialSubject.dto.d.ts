import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../constants';
import { PRODUCT_CATEGORY_TYPE } from '../../products/constants';
export declare class TransportationEventCredentialSubjectDTO {
    productId: string;
    eventType: TRANSPORT_EVENT_TYPE;
    description: string;
    eventCreator: string;
    transportType: TRANSPORTATION_TYPE;
    batchNo: string;
    scn: string;
    bol: string;
    category: PRODUCT_CATEGORY_TYPE;
    displacementId: string;
}
