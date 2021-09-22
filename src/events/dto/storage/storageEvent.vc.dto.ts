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
import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto'
import { CORE_StorageEventCredentialSubjectDTO, AGENT_StorageEventCredentialSubjectDTO} from './storageEventCredentialSubject.dto'

class StorageEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('StorageEventCredential'))
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
  @Type(() => VerifiableCredentialDTO)
  proof: VerifiableCredentialDTO
}

export class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
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

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_StorageEventCredentialSubjectDTO)
  credentialSubject: AGENT_StorageEventCredentialSubjectDTO
}

export class CORE_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @ValidateIf(
    (o) =>
      o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
      o['@context'].includes('https://schema.org/') &&
      o['@context'].includes('https://mavennet.github.io/contexts/crude-product-EVENT-v1.0.jsonld')
  )
  '@context': string[]

  @IsNotEmpty()
  @IsUrl()
  id: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_StorageEventCredentialSubjectDTO)
  credentialSubject: CORE_StorageEventCredentialSubjectDTO
}