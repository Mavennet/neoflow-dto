import { JSON_TYPE } from '../../../../general/constants';
import { ProofDTO } from '../../../../general/dto';
import { EntryNumberCredentialSubjectDTO } from './credentialSubject.dto';
export declare class EntryNumberEventVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuanceDate?: string | Date;
    credentialSubject: EntryNumberCredentialSubjectDTO;
    proof: ProofDTO;
}
