import { StorageEventCredentialSubjectDTO } from '../../events/dto/storageEventCredentialSubject.dto';
import { StorageEventDetailsDTO } from '../../events/dto/storageEvent.vc.dto';
export declare class StorageProductDTO {
    productId: string;
    eventId: string;
    eventVC: StorageEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    productHash: string;
    storageCredentialSubject: StorageEventCredentialSubjectDTO;
}
