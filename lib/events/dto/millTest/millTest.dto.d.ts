import { MillTestVCDTO } from './event.vc.dto';
import { AGENT_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto';
import { FLAT_OrganizationDTO, FLAT_ObservationDTO, FLAT_PlaceDTO } from '../../../general';
export declare class AGENT_FLAT_MillTestDTO {
    productId: string;
    certifier: string;
    manufacturer: FLAT_OrganizationDTO;
    specification: string;
    originalCountryOfMeltAndPour: string;
    place: FLAT_PlaceDTO;
    observation: FLAT_ObservationDTO[];
}
export declare class AGENT_MillTestDTO {
    productId: string;
    eventId: string;
    millTestCredentialSubject: AGENT_MillTestCredentialSubjectDTO;
}
export declare class CORE_MillTestDTO {
    productId: string;
    eventId: string;
    millTestVC: MillTestVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
