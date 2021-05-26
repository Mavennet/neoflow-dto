import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE_METAL } from '../../general'
import { JSON_TYPE } from 'mavennet-dto'
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto'
import { VerifiableCredentialDTO } from 'mavennet-dto'

export class ProductVCDTO extends VerifiableCredentialDTO {
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @Validate(o =>
    o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
    o['@context'].includes('https://schema.org/') &&
    o['@context'].includes('https://mavennet.github.io/contexts/metal-product-v1.0.jsonld')
  )
  '@context': string[]

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Validate(o =>
    o.type.includes(JSON_TYPE.VERIFIABLE_CREDENTIAL) &&
    o.type.includes(JSON_TYPE_METAL.METAL_PRODUCT)
  )
  type: string[]

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  credentialSubject: ProductCredentialSubjectDTO
}
