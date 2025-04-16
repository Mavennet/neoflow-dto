import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDateString, IsNotEmpty, IsNotEmptyObject, ValidateNested } from 'class-validator'
import { USMCACredentialSubjectDTO } from './usmcaCredentialSubject.dto'
import { IssuerDTO } from '../general'

export class AGENT_USMCADTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validFrom: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validUntil: string | Date

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => IssuerDTO)
  issuer: IssuerDTO

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => USMCACredentialSubjectDTO)
  credentialSubject: USMCACredentialSubjectDTO
}
