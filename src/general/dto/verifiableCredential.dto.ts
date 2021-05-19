import {
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  Validate
} from 'class-validator'
import {
  VerifiableCredentialDTO as VerifiableCredentialDTOBase
} from 'mavennet-dto'

export class VerifiableCredentialDTO extends  VerifiableCredentialDTOBase {
	@IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
	@Validate(o =>
    o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
    o['@context'].includes('https://schema.org/') &&
    o['@context'].includes('https://mavennet.github.io/contexts/metal-EVENT-v1.0.jsonld')
  )
  '@context': string[]
}

