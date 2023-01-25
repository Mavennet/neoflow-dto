import { CreateSubContractDTO } from './createSubContract.dto';
import { CreateContractDTO as CreateContractDTOBase } from '@mavennet/traceability-dto';
export declare class CreateContractDTO extends CreateContractDTOBase {
    isMonthly: boolean;
    signedInEmail?: string;
    createSubContracts?: CreateSubContractDTO[];
    takeOrPayVolume?: number;
    tariff?: number;
}
