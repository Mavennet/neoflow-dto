import {
  IsDateString,
  IsString,
  IsOptional,
  IsNotEmpty,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'

import {
  MobileCombustionDistanceDTO,
  MobileCombustionUsageDTO,
  ProcessEmissionDTO,
  PurchasedElectricityDTO,
  StationaryCombustionDTO
} from './'

export class CarbonFootprintDetailsDTO {
  @IsNotEmpty()
  @IsDateString()
  startDate: string

  @IsNotEmpty()
  @IsDateString()
  endDate: string

  @IsNotEmpty()
  @IsString()
  role: string

  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessEmissionDTO)
  processEmission?: ProcessEmissionDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => StationaryCombustionDTO)
  stationaryCombustion?: StationaryCombustionDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => MobileCombustionUsageDTO)
  mobileCombustionUsage?: MobileCombustionUsageDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => MobileCombustionDistanceDTO)
  mobileCombustionDistance?: MobileCombustionDistanceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PurchasedElectricityDTO)
  purchasedElectricity?: PurchasedElectricityDTO
}
