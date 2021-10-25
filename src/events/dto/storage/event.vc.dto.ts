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
import { CORE_StorageEventCredentialSubjectDTO, AGENT_StorageEventCredentialSubjectDTO} from './event.credentialSubject.dto'

class StorageEventDetailsDTOBase {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== "development" })
  id: string

  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

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

export class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== "development" })
  @ValidateIf((o) => o.id.startsWith('http://neo-flow.com/credentials/'))
  id: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_StorageEventCredentialSubjectDTO)
  credentialSubject: AGENT_StorageEventCredentialSubjectDTO
}

export class CORE_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_StorageEventCredentialSubjectDTO)
  credentialSubject: CORE_StorageEventCredentialSubjectDTO
}