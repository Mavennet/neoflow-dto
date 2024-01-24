import { ApiProperty } from '@nestjs/swagger'
import {
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE_NF, OrganizationDTO } from '../../../general'

export class TSCACertificationCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  certificationType: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  certifierDetails: OrganizationDTO
}
