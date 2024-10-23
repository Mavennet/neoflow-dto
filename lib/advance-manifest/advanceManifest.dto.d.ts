import { type EnvelopedVerifiableCredential } from '../credentials';
import { type AdvanceManifestVCDTO } from './advanceManifest.vc.dto';
export declare class CORE_AdvanceManifestDTO {
    eventId: string;
    eventVC: EnvelopedVerifiableCredential | AdvanceManifestVCDTO;
}
