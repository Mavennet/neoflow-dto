import { type EnvelopedVerifiableCredential } from '../../../credentials';
import { COMPACT_MeasurementDTO, COMPACT_ObservationDTO, COMPACT_OrganizationDTO, COMPACT_PlaceDTO } from '../../../general';
import { PRODUCT_NAME } from '../../../products';
import { type ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto';
import { type DeliveryTicketCredentialSubjectDTO } from '../deliveryTicket';
import { type TransportEventCredentialSubjectDTO, type DeliveryScheduledCredentialSubjectDTO } from '../transport';
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
export declare class CORE_EnvelopedVCDTO {
    vcs: EnvelopedVerifiableCredential[];
}
export declare class AGENT_CreateProductDTO {
    credentialSubjects: Array<DeliveryScheduledCredentialSubjectDTO | DeliveryTicketCredentialSubjectDTO | ProductCredentialSubjectDTO | TransportEventCredentialSubjectDTO>;
}
