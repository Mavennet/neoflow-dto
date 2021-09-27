import { IsNotEmpty, IsOptional, IsEnum, IsString, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class MeasurementDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.MEASURED_VALUE] || o.type === [JSON_TYPE.QUANTITATIVE_VALUE])
  type: JSON_TYPE[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  unitCode: string

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