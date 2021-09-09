import { MillTestVCDTO } from './event.vc.dto';
import { AGENT_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto';
import { COMPACT_OrganizationDTO, COMPACT_ObservationDTO, COMPACT_PlaceDTO } from '../../../general';
export declare class AGENT_COMPACT_MillTestDTO {
    productId: string;
    certifier: string;
    manufacturer: COMPACT_OrganizationDTO;
    specification: string;
    originalCountryOfMeltAndPour: string;
    place: COMPACT_PlaceDTO;
    observation: COMPACT_ObservationDTO[];
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
