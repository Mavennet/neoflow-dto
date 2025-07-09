import { CredentialDTO, EnvelopedVerifiableCredential } from '../../../credentials';
import { MeasurementDTO } from '../../../general/dto/measurement.dto';
import { CommodityDTO } from '../../../general/dto/commodity.dto';
import { PlaceDTO } from '../../../general';
import { JSON_TYPE_NF } from '../../../general/constants';
import { OrganizationDTO } from '../../../general/dto';
export declare class DeliveryScheduledCredentialSubjectDTO {
    type: JSON_TYPE_NF[];
    transporter?: OrganizationDTO;
    consignee?: OrganizationDTO;
    consignor?: OrganizationDTO;
    batchNumber?: string;
    commodity?: CommodityDTO;
    portOfEntry?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    deliveryDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    injectionVolume?: MeasurementDTO[];
    deliveryVolume?: MeasurementDTO[];
    scheduledVolume?: MeasurementDTO[];
    injectionStartDate?: string | Date;
    injectionEndDate?: string | Date;
    deliveryStartDate?: string | Date;
    deliveryEndDate?: string | Date;
    nominationMonth?: string | Date;
    scheduledDate?: string;
    standardCarrierAlphaCode: string;
    harmonizedTariffSchedule: string;
    exportProvinceCode: string;
}
export declare class DeliveryScheduledVCDTO extends CredentialDTO<DeliveryScheduledCredentialSubjectDTO> {
    credentialSubject: DeliveryScheduledCredentialSubjectDTO;
}
export declare class AGENT_DeliveryScheduledDTO {
    productId: string;
    gasShipmentId: string;
    credentialSubject: DeliveryScheduledCredentialSubjectDTO;
}
export declare class CORE_DeliveryScheduledDTO {
    productId: string;
    gasShipmentId: string;
    eventId: string;
    eventVC: DeliveryScheduledVCDTO;
}
export declare class CORE_AddScheduledVolumeDTO {
    productId: string;
    gasShipmentId: string;
    eventId: string;
    eventVC: EnvelopedVerifiableCredential;
}
export type AGENT_DeliveryScheduledDTO_NO_ID = Omit<AGENT_DeliveryScheduledDTO, 'productId' | 'gasShipmentId'>;
