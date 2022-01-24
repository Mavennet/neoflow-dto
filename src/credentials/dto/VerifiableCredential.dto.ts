import { IsNotEmpty, IsOptional, IsString, IsDateString, Matches } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
// import { CredentialOptions } from './credentialOptions.dto'
// import { Type } from 'class-transformer'
// import { Credential } from './credential'
// import { Proof } from './proof'

// class VerifiableCredential extends Credential {
//   proof: Proof
// }

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

  @ApiProperty()
  @IsNotEmpty()
  // @ValidateNested()
  // @Type(() => VerifiableCredential)
  verifiableCredential: any

  @ApiProperty()
  // @ValidateNested()
  @IsOptional()
  // @Type(() => CredentialOptions)
  options?: any
}
