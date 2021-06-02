import { EVENT_TYPE } from '../../constants';
import { PlaceDTO, MeasurementDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_TransferEventCredentialSubjectDTO {
    eventType: EVENT_TYPE;
    eventTime: Date;
    place: PlaceDTO;
    product: ProductDTO;
    initiator: OrganizationDTO;
    receiver: OrganizationDTO;
    portOfEntry: PlaceDTO;
    portOfDestination: PlaceDTO;
    countryOfDestination: string;
    recipientLocation: PlaceDTO;
    transferedWeight: MeasurementDTO;
    price: number;
}
export declare class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
}
