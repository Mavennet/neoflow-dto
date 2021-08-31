import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumber,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { MeasurementDTO } from 'mavennet-dto'
import { ApiProperty } from '@nestjs/swagger'

class DistanceDetails {
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

export class MobileCombustionDistanceDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  co2EmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  co2eEmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ch4EmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  no2EmissionsInTonnes: number

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  distanceDetails: DistanceDetails[]
}
