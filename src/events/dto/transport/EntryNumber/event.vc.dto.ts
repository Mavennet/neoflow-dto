import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsOptional,
  ArrayContains,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'
import { ProofDTO } from '../../../../general/dto'
import { EntryNumberCredentialSubjectDTO } from './credentialSubject.dto'

export class EntryNumberEventVCDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayContains([JSON_TYPE.VERIFIABLE_CREDENTIAL])
  type: JSON_TYPE[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  issuanceDate?: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntryNumberCredentialSubjectDTO)
  credentialSubject: EntryNumberCredentialSubjectDTO

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
