import {
  IsNotEmpty,
  IsNotEmptyObject,
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsString,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  JSON_TYPE_METAL,
  InspectionDTO
} from '../../general'
import { ApiProperty } from '@nestjs/swagger'

export class SteelProductDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_METAL, { each: true })
  @Validate(o => o.type === [JSON_TYPE_METAL.STEEL_PRODUCT])
  type: JSON_TYPE_METAL[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  specification: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  originalCountryOfMeltAndPour: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => InspectionDTO)
  inspection: InspectionDTO
}
