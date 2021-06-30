import { MobileCombustionDistanceDTO, MobileCombustionUsageDTO, ProcessEmissionDTO, PurchasedElectricityDTO, StationaryCombustionDTO } from './';
export declare class CarbonFootprintDetailsDTO {
    startDate: Date;
    endDate: Date;
    role: string;
    processEmission?: ProcessEmissionDTO;
    stationaryCombustion?: StationaryCombustionDTO;
    mobileCombustionUsage?: MobileCombustionUsageDTO;
    mobileCombustionDistance?: MobileCombustionDistanceDTO;
    purchasedElectricity?: PurchasedElectricityDTO;
}
