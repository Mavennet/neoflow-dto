import { IsNotEmpty, IsOptional, IsEnum, IsString, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'

export class MeasurementDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.MEASURED_VALUE] || o.type === [JSON_TYPE.QUANTITATIVE_VALUE])
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  unitCode: string

  @IsNotEmpty()
  @IsString()
  value: string
}
