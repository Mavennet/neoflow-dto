import { COMPACT_MeasurementDTO, COMPACT_ObservationDTO, COMPACT_OrganizationDTO, COMPACT_PlaceDTO } from '../../../general';
import { PRODUCT_NAME } from '../../../products';
import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto';
import { type DeliveryTicketCredentialSubjectDTO } from '../deliveryTicket';
import { type DeliveryScheduledCredentialSubjectDTO } from '../transport';
import { EnvelopedVerifiableCredential } from '../../../credentials';
declare class CreateProductDTOBase {
    batchNumber?: string;
}
export declare class AGENT_COMPACT_CreateProductDTO {
    productName: PRODUCT_NAME;
    description?: string;
    grade?: string;
    sku?: string;
    commodity?: string;
    facility: COMPACT_PlaceDTO;
    manufacturer: COMPACT_OrganizationDTO;
    weight: COMPACT_MeasurementDTO;
    width?: COMPACT_MeasurementDTO;
    length?: COMPACT_MeasurementDTO;
    observation: COMPACT_ObservationDTO[];
}
export declare class AGENT_CreateProductDTO extends CreateProductDTOBase {
    productCredentialSubject: ProductCredentialSubjectDTO;
    eventCredentialSubject?: DeliveryTicketCredentialSubjectDTO | DeliveryScheduledCredentialSubjectDTO;
    eventCredentialSubjects?: DeliveryTicketCredentialSubjectDTO[];
}
declare class CreateEventDTO {
    eventId?: string;
    eventVC?: EnvelopedVerifiableCredential;
}
export declare class CORE_CreateProductDTO extends CreateProductDTOBase {
    productId: string;
    productVC: EnvelopedVerifiableCredential;
    productVCHash: string;
    events?: CreateEventDTO[];
}
export {};
