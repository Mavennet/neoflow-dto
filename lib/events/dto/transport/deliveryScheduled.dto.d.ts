import { PlaceDTO } from '../../../general';
import { JSON_TYPE, JSON_TYPE_NF } from '../../../general/constants';
import { OrganizationDTO, ProofDTO } from '../../../general/dto';
import { MeasurementDTO, CommodityDTO } from '@mavennet/traceability-dto';
export declare class AGENT_DeliveryScheduledDTO {
    type: JSON_TYPE_NF[];
    productId: string;
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
    scheduledDate?: string;
    hasDocuments?: boolean;
}
export declare class DeliveryScheduled_VC_DTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    credentialSubject: AGENT_DeliveryScheduledDTO;
    issuanceDate?: string | Date;
    proof: ProofDTO;
}
export declare class CORE_DeliveryScheduledDTO {
    productId: string;
    eventId: string;
    eventVC: DeliveryScheduled_VC_DTO;
}
