declare class credentialStatusType {
    type: string;
    status: string;
}
export declare class UpdateStatusDTO {
    credentialId: string;
    credentialStatus: credentialStatusType[];
    productId: string;
}
export {};
