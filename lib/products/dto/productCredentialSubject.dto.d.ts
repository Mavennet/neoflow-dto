import { PlaceDTO, ObservationDTO } from '../../general/dto';
import { JSON_TYPE } from '../../general/constants';
import { ProductDTO } from './product.dto';
export declare class ProductCredentialSubjectDTO {
    type: JSON_TYPE[];
    HSCode: string;
    UWI: string;
    productionDate: string;
    facility: PlaceDTO;
    product: ProductDTO;
    observation: ObservationDTO[];
}
