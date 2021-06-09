import { ProductVCDTO, ProductCredentialSubjectDTO } from '../../../products';
import { EventCreateVCDTO } from './event.vc.dto';
import { AGENT_EventCreateCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_CreateProductDTO {
    status: string;
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
