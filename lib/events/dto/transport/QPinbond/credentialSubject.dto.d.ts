import { JSON_TYPE } from '../../../../general/constants';
import { OrganizationDTO, ParcelDeliveryDTO, PlaceDTO } from '../../../../general/dto';
import { ProductDTO } from '../../../../products/dto/product.dto';
import { IN_BOND_TYPE } from '../../../constants';
export declare class QPInbondCredentialSubjectDTO {
    type: JSON_TYPE[];
    inBondNumber: string;
    irsNumber?: string;
    entryId: string;
    ftzNo: string;
    inBondType?: IN_BOND_TYPE;
    portOfEntry?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    carrier: OrganizationDTO;
    recipient: OrganizationDTO;
    shipment: ParcelDeliveryDTO;
    billOfLadingNumber?: string;
    expectedDeliveryDate?: string;
    valuePerItem?: string;
    totalOrderValue?: string;
    product: ProductDTO;
}
