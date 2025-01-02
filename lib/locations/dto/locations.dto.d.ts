declare class CoordinatesDto {
    lat: string;
    lng: string;
}
declare class PostalAddressDto {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
}
declare class DetailsDto {
    address: string;
    coordinates: CoordinatesDto;
    postalAddress: PostalAddressDto;
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
