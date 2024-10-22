import { ApiProperty } from '@nestjs/swagger'
import {
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
  Equals
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE_NF, OrganizationDTO } from '../../../general'

export class TSCACertificationCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.TSCA_CERTIFICATION)
  type: JSON_TYPE_NF.TSCA_CERTIFICATION

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
