import { CredentialDTO } from '../../../credentials';
import { TICKET_TYPE } from '../../constants';
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class DeliveryStatementVCDTO extends CredentialDTO<DeliveryStatementCredentialSubjectDTO> {
    credentialSubject: DeliveryStatementCredentialSubjectDTO;
    ticketType?: TICKET_TYPE;
}
