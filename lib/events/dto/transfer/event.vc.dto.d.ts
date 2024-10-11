import { AddressDTO } from '../../../general/dto/address.dto';
import { ProofDTO } from '../../../general/dto/proof.dto';
import { EVENT_TYPE } from '../../constants/eventType';
import { AGENT_TransferEventCredentialSubjectDTO, CORE_TransferEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_TransferEventDetailsDTO {
    eventName: EVENT_TYPE;
    timestamp: string;
    address: string;
    latitude: string;
    longitude: string;
    eventSubmitter: string;
    price: string;
    sender: string;
    receiver?: string;
    portOfArrival?: AddressDTO;
    portOfDestination?: AddressDTO;
    countryOfDestination?: string;
    receiptLocation?: AddressDTO;
    credentialSubject: AGENT_TransferEventCredentialSubjectDTO;
}
export declare class CORE_TransferEventDetailsDTO {
    id: string;
    '@context': string[];
    type: string[];
    issuer: string;
    validFrom?: string | Date;
    credentialSubject: CORE_TransferEventCredentialSubjectDTO;
    proof: ProofDTO;
}
