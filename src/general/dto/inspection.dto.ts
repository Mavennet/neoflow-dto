import {
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  ObservationDTO,
  JSON_TYPE_METAL
} from '../../general'

export class InspectionDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_METAL, { each: true })
  @Validate(o => o.type === [JSON_TYPE_METAL.INSPECTION_REPORT])
  type: JSON_TYPE_METAL[]

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
