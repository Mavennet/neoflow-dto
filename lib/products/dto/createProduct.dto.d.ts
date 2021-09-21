import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
import { CreationEventCredentialSubjectDTO } from '../../events/dto/creationEventCredentialSubject.dto';
import { ProductVCDTO } from './product.vc.dto';
import { CreationEventDetailsDTO } from '../../events/dto/creationEvent.vc.dto';
export declare class CreateProductDTO {
    productId: string;
    eventId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
    eventVC: CreationEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    productCredentialSubject: ProductCredentialSubjectDTO;
    eventCredentialSubject: CreationEventCredentialSubjectDTO;
}
