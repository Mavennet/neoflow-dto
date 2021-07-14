import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
import { ObservationDTO } from 'mavennet-dto';
export declare class AGENT_InspectCredentialSubjectDTO {
    eventId: string;
    eventTime: Date;
    type: string[];
    initiator: OrganizationDTO;
    observations: ObservationDTO[];
    place: PlaceDTO;
    product: ProductDTO;
}
export declare class CORE_InspectCredentialSubjectDTO extends AGENT_InspectCredentialSubjectDTO {
    '@context': string[];
    eventId: string;
}
