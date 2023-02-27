import {
  IsOptional,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  Matches
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import type { JSON_TYPE } from '../../general/constants'
import { ProofDTO } from '../../general/dto/proof.dto'
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'

class ProductVCDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty()
  '@context': string[]

  @IsNotEmpty()
  @ApiProperty()
  id: string

  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty()
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  @ApiProperty()
  issuer: string

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  issuanceDate?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  @ApiProperty()
  credentialSubject: ProductCredentialSubjectDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProofDTO)
  @ApiProperty()
  proof: ProofDTO
}

export class ProductVCDTO extends ProductVCDTOBase {}
