import { UpdateContractDTO as UpdateContractDTOBase } from '@mavennet/traceability-dto';
import { UpdateSubContractDTO } from './updateSubContract.dto';
export declare class UpdateContractDTO extends UpdateContractDTOBase {
    updateSubContracts?: UpdateSubContractDTO[];
}
