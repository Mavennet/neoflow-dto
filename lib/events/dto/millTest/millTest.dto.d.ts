import { MillTestVCDTO } from './event.vc.dto';
import { AGENT_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto';
import { Organization, Observation } from '../../../general';
export declare class MillTest {
    productId: string;
    certifier: string;
    manufacturer: Organization;
    specification: string;
    originalCountryOfMeltAndPour: string;
    observation: Observation[];
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
