import { ProductVCDTO } from './product.vc.dto';
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto';
import { EventCreateVCDTO, AGENT_EventCreateCredentialSubjectDTO } from '../../events';
export declare class AGENT_CreateProductDTO {
    productId: string;
    productCredentialSubject: ProductCredentialSubjectDTO;
    eventCredentialSubject: AGENT_EventCreateCredentialSubjectDTO;
}
export declare class CORE_CreateProductDTO {
    productId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
    eventId: string;
    eventVC: EventCreateVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}