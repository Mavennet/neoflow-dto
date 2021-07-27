import {
  IsDateString,
  IsString,
  IsOptional,
  IsNotEmpty,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import {
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

  // @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessEmissionDTO)
  processEmission?: ProcessEmissionDTO

  // @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => StationaryCombustionDTO)
  stationaryCombustion?: StationaryCombustionDTO

  // @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => MobileCombustionUsageDTO)
  mobileCombustionUsage?: MobileCombustionUsageDTO

  // @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => MobileCombustionDistanceDTO)
  mobileCombustionDistance?: MobileCombustionDistanceDTO

  // @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PurchasedElectricityDTO)
  purchasedElectricity?: PurchasedElectricityDTO
}
