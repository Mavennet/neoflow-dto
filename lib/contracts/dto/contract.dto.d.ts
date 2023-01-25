import { CONTRACT_STATUS } from '../';
export declare class ContractDTO {
    id: number;
    sender: string;
    receiver: string;
    startDate: string;
    endDate: string;
    destination: string;
    isAccepted: boolean;
    status: CONTRACT_STATUS;
    createdAt: Date;
    updatedAt: Date;
    comment?: string;
}
