import { JSON_TYPE } from '../constants';
import { GeoCoordinatesDTO } from './geoCoordinates.dto';
import { PostalAddressDTO } from './postalAddress.dto';
export declare class PlaceDTO {
    type: JSON_TYPE[];
    globalLocationNumber: string;
    geo: GeoCoordinatesDTO;
    address: PostalAddressDTO;
}
