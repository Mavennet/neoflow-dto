import {
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  ValidateIf,
  Matches,
  IsUrl
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto'

export class DeliveryTicketVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('OGDeliveryTicketCredential'))
  type: string[]

  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  issuer?: string

  @IsOptional()
  @IsDateString()
  issuanceDate?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryTicketCredentialSubjectDTO)
  credentialSubject: DeliveryTicketCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
