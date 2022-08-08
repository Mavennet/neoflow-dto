import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto';
import { AGENT_TransformationEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { AGENT_COMPACT_CreateProductDTO } from '../createProduct';
import { CORE_TransformationEventDetailsDTO } from './event.vc.dto';
import { ProductCredentialSubjectDTO } from '../../../products';
import { ProductHashDTO } from '../../../general';
export declare class AGENT_COMPACT_TransformProductDTO {
    newProducts: AGENT_COMPACT_CreateProductDTO[];
    sku?: string;
}
export declare class CORE_TransformProductsDTO {
    eventId: string;
    eventVC: CORE_TransformationEventDetailsDTO;
    successors: TransformProductSuccessorDTO[];
}
export declare class AGENT_TransformProductsDTO {
    consumedProducts: ProductHashDTO[];
    newProducts: ProductCredentialSubjectDTO[];
    eventCredentialSubject: AGENT_TransformationEventCredentialSubjectDTO;
}
