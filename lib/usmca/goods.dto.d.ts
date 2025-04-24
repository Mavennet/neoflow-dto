import { JSON_TYPE } from '../general';
import { ORIGIN_CRITERIA } from './constants/originCriteria';
export declare class GoodsDTO {
    type: JSON_TYPE.USMCA_PRODUCT;
    streamType: string;
    ch27TariffClassification: string;
    ch99TariffClassification: string;
    originCriteria: ORIGIN_CRITERIA;
    countryOfOrigin: string;
}
export declare class DraftGoodsDTO {
    type?: string | JSON_TYPE.USMCA_PRODUCT;
    streamType?: string;
    ch27TariffClassification?: string;
    ch99TariffClassification?: string;
    originCriteria?: string | ORIGIN_CRITERIA;
    countryOfOrigin?: string;
}
