import { IsNotEmpty, IsString, IsDateString, Matches } from 'class-validator'

export class VerifiableCredentialDTO {
  @IsNotEmpty()
  @IsString()
  type: string

  @IsNotEmpty()
  @IsDateString()
  created: Date

  @IsNotEmpty()
  @IsString()
  jws: string

  @IsNotEmpty()
  @IsString()
  proofPurpose: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  verificationMethod: string
}
