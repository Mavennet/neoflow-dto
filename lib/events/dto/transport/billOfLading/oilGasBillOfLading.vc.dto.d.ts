import { JSON_TYPE } from '../../../../general/constants';
import { VerifiableCredentialDTO } from '../../../../general/dto/verifiableCredential.dto';
import { OGBillOfLadingCredentialSubjectDTO } from './oilGasBillOfLadingCredentialSubject.dto';
export declare class OGBillOfLadingVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: OGBillOfLadingCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}