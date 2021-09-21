import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUrl,
  IsString,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../../general/constants'
import { VerifiableCredentialDTO } from '../../general/dto/verifiableCredential.dto'
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'

export class ProductVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  id: string

  @IsArray()
  @ArrayMinSize(1)
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @IsNotEmpty()
  @IsDateString()
  issuanceDate: Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  credentialSubject: ProductCredentialSubjectDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  proof: VerifiableCredentialDTO
}
