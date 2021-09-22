import { AddressDTO } from '../../../general/dto/address.dto';
declare class CertifierDTOBase {
    did: string;
    name: string;
    title: string;
    geo: AddressDTO;
}
export declare class CertifierDTO extends CertifierDTOBase {
}
export {};
