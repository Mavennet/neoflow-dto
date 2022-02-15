import { Type } from 'class-transformer'
import {
  ArrayContains,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsUrl,
  Matches,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'
import { VerifiableCredentialDTO } from '../../../../credentials/dto/VerifiableCredential.dto'
import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto'

export class QPInBondEventVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  id: string

  @IsArray()
  @ArrayMinSize(1)
  @ArrayContains([JSON_TYPE.VERIFIABLE_CREDENTIAL])
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  proof: VerifiableCredentialDTO
}
