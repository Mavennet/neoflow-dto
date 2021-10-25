import { AddressDTO } from '../../../general/dto/address.dto';
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants';
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants';
declare class TransportationEventCredentialSubjectDTOBase {
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
export declare class CORE_TransportationEventCredentialSubjectDTO extends TransportationEventCredentialSubjectDTOBase {
    description: string;
    geo: AddressDTO;
}
export declare class AGENT_TransportationEventCredentialSubjectDTO extends TransportationEventCredentialSubjectDTOBase {
}
export {};
