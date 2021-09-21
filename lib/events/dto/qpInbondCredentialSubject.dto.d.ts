import { ParcelDeliveryDTO, OrganizationDTO } from '../../general/dto';
import { JSON_TYPE } from '../../general/constants';
import { ProductDTO } from '../../products/dto/product.dto';
import { IN_BOND_TYPE } from '../constants';
export declare class QPInbondCredentialSubjectDto {
    type: JSON_TYPE[];
    entryId: string;
    inBondNumber: string;
    irsNumber: string;
    ftzNo: string;
    inBondType: IN_BOND_TYPE;
    carrier: OrganizationDTO;
    recipient: OrganizationDTO;
    shipment: ParcelDeliveryDTO;
    billOfLadingNumber: string;
    expectedDeliveryDate: string;
    valuePerItem: string;
    totalOrderValue: string;
    product: ProductDTO;
}
