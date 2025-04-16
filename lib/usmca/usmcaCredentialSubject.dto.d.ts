import { JSON_TYPE_NF } from '../general';
import { ContactFormDTO } from './contactForm.dto';
import { GoodsDTO } from './goods.dto';
export declare class USMCACredentialSubjectDTO {
    type: JSON_TYPE_NF.USMCA_CLAIMS;
    variousImporters: boolean;
    exporterDetails: ContactFormDTO;
    producerDetails?: ContactFormDTO;
    importerDetails: ContactFormDTO;
    goods: GoodsDTO[];
}
