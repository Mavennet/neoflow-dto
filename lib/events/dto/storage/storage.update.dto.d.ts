import { ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../../general/dto';
export declare class AGENT_UpdateStorageProductDTO {
    productId: string;
    eventId: string;
    revokeEventId: string;
    physicalSpecs?: PhysicalSpecsDTO;
    chemicalSpecs: ChemicalSpecsDTO;
    gasSpecs: GasSpecsDTO;
}
