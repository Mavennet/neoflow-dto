import { JSON_TYPE_NF } from '../../../general';
import { ProofDTO } from '../../../general/dto/proof.dto';
import { TICKET_TYPE } from '../../constants';
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class DeliveryStatementVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE_NF[];
    issuer?: string;
    validFrom?: string | Date;
    credentialSubject: DeliveryStatementCredentialSubjectDTO;
    proof: ProofDTO;
    ticketType?: TICKET_TYPE;
}
