import { JSON_TYPE } from '../constants';
import { PostalAddressDTO } from './postalAddress.dto';
import { TRANSPORTATION_TYPE } from '../../events/constants';
export declare class ParcelDeliveryDTO {
    type: JSON_TYPE;
    deliveryMethod: TRANSPORTATION_TYPE;
    trackingNumber: string;
}
export declare class ParcelDeliveryDTOAdress extends ParcelDeliveryDTO {
    originAddress: PostalAddressDTO;
    deliveryAddress: PostalAddressDTO;
}
