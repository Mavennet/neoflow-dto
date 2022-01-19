import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
// import { CredentialOptions } from './credentialOptions.dto'
// import { Type } from 'class-transformer'
// import { Credential } from './credential'
// import { Proof } from './proof'

// class VerifiableCredential extends Credential {
//   proof: Proof
// }

export class VerifiableCredentialsDTO {
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
