import { CredentialDTO } from '@mavennet/traceability-dto';
import { TICKET_TYPE } from '../../constants';
import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class DeliveryTicketVCDTO extends CredentialDTO<DeliveryTicketCredentialSubjectDTO> {
    credentialSubject: DeliveryTicketCredentialSubjectDTO;
    ticketType?: TICKET_TYPE;
}
