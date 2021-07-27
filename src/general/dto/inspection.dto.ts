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
import { ApiProperty } from '@nestjs/swagger'

export class InspectionDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_METAL, { each: true })
  @Validate(o => o.type === [JSON_TYPE_METAL.INSPECTION_REPORT])
  type: JSON_TYPE_METAL[]

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
