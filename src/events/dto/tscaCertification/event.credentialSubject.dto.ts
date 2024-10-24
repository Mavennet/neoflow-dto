import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { Equals, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator'
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
