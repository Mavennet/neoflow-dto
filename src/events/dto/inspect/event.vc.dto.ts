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
import { AGENT_InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto'

class InspectionEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  @ValidateIf((o) => o.id.startsWith('http://neo-flow.com/credentials/'))
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('InspectionEventCredential'))
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
  @Type(() => AGENT_InspectionEventCredentialSubjectDTO)
  credentialSubject: AGENT_InspectionEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  proof: VerifiableCredentialDTO
}

export class InspectionEventDetailsDTO extends InspectionEventDetailsDTOBase {
}

//Disparity in code below and code in NF DTO package

// export class InspectionEventDetailsDTO {
//   @IsArray()
//   @ArrayMinSize(3)
//   @ArrayMaxSize(3)
//   @ValidateIf(
//     (o) =>
//       o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
//       o['@context'].includes('https://schema.org/') &&
//       o['@context'].includes('https://mavennet.github.io/contexts/crude-product-EVENT-v1.0.jsonld')
//   )
//   '@context': string[]

