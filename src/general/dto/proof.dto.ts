import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator'
import { PROOF_PURPOSE_TYPE, KEY_TYPES } from '../constants'

export abstract class ProofDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(KEY_TYPES)
  type: KEY_TYPES

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  created: Date

  @ApiProperty()
  @IsEnum(PROOF_PURPOSE_TYPE)
  proofPurpose?: PROOF_PURPOSE_TYPE

  @ApiProperty()
  @ValidateIf((object) => object.type === KEY_TYPES.Ed25519Signature2020)
  @IsNotEmpty()
  proofValue: string

  @ApiProperty()
  @ValidateIf((object) => object.type === KEY_TYPES.Ed25519Signature2018)
  @IsNotEmpty()
  jws: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  verificationMethod?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  challenge?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  domain?: string
}
