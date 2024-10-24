import { CredentialDTO } from '@mavennet/traceability-dto'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmptyObject, ValidateNested } from 'class-validator'
import { EntryNumberCredentialSubjectDTO } from './credentialSubject.dto'

export class EntryNumberEventVCDTO extends CredentialDTO<EntryNumberCredentialSubjectDTO> {
  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntryNumberCredentialSubjectDTO)
  credentialSubject: EntryNumberCredentialSubjectDTO
}
