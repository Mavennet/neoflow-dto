import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class MeasurementDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.MEASURED_VALUE) || o.type.includes(JSON_TYPE.QUANTITATIVE_VALUE))
  type: JSON_TYPE[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  unitCode?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string
}

export abstract class COMPACT_MeasurementDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unit?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string
}
