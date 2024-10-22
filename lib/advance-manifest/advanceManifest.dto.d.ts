import { EnvelopedVerifiableCredential } from '../credentials';
import { AdvanceManifestVCDTO } from './advanceManifest.vc.dto';
export declare class CORE_AdvanceManifestDTO {
    eventId: string;
    eventVC: EnvelopedVerifiableCredential | AdvanceManifestVCDTO;
}
