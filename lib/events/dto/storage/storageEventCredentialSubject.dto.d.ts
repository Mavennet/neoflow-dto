import { AddressDTO, ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../../general/dto';
import { STORAGE_EVENT_TYPE } from '../../constants';
export declare class CORE_StorageEventCredentialSubjectDTO {
    productId: string;
    eventType: STORAGE_EVENT_TYPE;
    category: string;
    description: string;
    geo: AddressDTO;
    eventCreator: string;
    volume: string;
    uom: string;
    tankLocation: AddressDTO;
    physicalSpecs: PhysicalSpecsDTO;
    chemicalSpecs: ChemicalSpecsDTO;
    gasSpecs: GasSpecsDTO;
}
export declare class AGENT_StorageEventCredentialSubjectDTO extends CORE_StorageEventCredentialSubjectDTO {
    eventId: string;
    productId: string;
}
