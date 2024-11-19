import { CreateSubContractDTO } from './createSubContract.dto';
export declare class CreateContractDTO {
    sender: string;
    receiver: string;
    destination: string;
    startDate: string;
    endDate: string;
    isMonthly: boolean;
    signedInEmail?: string;
    createSubContracts?: CreateSubContractDTO[];
    takeOrPayVolume?: number;
    tariff?: number;
}
