import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  Validate,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../constants'
import { MeasurementDTO } from './measurement.dto'
import { PropertyDTO } from './property.dto'

export class ObservationDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.OBSERVATION))
  type: JSON_TYPE[]

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
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.OBSERVATION))
  type: JSON_TYPE[]

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
