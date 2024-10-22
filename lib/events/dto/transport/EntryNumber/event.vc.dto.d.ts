import { CredentialDTO } from '@mavennet/traceability-dto';
import { EntryNumberCredentialSubjectDTO } from './credentialSubject.dto';
export declare class EntryNumberEventVCDTO extends CredentialDTO<EntryNumberCredentialSubjectDTO> {
    credentialSubject: EntryNumberCredentialSubjectDTO;
}
