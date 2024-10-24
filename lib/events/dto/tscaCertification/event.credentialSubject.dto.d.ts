import { JSON_TYPE_NF, OrganizationDTO } from '../../../general';
export declare class TSCACertificationCredentialSubjectDTO {
    type: JSON_TYPE_NF.TSCA_CERTIFICATION;
    certificationType: string;
    certifierDetails: OrganizationDTO;
}
