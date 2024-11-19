import { EntryNumberCredentialSubjectDTO, EntryNumberEventVCDTO } from '.';
import { EnvelopedVerifiableCredential } from '../../../../credentials';
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
export declare class CORE_CreateEntryNumberDTO_OIL extends CreateEntryNumberDTOBase {
    eventId: string;
    eventVC: EntryNumberEventVCDTO;
}
