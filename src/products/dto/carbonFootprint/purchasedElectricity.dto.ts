import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumberString,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { MeasurementDTO } from 'mavennet-dto'

export class PurchasedElectricityDTO {
  @IsNotEmpty()
  @IsNumberString()
  co2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsString()
  subregion: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  electricityConsumption: MeasurementDTO
}
