import { ProductVCDTO, ProductCredentialSubjectDTO } from '../../../products';
import { EventCreateVCDTO } from './eventCreate.vc.dto';
import { AGENT_EventCreateCredentialSubjectDTO } from './eventCreate.credentialSubject.dto';
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