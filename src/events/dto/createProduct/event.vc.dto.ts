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
import { VerifiableCredentialDTO } from '../../../credentials/dto/verifiableCredential.dto'
import { CORE_CreationEventCredentialSubjectDTO } from './event.credentialSubject'

class CreationEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
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
  issuanceDate: Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_CreationEventCredentialSubjectDTO)
  credentialSubject: CORE_CreationEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  proof: VerifiableCredentialDTO
}

export class CreationEventDetailsDTO extends CreationEventDetailsDTOBase {
}
