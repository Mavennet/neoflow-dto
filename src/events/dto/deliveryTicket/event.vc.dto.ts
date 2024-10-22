import { CredentialDTO } from '@mavennet/traceability-dto'
import { Type } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { TICKET_TYPE } from '../../constants'
import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto'

export class DeliveryTicketVCDTO extends CredentialDTO<DeliveryTicketCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryTicketCredentialSubjectDTO)
  credentialSubject: DeliveryTicketCredentialSubjectDTO

  @IsOptional()
  @IsEnum(TICKET_TYPE)
  ticketType?: TICKET_TYPE
}
