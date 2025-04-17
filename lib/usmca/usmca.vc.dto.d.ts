import { USMCACredentialSubjectDTO } from './usmcaCredentialSubject.dto';
import { IssuerDTO } from '../general';
import { ContactFormDTO } from './contactForm.dto';
import { GoodsDTO } from './goods.dto';
import { EnvelopedVerifiableCredential } from '../credentials';
export declare class AGENT_USMCADTO {
    validFrom: string | Date;
    validUntil: string | Date;
    issuer: IssuerDTO;
    credentialSubject: USMCACredentialSubjectDTO;
}
export declare class CORE_USMCADTO {
    certifierDetails: ContactFormDTO;
    exporterDetails: ContactFormDTO;
    producerDetails?: ContactFormDTO;
    importerDetails: ContactFormDTO;
    goods: GoodsDTO[];
    validFrom: string | Date;
    validUntil: string | Date;
    cefrtificationId: string;
    certificationVC: EnvelopedVerifiableCredential;
}
