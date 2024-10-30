import { EntryNumberCredentialSubjectDTO } from '.';
import { EnvelopedVerifiableCredential } from '@mavennet/traceability-dto';
export declare class CreateEntryNumberDTOBase {
    productId: string;
    gasShipmentId: string;
}
export declare class CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
    credentialSubject: EntryNumberCredentialSubjectDTO;
    portEntry?: any;
}
export declare class CORE_CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
    eventId: string;
    eventVC: EnvelopedVerifiableCredential;
}
