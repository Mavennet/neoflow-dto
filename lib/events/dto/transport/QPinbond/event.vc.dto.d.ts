import { JSON_TYPE } from '../../../../general/constants';
import { VerifiableCredentialDTO } from '../../../../general/dto';
import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto';
export declare class QPInBondEventVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuanceDate: string;
    issuer: string;
    credentialSubject: QPInbondCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
