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

export class SteelProductDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_METAL, { each: true })
  @Validate(o => o.type === [JSON_TYPE_METAL.STEEL_PRODUCT])
  type: JSON_TYPE_METAL[]

  @IsNotEmpty()
  @IsString()
  specification: string

  @IsNotEmpty()
  @IsString()
  originalCountryOfMeltAndPour: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => InspectionDTO)
  inspection: InspectionDTO
}
