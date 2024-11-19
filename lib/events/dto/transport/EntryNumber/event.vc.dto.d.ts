import { CredentialDTO } from '../../../../credentials';
import { EntryNumberCredentialSubjectDTO } from './credentialSubject.dto';
export declare class EntryNumberEventVCDTO extends CredentialDTO<EntryNumberCredentialSubjectDTO> {
    credentialSubject: EntryNumberCredentialSubjectDTO;
}
