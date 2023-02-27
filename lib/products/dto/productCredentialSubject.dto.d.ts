import { JSON_TYPE_NF } from '../../general/constants';
import { ObservationDTO, PlaceDTO } from '../../general/dto';
import { ProductDTO } from './product.dto';
declare class ProductCredentialSubjectDTOBase {
    type: JSON_TYPE_NF[];
    HSCode: string;
    UWI: string;
    productionDate: string;
    facility: PlaceDTO;
    product: ProductDTO;
    observation: ObservationDTO[];
}
export declare class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
}
export {};
