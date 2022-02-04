import { DeliveryScheduleDTO } from './deliverySchedule.dto';
import { OrganizationDTO } from '../../../general/dto/organization.dto';
export declare class CreateDeliveryScheduleDTO {
    custodian: OrganizationDTO;
    deliverySchedules: DeliveryScheduleDTO[];
}
