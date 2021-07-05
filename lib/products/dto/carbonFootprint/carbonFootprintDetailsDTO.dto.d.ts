import { MobileCombustionDistanceDTO, MobileCombustionUsageDTO, ProcessEmissionDTO, PurchasedElectricityDTO, StationaryCombustionDTO } from './';
export declare class CarbonFootprintDetailsDTO {
    startDate: string;
    endDate: string;
    role: string;
    processEmission?: ProcessEmissionDTO;
    stationaryCombustion?: StationaryCombustionDTO;
    mobileCombustionUsage?: MobileCombustionUsageDTO;
    mobileCombustionDistance?: MobileCombustionDistanceDTO;
    purchasedElectricity?: PurchasedElectricityDTO;
}
