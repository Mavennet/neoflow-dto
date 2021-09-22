import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto';
import { CreationEventCredentialSubjectDTO } from './creationEventCredentialSubject.dto';
import { ProductVCDTO } from '../../../products/dto/product.vc.dto';
import { CreationEventDetailsDTO } from './creationEvent.vc.dto';
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
