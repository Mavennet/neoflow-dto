import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumberString,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { MeasurementDTO } from 'mavennet-dto'

export class MobileCombustionDistanceDTO {
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
