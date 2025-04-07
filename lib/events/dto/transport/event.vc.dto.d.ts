import { CredentialDTO } from '../../../credentials';
import { TransportEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TransportStartVCDTO extends CredentialDTO<TransportEventCredentialSubjectDTO> {
    credentialSubject: TransportEventCredentialSubjectDTO;
}
