declare class CoordinatesDto {
    lat: string;
    lng: string;
}
declare class DetailsDto {
    address: string;
    coordinates: CoordinatesDto;
}
export declare class LocationDto {
    id: number;
    value: string;
    label: string;
    alias: string[];
    firmsCode: string;
    portCode: string;
    details: DetailsDto;
    isOil: boolean;
    isGas: boolean;
}
export declare class XBorderDto {
    receiptLocationId: number;
    deliveryFacilityId: number;
}
export declare class LocationsDto {
    deliveryFacilities: LocationDto[];
    receiptLocations: LocationDto[];
    ports: LocationDto[];
    xborderMappings: XBorderDto[];
}
export {};
