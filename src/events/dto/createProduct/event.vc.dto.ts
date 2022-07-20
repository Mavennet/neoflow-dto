import {
  IsNotEmpty,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  ValidateIf,
  Matches,
  IsUrl
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { CORE_CreationEventCredentialSubjectDTO } from './event.credentialSubject'

class CreationEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl()
  @Matches(/^http(?::\/\/localhost:\d{4}\/v1\/credentials\/verify|s:\/\/api-(?:prod|staging)\..+\.neoflow\.energy)/)
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('CreationEventCredential'))
  type: string[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_CreationEventCredentialSubjectDTO)
  credentialSubject: CORE_CreationEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class CreationEventDetailsDTO extends CreationEventDetailsDTOBase {}
