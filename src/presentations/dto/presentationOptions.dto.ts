import { ApiPropertyOptional } from '@nestjs/swagger'
import { Equals, IsDateString, IsOptional, IsString } from 'class-validator'
import { PROOF_PURPOSE_TYPE } from '../../general'

export class PresentationOptionsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @Equals(PROOF_PURPOSE_TYPE.AUTHENTICATION)
  proofPurpose?: PROOF_PURPOSE_TYPE.AUTHENTICATION

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  verificationMethod?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  created?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  challenge?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  domain?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  type?: string
}
