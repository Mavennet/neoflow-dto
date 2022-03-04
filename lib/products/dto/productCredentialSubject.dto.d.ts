import { ObservationDTO } from '../../general/dto';
import { JSON_TYPE_NF } from '../../general/constants';
import { ProductDTO } from './product.dto';
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOTrace } from '@mavennet/traceability-dto';
declare class ProductCredentialSubjectDTOBase extends ProductCredentialSubjectDTOTrace {
    type: JSON_TYPE_NF[];
    UWI: string;
    product: ProductDTO;
    observation: ObservationDTO[];
    inspection: any;
}
export declare class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
}
export {};
