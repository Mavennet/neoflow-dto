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
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../../general/constants'
import { VerifiableCredentialDTO } from '../../credentials/dto/verifiableCredential.dto'
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'

class ProductVCDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty()
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  @ApiProperty()
  id: string

  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty({ enum: JSON_TYPE, isArray: true })
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  @ApiProperty()
  issuer: string

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  issuanceDate: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  @ApiProperty()
  credentialSubject: ProductCredentialSubjectDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  @ApiProperty()
  proof: VerifiableCredentialDTO
}

export class ProductVCDTO extends ProductVCDTOBase {
}
