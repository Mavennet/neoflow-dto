import { Type } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CredentialDTO } from '../../../credentials'
import { TICKET_TYPE } from '../../constants'
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto'

export class DeliveryStatementVCDTO extends CredentialDTO<DeliveryStatementCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryStatementCredentialSubjectDTO)
  credentialSubject: DeliveryStatementCredentialSubjectDTO

  @IsOptional()
  @IsEnum(TICKET_TYPE)
  ticketType?: TICKET_TYPE
}
