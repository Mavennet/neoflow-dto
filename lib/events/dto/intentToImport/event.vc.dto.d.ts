import { CredentialDTO } from '../../../credentials';
import { TICKET_TYPE } from '../../constants';
import { IntentToImportCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class IntentToImportVCDTO extends CredentialDTO<IntentToImportCredentialSubjectDTO> {
    credentialSubject: IntentToImportCredentialSubjectDTO;
    ticketType?: TICKET_TYPE;
}
