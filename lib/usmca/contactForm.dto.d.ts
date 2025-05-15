export declare class ContactFormDTO {
    organization: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    location?: DraftPostalAddressDTO;
}
export declare class DraftPostalAddressDTO {
    type?: string[];
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
}
export declare class DraftContactFormDTO {
    organization?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    location?: DraftPostalAddressDTO;
}
