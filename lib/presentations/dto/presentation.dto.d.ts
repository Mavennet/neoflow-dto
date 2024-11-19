import { OrganizationDTO, type VerifiableCredentialDTO } from '../..';
export declare abstract class PresentationDTO {
    '@context': string[];
    abstract id: string;
    type: string[];
    verifiableCredential: Array<VerifiableCredentialDTO<any>>;
    holder: OrganizationDTO;
}
