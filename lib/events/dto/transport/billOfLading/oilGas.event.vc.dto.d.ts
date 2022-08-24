import { JSON_TYPE } from '../../../../general/constants';
import { ProofDTO } from '../../../../general/dto/proof.dto';
import { OGBillOfLadingCredentialSubjectDTO } from './oilGas.event.credentialSubject.dto';
export declare class OGBillOfLadingVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    issuanceDate?: string | Date;
    credentialSubject: OGBillOfLadingCredentialSubjectDTO;
    proof: ProofDTO;
}
