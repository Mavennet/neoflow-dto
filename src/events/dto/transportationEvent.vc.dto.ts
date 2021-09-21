import {
  IsNotEmpty,
  IsUrl,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  ValidateIf,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { VerifiableCredentialDTO } from '../../general/dto/verifiableCredential.dto'
import { TransportationEventCredentialSubjectDTO } from './transportationEventCredentialSubject.dto'

export class TransportationEventDetailsDTO {
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @ValidateIf(
    (o) =>
      o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
      o['@context'].includes('https://schema.org/') &&
      o['@context'].includes('https://mavennet.github.io/contexts/v1.jsonld')
  )
  '@context': string[]

  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.id.startsWith('http://neo-flow.com/credentials/'))
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('TransportationEventCredential'))
  type: string[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @IsNotEmpty()
  @IsDateString()
  issuanceDate: Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TransportationEventCredentialSubjectDTO)
  credentialSubject: TransportationEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  proof: VerifiableCredentialDTO
}
