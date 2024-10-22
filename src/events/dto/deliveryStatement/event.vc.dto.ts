import { Type } from 'class-transformer'
import {
  ArrayContains,
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE_NF } from '../../../general'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { TICKET_TYPE } from '../../constants'
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto'
import { CredentialDTO } from '../../../credentials'

export class DeliveryStatementVCDTO extends CredentialDTO<DeliveryStatementCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryStatementCredentialSubjectDTO)
  credentialSubject: DeliveryStatementCredentialSubjectDTO

  @IsOptional()
  @IsEnum(TICKET_TYPE)
  ticketType?: TICKET_TYPE
}
