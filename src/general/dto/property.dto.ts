import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, IsEnum, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE_NF as JSON_TYPE, MECHANICAL_PROPERTY_TYPE, CHEMICAL_PROPERTY_TYPE, GAS_PROPERTY_TYPE } from '../constants'

export class PropertyDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  //  Need to resolve issue with JSON types between trace and nf-dto
  @Validate(
    (o) =>
      o.type === [JSON_TYPE.MECHANICAL_PROPERTY] ||
      o.type === [JSON_TYPE.CHEMICAL_PROPERTY] ||
      o.type === [JSON_TYPE.GAS_PROPERTY]
  )
  type: JSON_TYPE[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  identifier?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum({
    ...MECHANICAL_PROPERTY_TYPE,
    ...CHEMICAL_PROPERTY_TYPE,
    ...GAS_PROPERTY_TYPE
  })
  name: MECHANICAL_PROPERTY_TYPE | CHEMICAL_PROPERTY_TYPE | GAS_PROPERTY_TYPE

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string
}
