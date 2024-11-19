import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  Equals,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { KEY_TYPES, PROOF_PURPOSE_TYPE } from '../../general'
import { CredentialStatusDTO } from './'

export class CredentialOptionsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @Equals(PROOF_PURPOSE_TYPE.ASSERTION_METHOD)
  proofPurpose?: PROOF_PURPOSE_TYPE.ASSERTION_METHOD

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  assertionMethod?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  issuer?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  verificationMethod?: string

  @ApiProperty()
  @IsDateString()
  @ValidateIf((object, value) => value !== undefined)
  created?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  challenge?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  domain?: string

  @ApiProperty({ type: () => CredentialStatusDTO })
  @ValidateIf((object, value) => value !== undefined)
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsEnum(KEY_TYPES)
  @IsString()
  type: KEY_TYPES
}
