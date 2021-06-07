import { JSON_TYPE, VerifiableCredentialDTO as VerifiableCredentialDTOBase } from 'mavennet-dto';
import { JSON_TYPE_METAL } from '../constants';
export declare abstract class VerifiableCredentialDTO extends VerifiableCredentialDTOBase {
    type: Array<JSON_TYPE | JSON_TYPE_METAL>;
}
