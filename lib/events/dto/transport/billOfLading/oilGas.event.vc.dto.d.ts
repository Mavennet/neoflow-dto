import { JSON_TYPE } from '../../../../general/constants';
import { VerifiableCredentialDTO } from '../../../../credentials/dto/verifiableCredential.dto';
import { OGBillOfLadingCredentialSubjectDTO } from './oilGas.event.credentialSubject.dto';
export declare class OGBillOfLadingVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: OGBillOfLadingCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
