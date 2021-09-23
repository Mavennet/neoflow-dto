import { AddressDTO } from '../../../general/dto/address.dto';
import { TRANSFORMATION_EVENT_TYPE } from '../../constants/transformationEventType';
export declare class CORE_TransformationEventCredentialSubjectDTO {
    eventType: TRANSFORMATION_EVENT_TYPE;
    description: string;
    geo: AddressDTO;
    eventCreator: string;
    productPredecessors: string[];
    productSuccessors: string[];
}
export declare class AGENT_TransformationEventCredentialSubjectDTO extends CORE_TransformationEventCredentialSubjectDTO {
    eventId: string;
}
