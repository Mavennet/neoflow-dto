import { PlaceDTO, ObservationDTO } from '../../general/dto';
import { JSON_TYPE } from '../../general/constants';
import { ProductDTO } from './product.dto';
declare class ProductCredentialSubjectDTOBase {
    type: JSON_TYPE[];
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