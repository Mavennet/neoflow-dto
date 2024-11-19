declare class CredentialQuery {
    type: [string];
    reason: string;
}
declare class QueryResponse {
    type: string;
    credentialQuery: CredentialQuery[];
}
export declare class AvailablePresentationDTO {
    query: QueryResponse[];
}
export {};
