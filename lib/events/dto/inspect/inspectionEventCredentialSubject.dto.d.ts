import { AddressDTO, ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../../general/dto';
export declare class CORE_InspectionEventCredentialSubjectDTO {
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
export declare class AGENT_InspectionEventCredentialSubjectDTO extends CORE_InspectionEventCredentialSubjectDTO {
    eventId: string;
}