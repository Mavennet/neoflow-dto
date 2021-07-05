import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumber,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { MeasurementDTO } from 'mavennet-dto'

export class MobileCombustionDistanceDTO {
  @IsNotEmpty()
  @IsNumber()
  co2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumber()
  ch4EmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumber()
  no2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsString()
  vehicleType: string

  @IsNotEmpty()
  @IsString()
  fuelType: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  distance: MeasurementDTO
}
