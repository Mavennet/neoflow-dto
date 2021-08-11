import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { StorageEventVCDTO } from './event.vc.dto';
import { Organization, Measurement, Observation, Place } from '../../../general';
import { ProductBrief } from '../../../products';
import { EVENT_TYPE, STORAGE_TYPE } from '../../constants';
export declare class StoreProduct {
    eventType: STORAGE_TYPE;
    initiator: Organization;
    place: Place;
    product: ProductBrief;
    storedWeight: Measurement;
    observation: Observation[];
}
export declare class AGENT_StorageProductDTO {
    eventType: EVENT_TYPE;
    eventId: string;
    credentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
export declare class CORE_StorageProductDTO {
    productId: string;
    eventId: string;
    eventVC: StorageEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
