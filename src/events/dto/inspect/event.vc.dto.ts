import {
  IsNotEmpty,
  IsArray,
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
import { CORE_InspectCredentialSubjectDTO } from './event.credentialSubject.dto'
import { ApiProperty } from '@nestjs/swagger'

export class InspectVCDTO extends VerifiableCredentialDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @Validate(o =>
    o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
    o['@context'].includes('https://schema.org/') &&
    o['@context'].includes('https://mavennet.github.io/contexts/metal-product-EVENT-v1.0.jsonld')
  )
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Validate(o =>
    o.type.includes(JSON_TYPE.VERIFIABLE_CREDENTIAL) &&
    o.type.includes(JSON_TYPE_METAL.INSPECT_EVENT_CREDENTIAL)
  )
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_InspectCredentialSubjectDTO)
  credentialSubject: CORE_InspectCredentialSubjectDTO
}
