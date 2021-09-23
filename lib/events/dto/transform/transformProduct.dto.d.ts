import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto';
import { AGENT_TransformationEventCredentialSubjectDTO } from './transformationEventCredentialSubject.dto';
import { CORE_TransformationEventDetailsDTO, AGENT_TransformationEventDetailsDTO } from './transformationEvent.vc.dto';
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
