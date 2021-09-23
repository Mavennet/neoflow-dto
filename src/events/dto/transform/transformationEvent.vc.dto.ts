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
import { CORE_TransformationEventCredentialSubjectDTO, AGENT_TransformationEventCredentialSubjectDTO } from './transformationEventCredentialSubject.dto'

class TransformationEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== "development" })
  @ValidateIf((o) => o.id.startsWith('http://neo-flow.com/credentials/'))
  id: string

  @IsArray()
  @ArrayMinSize(1)
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

export class CORE_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransformationEventCredentialSubjectDTO)
  credentialSubject: CORE_TransformationEventCredentialSubjectDTO
}

export class AGENT_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransformationEventCredentialSubjectDTO)
  credentialSubject: AGENT_TransformationEventCredentialSubjectDTO
}
