import { UpdateSubContractDTO } from './updateSubContract.dto';
export declare class UpdateContractDTO {
    contractId: number;
    startDate: string;
    endDate: string;
    updateSubContracts?: UpdateSubContractDTO[];
}
