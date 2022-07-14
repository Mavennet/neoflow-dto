import {
  IsNotEmpty,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  ValidateIf,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from '../../../general/dto/proof.dto'
import {
  CORE_StorageEventCredentialSubjectDTO,
  AGENT_StorageEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

class StorageEventDetailsDTOBase {
  @IsNotEmpty()
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
  issuanceDate: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
  @IsNotEmpty()
  @Matches(/^(?:https:\/\/api-)(?:staging|prod)\..+\.neoflow\.energy$/)
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
