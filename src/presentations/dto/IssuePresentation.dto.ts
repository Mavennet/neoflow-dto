// import { IsNotEmpty, ValidateNested, IsOptional } from 'class-validator'
// import { ApiProperty } from '@nestjs/swagger'
import { CredentialOptions } from '../../credentials/dto/credentialOptions.dto'
// import { Credential } from './credential'
// import { Type } from 'class-transformer'

export class IssuePresentationDTO {
  presentation: any
  options?: CredentialOptions
}
