import { PRODUCT_NAME, ProductVCDTO, ProductCredentialSubjectDTO } from '../../../products';
import { EventCreateVCDTO } from './event.vc.dto';
import { AGENT_EventCreateCredentialSubjectDTO } from './event.credentialSubject.dto';
import { COMPACT_PlaceDTO, COMPACT_OrganizationDTO, COMPACT_MeasurementDTO, COMPACT_ObservationDTO } from '../../../general';
export declare class AGENT_COMPACT_CreateProductDTO {
    productName: PRODUCT_NAME;
    description?: string;
    hsCode: string;
    heatNumber: string;
    grade?: string;
    facility: COMPACT_PlaceDTO;
    manufacturer: COMPACT_OrganizationDTO;
    weight: COMPACT_MeasurementDTO;
    width?: COMPACT_MeasurementDTO;
    length?: COMPACT_MeasurementDTO;
    observation: COMPACT_ObservationDTO[];
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
