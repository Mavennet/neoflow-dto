import { PRODUCT_NAME, ProductVCDTO, ProductCredentialSubjectDTO } from '../../../products';
import { EventCreateVCDTO } from './event.vc.dto';
import { AGENT_EventCreateCredentialSubjectDTO } from './event.credentialSubject.dto';
import { Place, Organization, Measurement, Observation } from '../../../general';
export declare class CreateProduct {
    productName: PRODUCT_NAME;
    description?: string;
    hsCode: string;
    heatNumber: string;
    grade?: string;
    sku?: string;
    facility: Place;
    manufacturer: Organization;
    weight: Measurement;
    width?: Measurement;
    length?: Measurement;
    observation: Observation[];
}
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
