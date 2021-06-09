import {
  IsNotEmpty,
  IsArray,
  IsUrl,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  VerifiableCredentialDTO,
  JSON_TYPE,
  JSON_TYPE_METAL
} from '../../../general'
import {
  CORE_TransformEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

export class TransformEventVCDTO extends VerifiableCredentialDTO {
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
  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @Validate(o => o.type.includes(JSON_TYPE.VERIFIABLE_CREDENTIAL))
  type: JSON_TYPE[]
  
  @IsNotEmpty()
  @IsUrl()
  id: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransformEventCredentialSubjectDTO)
  credentialSubject: CORE_TransformEventCredentialSubjectDTO
}