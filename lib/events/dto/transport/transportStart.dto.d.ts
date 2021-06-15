import { ProductVCDTO } from '../../../products';
import { AGENT_TransportEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_TransportStartDTO {
    eventCredentialSubject: AGENT_TransportEventCredentialSubjectDTO;
}
export declare class CORE_TransportStartDTO {
    productId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
}
