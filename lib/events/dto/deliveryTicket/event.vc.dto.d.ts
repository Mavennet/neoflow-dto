import { ProofDTO } from '../../../general/dto/proof.dto';
import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto';
import { JSON_TYPE_NF } from '../../../general';
import { TICKET_TYPE } from '../../constants';
export declare class DeliveryTicketVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE_NF[];
    issuer?: string;
    validFrom?: string | Date;
    credentialSubject: DeliveryTicketCredentialSubjectDTO;
    proof: ProofDTO;
    ticketType?: TICKET_TYPE;
}
