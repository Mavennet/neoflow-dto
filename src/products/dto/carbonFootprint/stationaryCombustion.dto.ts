import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumber,
  IsString,
  ValidateNested
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'

class FuelTypesDetails {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fuelType: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MeasurementDTO)
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
  @ValidateNested({ each: true })
  fuelTypesDetails: FuelTypesDetails[]
}
