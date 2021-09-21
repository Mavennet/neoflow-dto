import { AddressDTO, ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../general/dto';
export declare class InspectionEventCredentialSubjectDTO {
    eventId: string;
    productId: string;
    description: string;
    geo: AddressDTO;
    eventCreator: string;
    producer: string;
    certifier: string;
    category: string;
    hsCode: string;
    physicalSpecs: PhysicalSpecsDTO;
    chemicalSpecs: ChemicalSpecsDTO;
    gasSpecs: GasSpecsDTO;
}
