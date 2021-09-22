import { StorageEventCredentialSubjectDTO } from './storageEventCredentialSubject.dto';
import { StorageEventDetailsDTO } from './storageEvent.vc.dto';
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
