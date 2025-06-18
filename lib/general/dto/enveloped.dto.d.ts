import { type EnvelopedVerifiableCredential } from '../../credentials';
export declare class WrappedEnvelopedVCDTO {
    eventId: string;
    vc: EnvelopedVerifiableCredential;
}
export declare class CORE_EnvelopedVCDTO {
    vcs: WrappedEnvelopedVCDTO[];
}
