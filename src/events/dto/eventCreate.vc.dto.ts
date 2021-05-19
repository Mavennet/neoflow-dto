import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { VerifiableCredentialDTO } from '../../general'
import {
  CORE_EventCreateCredentialSubjectDTO
} from './eventCreate.credentialSubject.dto'

export class EventCreateVCDTO extends VerifiableCredentialDTO {
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @Validate(o =>
    o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
    o['@context'].includes('https://schema.org/') &&
    o['@context'].includes('https://mavennet.github.io/contexts/metal-product-EVENT-v1.0.jsonld')
  )
  '@context': string[]

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Validate(o =>
    o.type.includes('VerifiableCredential') &&
    o.type.includes('CreationEventCredential')
  )
  type: string[]

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_EventCreateCredentialSubjectDTO)
  credentialSubject: CORE_EventCreateCredentialSubjectDTO
}