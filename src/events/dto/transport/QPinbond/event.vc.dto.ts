import { Type } from 'class-transformer'
import {
  ArrayContains,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'
import { ProofDTO } from '../../../../general/dto'
import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto'

export class QPInBondEventVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
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
  @Type(() => ProofDTO)
  proof: ProofDTO
}
