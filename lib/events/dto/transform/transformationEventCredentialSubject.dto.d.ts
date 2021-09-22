import { AddressDTO } from '../../../general/dto/address.dto';
import { TRANSFORMATION_EVENT_TYPE } from '../../constants/transformationEventType';
export declare class TransformationEventCredentialSubjectDTO {
    eventId: string;
    eventType: TRANSFORMATION_EVENT_TYPE;
    description: string;
    geo: AddressDTO;
    eventCreator: string;
    productPredecessors: string[];
    productSuccessors: string[];
}
