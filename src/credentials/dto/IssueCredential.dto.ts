import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator'
import { CredentialDTO } from './credential.dto'
import { CredentialOptionsDTO } from './credentialOptions.dto'

export class IssueCredentialDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CredentialDTO)
  credential: CredentialDTO<any>

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => CredentialOptionsDTO)
  @IsObject()
  options?: CredentialOptionsDTO
}
