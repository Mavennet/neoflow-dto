import {
  IsNotEmpty,
  IsUrl,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  ValidateIf,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto'
import { CORE_TransportationEventCredentialSubjectDTO, AGENT_TransportationEventCredentialSubjectDTO } from './transportationEventCredentialSubject.dto'

class TransportationEventDetailsDTOBase {
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

export class CORE_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransportationEventCredentialSubjectDTO)
  credentialSubject: CORE_TransportationEventCredentialSubjectDTO
}

export class AGENT_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransportationEventCredentialSubjectDTO)
  credentialSubject: AGENT_TransportationEventCredentialSubjectDTO
}
