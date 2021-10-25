import { IsNotEmptyObject, IsEnum, ValidateNested, IsArray, ArrayNotEmpty, Validate, IsOptional, IsString, IsNotEmpty } from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { PropertyDTO } from './property.dto'
import { MeasurementDTO } from './measurement.dto'

export class ObservationDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.OBSERVATION])
  type: JSON_TYPE[]

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PropertyDTO)
  property: PropertyDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  measurement: MeasurementDTO
}

export abstract class COMPACT_ObservationDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.OBSERVATION])
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  identifier?: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description?: string

  @IsNotEmpty()
  @IsString()
  value: string

  @IsOptional()
  @IsString()
  unit?: string
}