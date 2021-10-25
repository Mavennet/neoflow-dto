import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto';
import { AGENT_TransformationEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { AGENT_COMPACT_CreateProductDTO } from '../createProduct';
import { CORE_TransformationEventDetailsDTO, AGENT_TransformationEventDetailsDTO } from './event.vc.dto';
export declare class AGENT_COMPACT_TransformProductDTO {
    newProducts: AGENT_COMPACT_CreateProductDTO[];
    sku?: string;
}
export declare class CORE_TransformProductsDTO {
    eventId: string;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    eventVC: CORE_TransformationEventDetailsDTO;
    productSuccessors: TransformProductSuccessorDTO[];
}
export declare class AGENT_TransformProductsDTO extends CORE_TransformProductsDTO {
    eventVC: AGENT_TransformationEventDetailsDTO;
    productParents: string[];
    eventCredentialSubject: AGENT_TransformationEventCredentialSubjectDTO;
}
