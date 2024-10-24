import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { Equals, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, ValidateNested } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { MeasurementDTO } from './measurement.dto'
import { PropertyDTO } from './property.dto'

export class ObservationDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.OBSERVATION)
  type: JSON_TYPE.OBSERVATION

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PropertyDTO)
  property: PropertyDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  measurement: MeasurementDTO
}

export abstract class COMPACT_ObservationDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.OBSERVATION)
  type: JSON_TYPE.OBSERVATION

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  identifier?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unit?: string
}
