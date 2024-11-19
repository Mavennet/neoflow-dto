import { PlaceDTO, OrganizationDTO } from './';
export declare abstract class EventDTO {
    type: string[];
    abstract eventType: string;
    eventId: string;
    eventTime: string;
    place: PlaceDTO;
    actor: OrganizationDTO[];
    products: string[];
}
