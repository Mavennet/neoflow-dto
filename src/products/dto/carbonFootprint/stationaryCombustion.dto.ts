import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumber
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'

interface FuelTypesDetails {
  fuelType: string
  fuelUsage: MeasurementDTO
}

export class StationaryCombustionDTO {
  @IsNotEmpty()
  @IsNumber()
  co2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumber()
  co2eEmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumber()
  ch4EmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumber()
  no2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  fuelTypesDetails: FuelTypesDetails[]
}
