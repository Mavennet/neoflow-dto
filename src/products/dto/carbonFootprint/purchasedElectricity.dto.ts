import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumber,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { MeasurementDTO } from 'mavennet-dto'
import { ApiProperty } from '@nestjs/swagger'

export class PurchasedElectricityDTO {
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // co2EmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  subregion: string

  // @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  electricityConsumption: MeasurementDTO
}
