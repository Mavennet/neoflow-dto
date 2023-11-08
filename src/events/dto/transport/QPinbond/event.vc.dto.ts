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
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'
import { ProofDTO } from '../../../../general/dto'
import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto'

export class QPInBondEventVCDTO {
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

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
