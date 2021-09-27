import { JSON_TYPE } from '../constants';
import { GeoCoordinatesDTO } from './geoCoordinates.dto';
import { PostalAddressDTO } from './postalAddress.dto';
export declare class PlaceDTO {
    type: JSON_TYPE[];
    globalLocationNumber: string;
    geo: GeoCoordinatesDTO;
    address: PostalAddressDTO;
}
export declare abstract class COMPACT_PlaceDTO {
    globalLocationNumber?: string;
    latitude: string;
    longitude: string;
    organizationName?: string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
}
