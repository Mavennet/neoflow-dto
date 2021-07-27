import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumber
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'
import { ApiProperty } from '@nestjs/swagger'

interface FuelTypesDetails {
  fuelType: string
  fuelUsage: MeasurementDTO
}

export class StationaryCombustionDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  co2EmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ch4EmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  no2EmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  fuelTypesDetails: FuelTypesDetails[]
}
