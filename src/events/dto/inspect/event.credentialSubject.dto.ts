import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayNotEmpty, Equals, IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { JSON_TYPE, ObservationDTO } from '../../../general'

export class InspectionEventCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.INSPECTION_REPORT)
  type: JSON_TYPE.INSPECTION_REPORT

  @ApiProperty({ isArray: true, type: () => ObservationDTO })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
