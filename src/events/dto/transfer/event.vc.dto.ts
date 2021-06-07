import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { VerifiableCredentialDTO } from '../../../general'
import {
  CORE_TransferEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

export class TransferEventVCDTO extends VerifiableCredentialDTO {
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
  @Validate(o => o.type.includes('VerifiableCredential'))
  type: string[]

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransferEventCredentialSubjectDTO)
  credentialSubject: CORE_TransferEventCredentialSubjectDTO
}
