import { JSON_TYPE, JSON_TYPE_NF } from '../general';
import { ProofDTO } from '../general/dto';
export declare class ProducerCredentialSubjectDTO {
    type: JSON_TYPE_NF[];
    title?: string;
}
export declare class Producer_VC_DTO {
    '@context': string[];
    type: JSON_TYPE[];
    id: string;
    issuanceDate?: string | Date;
    expirationDate?: string | Date;
    issuer?: string;
    credentialSubject: ProducerCredentialSubjectDTO;
    proof: ProofDTO;
}
export declare class CORE_ProducerDTO {
    gasShipmentId: string;
    producerId: string;
    producerVC: Producer_VC_DTO;
}
