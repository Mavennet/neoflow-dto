import { IsNotEmpty, IsString, IsDateString, Matches } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class VerifiableCredentialDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  type: string

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  created: Date

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  jws: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  proofPurpose: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  @ApiProperty()
  verificationMethod: string
}
