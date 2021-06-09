import { ProductVCDTO, ProductCredentialSubjectDTO } from '../../../products';
import { TransformEventVCDTO } from './event.vc.dto';
import { AGENT_TransformEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_TransformOutputProductDTO {
    productId: string;
    productCredentialSubject: ProductCredentialSubjectDTO;
}
export declare class AGENT_TransformProductDTO {
    inputProductIds: string[];
    outputProducts: AGENT_TransformOutputProductDTO[];
    eventCredentialSubject: AGENT_TransformEventCredentialSubjectDTO;
}
export declare class CORE_TransformOutputProductDTO {
    productId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
}
export declare class CORE_TransformProductDTO {
    outputProducts: CORE_TransformOutputProductDTO[];
    eventId: string;
    eventVC: TransformEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
