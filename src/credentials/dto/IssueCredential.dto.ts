import { IsNotEmpty, ValidateNested, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CredentialOptionsDTO } from './credentialOptions.dto'
import { CredentialDTO } from './credential'
import { Type } from 'class-transformer'

export class IssueCredentialDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CredentialDTO)
  credential: CredentialDTO

  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => CredentialOptionsDTO)
  options?: CredentialOptionsDTO
}
