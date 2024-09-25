import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
  IsArray,
  ArrayMinSize,
  ArrayContains,
  IsDateString,
  ArrayNotEmpty,
  IsEnum,
  IsUUID,
  ValidateIf
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { JSON_TYPE, JSON_TYPE_NF } from '../../general'
import { ProofDTO } from '../../general/dto'

export class ProducerCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  title?: string
}

export class Producer_VC_DTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayContains([JSON_TYPE.VERIFIABLE_CREDENTIAL])
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  issuanceDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expirationDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  issuer?: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProducerCredentialSubjectDTO)
  credentialSubject: ProducerCredentialSubjectDTO

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class CORE_ProducerDTO {
  @ApiProperty()
  @ValidateIf((obj) => !obj.productId || obj.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  producerId: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Producer_VC_DTO)
  producerVC: Producer_VC_DTO
}
