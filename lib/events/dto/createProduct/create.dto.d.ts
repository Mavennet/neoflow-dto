import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto';
import { AGENT_CreationEventCredentialSubjectDTO } from './event.credentialSubject';
import { ProductVCDTO } from '../../../products/dto/product.vc.dto';
import { CreationEventDetailsDTO } from './event.vc.dto';
declare class CreateProductDTOBase {
    productId: string;
}
export declare class AGENT_CreateProductDTO extends CreateProductDTOBase {
    productCredentialSubject: ProductCredentialSubjectDTO;
    eventCredentialSubject: AGENT_CreationEventCredentialSubjectDTO;
}
export declare class CORE_CreateProductDTO extends CreateProductDTOBase {
    productVC: ProductVCDTO;
    productVCHash: string;
    eventId: string;
    eventVC: CreationEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
export {};
