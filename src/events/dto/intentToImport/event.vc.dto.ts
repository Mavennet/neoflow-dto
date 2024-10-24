import { Type } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CredentialDTO } from '../../../credentials'
import { TICKET_TYPE } from '../../constants'
import { IntentToImportCredentialSubjectDTO } from './event.credentialSubject.dto'

export class IntentToImportVCDTO extends CredentialDTO<IntentToImportCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => IntentToImportCredentialSubjectDTO)
  credentialSubject: IntentToImportCredentialSubjectDTO

  @IsOptional()
  @IsEnum(TICKET_TYPE)
  ticketType?: TICKET_TYPE
}
