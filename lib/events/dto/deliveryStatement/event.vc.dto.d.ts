import { ProofDTO } from '../../../general/dto/proof.dto';
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto';
import { JSON_TYPE_NF } from '../../../general';
import { TICKET_TYPE } from '../../constants';
export declare class DeliveryStatementVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE_NF[];
    issuer?: string;
    issuanceDate?: string | Date;
    credentialSubject: DeliveryStatementCredentialSubjectDTO;
    proof: ProofDTO;
    ticketType?: TICKET_TYPE;
}
