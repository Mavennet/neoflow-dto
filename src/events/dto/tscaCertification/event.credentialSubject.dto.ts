import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator'
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
