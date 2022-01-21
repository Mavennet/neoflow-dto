import { ObservationDTO } from '../../general/dto';
import { JSON_TYPE } from '../../general/constants';
import { ProductDTO } from './product.dto';
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase } from '@mavennet/traceability-dto';
export declare class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
    type: JSON_TYPE[];
    UWI: string;
    product: ProductDTO;
    observation: ObservationDTO[];
}
