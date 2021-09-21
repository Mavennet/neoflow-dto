import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto';
import { TransformationEventCredentialSubjectDTO } from '../../events/dto/transformationEventCredentialSubject.dto';
import { TransformationEventDetailsDTO } from '../../events/dto/transformationEvent.vc.dto';
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
