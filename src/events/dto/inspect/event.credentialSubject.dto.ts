import {
  ValidateNested,
  IsEnum,
  IsArray,
  ArrayNotEmpty
} from 'class-validator'
import { Type } from 'class-transformer'
import { ObservationDTO, JSON_TYPE } from '../../../general'

export class InspectionEventCredentialSubjectDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  type: JSON_TYPE[]

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
