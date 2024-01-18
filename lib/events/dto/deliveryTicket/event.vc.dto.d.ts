import { ProofDTO } from '../../../general/dto/proof.dto';
import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class DeliveryTicketVCDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer?: string;
    issuanceDate?: string | Date;
    credentialSubject: DeliveryTicketCredentialSubjectDTO;
    proof: ProofDTO;
}
