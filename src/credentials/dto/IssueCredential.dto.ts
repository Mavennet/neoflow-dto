import { IsNotEmpty, ValidateNested, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CredentialOptions } from './credentialOptions.dto'
import { Credential } from './credential'
import { Type } from 'class-transformer'

export class IssueCredentialDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Credential)
  credential: Credential

  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => CredentialOptions)
  options?: CredentialOptions
}
