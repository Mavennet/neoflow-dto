import { Type } from 'class-transformer'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUrl,
  Matches,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto'
import {
  AGENT_TransformationEventCredentialSubjectDTO,
  CORE_TransformationEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

class TransformationEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
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
