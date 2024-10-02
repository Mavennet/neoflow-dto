import {
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Matches,
  IsUrl,
  ArrayContains,
  IsEnum
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto'
import { JSON_TYPE_NF } from '../../../general'
import { TICKET_TYPE } from '../../constants'

export class DeliveryStatementVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
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
  issuanceDate?: string | Date

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
