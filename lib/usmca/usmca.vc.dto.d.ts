import { USMCACredentialSubjectDTO } from './usmcaCredentialSubject.dto';
import { IssuerDTO } from '../general';
import { ContactFormDTO } from './contactForm.dto';
import { GoodsDTO } from './goods.dto';
import { EnvelopedVerifiableCredential } from '../credentials';
export declare class AGENT_USMCADTO {
    validFrom: string | Date;
    validUntil: string | Date;
    issuer: IssuerDTO;
    certifierDetails: ContactFormDTO;
    credentialSubject: USMCACredentialSubjectDTO;
}
export declare class CORE_USMCADTO {
    index?: number;
    certifierDetails?: ContactFormDTO;
    exporterDetails?: ContactFormDTO;
    producerDetails?: ContactFormDTO;
    importerDetails?: ContactFormDTO;
    goods?: GoodsDTO[];
    variousProducers?: boolean;
    validFrom?: string | Date;
    validUntil?: string | Date;
    certificationId?: string;
}
export declare class CORE_GENERATED_USMCADTO extends CORE_USMCADTO {
    certificationVC: EnvelopedVerifiableCredential;
}
