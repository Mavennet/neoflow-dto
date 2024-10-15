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

export class DeliveryStatementVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ArrayContains([JSON_TYPE_NF.VERIFIABLE_CREDENTIAL, JSON_TYPE_NF.DELIVERY_STATEMENT_CREDENTIAL])
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  issuer?: string

  @IsOptional()
  @IsDateString()
  validFrom?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryStatementCredentialSubjectDTO)
  credentialSubject: DeliveryStatementCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO

  @IsOptional()
  @IsEnum(TICKET_TYPE)
  ticketType?: TICKET_TYPE
}
