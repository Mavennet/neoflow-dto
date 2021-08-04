import {
  IsDateString,
  IsString,
  IsOptional,
  IsNotEmpty,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  CarbonFootprintEventsDTO,
  MobileCombustionDistanceDTO,
  MobileCombustionUsageDTO,
  ProcessEmissionDTO,
  PurchasedElectricityDTO,
  StationaryCombustionDTO
} from './'

export class CarbonFootprintDetailsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  startDate: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  endDate: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  role: string

  @ApiPropertyOptional({ type: () => ProcessEmissionDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessEmissionDTO)
  processEmission?: ProcessEmissionDTO

  @ApiPropertyOptional({ type: () => StationaryCombustionDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => StationaryCombustionDTO)
  stationaryCombustion?: StationaryCombustionDTO

  @ApiPropertyOptional({ type: () => MobileCombustionUsageDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => MobileCombustionUsageDTO)
  mobileCombustionUsage?: MobileCombustionUsageDTO

  @ApiPropertyOptional({ type: () => MobileCombustionDistanceDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => MobileCombustionDistanceDTO)
  mobileCombustionDistance?: MobileCombustionDistanceDTO

  @ApiPropertyOptional({ type: () => PurchasedElectricityDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => PurchasedElectricityDTO)
  purchasedElectricity?: PurchasedElectricityDTO

  @ApiPropertyOptional({ type: () => CarbonFootprintEventsDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => CarbonFootprintEventsDTO)
  carbonFootprintEvents?: CarbonFootprintEventsDTO
}
