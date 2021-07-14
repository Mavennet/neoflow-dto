import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
import { ObservationDTO } from 'mavennet-dto';
export declare class AGENT_InspectCredentialSubjectDTO {
    eventId: string;
    eventTime: Date;
    observations: ObservationDTO[];
}
export declare class CORE_InspectCredentialSubjectDTO extends AGENT_InspectCredentialSubjectDTO {
    '@context': string[];
    initiator: OrganizationDTO;
    type: string[];
    place: PlaceDTO;
    product: ProductDTO;
}
