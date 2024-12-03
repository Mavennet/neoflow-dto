import { IssuerDTO } from '../../general/dto/issuer.dto';
import { type CredentialStatusDTO } from './credentialStatus.dto';
import { CredentialSchema } from './credentialSchema.dto';
export declare abstract class CredentialDTO<T> {
    '@context': string[];
    id: string;
    type: string[];
    issuer: IssuerDTO;
    validFrom: string | Date;
    validUntil?: string;
    abstract credentialSubject: T;
    credentialStatus?: CredentialStatusDTO[];
    credentialSchema?: CredentialSchema;
}
