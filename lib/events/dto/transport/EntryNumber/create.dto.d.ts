import { EntryNumberEventVCDTO } from './event.vc.dto';
import { EntryNumberCredentialSubjectDTO } from '.';
export declare class CreateEntryNumberDTOBase {
    productId: string;
    eventId: string;
}
export declare class CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
    credentialSubject: EntryNumberCredentialSubjectDTO;
}
export declare class CORE_CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
    eventVC: EntryNumberEventVCDTO;
}
