import { JSON_TYPE } from '../constants';
import { TRANSPORTATION_TYPE } from '../../events/constants';
export declare class ParcelDeliveryDTO {
    type: JSON_TYPE;
    deliveryMethod: TRANSPORTATION_TYPE;
    trackingNumber: string;
}
