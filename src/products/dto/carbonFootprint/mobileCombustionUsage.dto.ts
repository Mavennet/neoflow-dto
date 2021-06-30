import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumberString,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { MeasurementDTO } from 'mavennet-dto'

export class MobileCombustionUsageDTO {
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
  fuelType: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  fuelUsage: MeasurementDTO
}
