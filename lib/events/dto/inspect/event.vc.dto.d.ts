import { IssuerDTO } from '../../../general';
import { ProofDTO } from '../../../general/dto/proof.dto';
import { InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class InspectionEventDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: IssuerDTO;
    validFrom?: string | Date;
    credentialSubject: InspectionEventCredentialSubjectDTO;
    proof: ProofDTO;
}
