import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumberString
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'

interface FuelTypesDetails {
  fuelType: string
  fuelUsage: MeasurementDTO
}

export class StationaryCombustionDTO {
  @IsNotEmpty()
  @IsNumberString()
  co2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumberString()
  ch4EmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumberString()
  no2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  fuelTypesDetails: FuelTypesDetails[]
}
