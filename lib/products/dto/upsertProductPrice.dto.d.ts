import { VALUE_TYPE } from '../constants';
export declare class UpsertProductPriceDTO {
    productId: string;
    valueType: VALUE_TYPE;
    total?: number;
    unitPrice?: number;
}
