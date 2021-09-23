import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto';
import { CORE_TransferEventCredentialSubjectDTO, AGENT_TransferEventCredentialSubjectDTO } from './transferEventCredentialSubject.dto';
import { EVENT_TYPE } from '../../../events/constants/eventType';
import { AddressDTO } from '../../../general/dto/address.dto';
export declare class CORE_TransferEventDetailsDTO {
    id: string;
    '@context': string[];
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: CORE_TransferEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
export declare class AGENT_TransferEventDetailsDTO extends CORE_TransferEventDetailsDTO {
    eventName: EVENT_TYPE;
    timestamp: string;
    address: string;
    latitude: string;
    longitude: string;
    eventSubmitter: string;
    price: string;
    sender: string;
    receiver: string;
    portOfArrival: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    receiptLocation: AddressDTO;
    credentialSubject: AGENT_TransferEventCredentialSubjectDTO;
}
