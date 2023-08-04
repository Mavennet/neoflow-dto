import { CredentialDTO } from '@mavennet/traceability-dto';
declare class IntentToImport {
    type: string[];
    importIntent: string;
}
export declare class IntentToImportVC extends CredentialDTO {
    type: string[];
    credentialSubject: IntentToImport;
}
export {};
