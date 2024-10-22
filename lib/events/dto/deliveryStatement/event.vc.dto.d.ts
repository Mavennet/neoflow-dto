import { TICKET_TYPE } from '../../constants';
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto';
import { CredentialDTO } from '../../../credentials';
export declare class DeliveryStatementVCDTO extends CredentialDTO<DeliveryStatementCredentialSubjectDTO> {
    credentialSubject: DeliveryStatementCredentialSubjectDTO;
    ticketType?: TICKET_TYPE;
}
