import { TRANSFORM_TYPE } from '../../constants';
import { ProductVCDTO, ProductCredentialSubjectDTO, ProductBrief } from '../../../products';
import { CreateProduct } from '../createProduct';
import { TransformEventVCDTO } from './event.vc.dto';
import { AGENT_TransformEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TransformProduct {
    eventType: TRANSFORM_TYPE;
    newProducts: CreateProduct[];
    consumedProducts: ProductBrief[];
}
export declare class AGENT_TransformOutputProductDTO {
    productId: string;
    productCredentialSubject: ProductCredentialSubjectDTO;
}
export declare class AGENT_TransformProductDTO {
    inputProductIds: string[];
    outputProducts: AGENT_TransformOutputProductDTO[];
    eventCredentialSubject: AGENT_TransformEventCredentialSubjectDTO;
}
export declare class CORE_TransformOutputProductDTO {
    productId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
}
export declare class CORE_TransformProductDTO {
    outputProducts: CORE_TransformOutputProductDTO[];
    eventId: string;
    eventVC: TransformEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
