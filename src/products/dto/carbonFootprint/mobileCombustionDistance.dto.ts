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

export class MobileCombustionDistanceDTO {
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
  @IsString()
  vehicleType: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fuelType: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  distance: MeasurementDTO
}
