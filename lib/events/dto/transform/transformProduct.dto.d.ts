import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto';
import { TransformationEventCredentialSubjectDTO } from './transformationEventCredentialSubject.dto';
import { TransformationEventDetailsDTO } from './transformationEvent.vc.dto';
export declare class TransformProductsDTO {
    eventId: string;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    productParents: string[];
    eventVC: TransformationEventDetailsDTO;
    productSuccessors: TransformProductSuccessorDTO[];
    eventCredentialSubject: TransformationEventCredentialSubjectDTO;
}
