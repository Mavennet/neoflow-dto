import { PRODUCT_NAME, ProductVCDTO, ProductCredentialSubjectDTO } from '../../../products';
import { EventCreateVCDTO } from './event.vc.dto';
import { AGENT_EventCreateCredentialSubjectDTO } from './event.credentialSubject.dto';
import { FLAT_PlaceDTO, FLAT_OrganizationDTO, FLAT_MeasurementDTO, FLAT_ObservationDTO } from '../../../general';
export declare class AGENT_FLAT_CreateProductDTO {
    productName: PRODUCT_NAME;
    description?: string;
    hsCode: string;
    heatNumber: string;
    grade?: string;
    facility: FLAT_PlaceDTO;
    manufacturer: FLAT_OrganizationDTO;
    weight: FLAT_MeasurementDTO;
    width?: FLAT_MeasurementDTO;
    length?: FLAT_MeasurementDTO;
    observation: FLAT_ObservationDTO[];
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
