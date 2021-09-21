import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
// import { Type } from 'class-transformer'
// import { CredentialOptions } from '../../credentials/dto/credentialOptions.dto'
// import { Proof } from '../../credentials/dto/proof'

// class VerifiablePresentation {
//   '@context'
//   id
//   type
//   holder
//   verifiableCredential // array type
//   proof?: Proof
// }

export class VerifiablePresentationDTO {
  @ApiProperty()
  @IsNotEmpty()
  // @ValidateNested()
  // @Type(() => VerifiablePresentation)
  verifiablePresentation: any

  @ApiProperty()
  // @ValidateNested()
  @IsOptional()
  // @Type(() => CredentialOptions)
  options?: any
}
