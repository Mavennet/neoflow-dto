import { PlaceDTO } from '../../../general';
import { JSON_TYPE, JSON_TYPE_NF } from '../../../general/constants';
import { OrganizationDTO, ProofDTO } from '../../../general/dto';
import { MeasurementDTO, CommodityDTO } from '@mavennet/traceability-dto';
export declare class DeliveryScheduledCredentialSubjectDTO {
    type: JSON_TYPE_NF[];
    transporter?: OrganizationDTO;
    consignee?: OrganizationDTO;
    consignor?: OrganizationDTO;
    batchNumber?: string;
    commodity?: CommodityDTO;
    portOfEntry?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    place?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    deliveryDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    injectionVolume?: MeasurementDTO;
    injectionDate?: string | Date;
    deliveryDate?: string | Date;
    nominationMonth?: string | Date;
    scheduledDate?: string;
    hasDocuments?: boolean;
}
export declare class DeliveryScheduled_VC_DTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    credentialSubject: DeliveryScheduledCredentialSubjectDTO;
    issuanceDate?: string | Date;
    proof: ProofDTO;
}
export declare class AGENT_DeliveryScheduledDTO {
    productId?: string;
    credentialSubject: DeliveryScheduledCredentialSubjectDTO;
}
export declare class CORE_DeliveryScheduledDTO {
    productId: string;
    eventId: string;
    eventVC: DeliveryScheduled_VC_DTO;
}
