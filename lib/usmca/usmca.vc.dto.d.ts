import { USMCACredentialSubjectDTO } from './usmcaCredentialSubject.dto';
import { IssuerDTO } from '../general';
export declare class AGENT_USMCADTO {
    validFrom: string | Date;
    validUntil: string | Date;
    issuer: IssuerDTO;
    credentialSubject: USMCACredentialSubjectDTO;
}
