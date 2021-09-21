import { AddressDTO, ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../general/dto';
import { STORAGE_EVENT_TYPE } from '../constants';
export declare class StorageEventCredentialSubjectDTO {
    eventId: string;
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
