import { IsNotEmpty, IsUUID, IsString, IsNotEmptyObject, IsArray, ArrayMinSize, ValidateNested, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto'
import { AGENT_TransformationEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { AGENT_COMPACT_CreateProductDTO } from '../createProduct'
import { CORE_TransformationEventDetailsDTO, AGENT_TransformationEventDetailsDTO } from './event.vc.dto'

export class AGENT_COMPACT_TransformProductDTO {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AGENT_COMPACT_CreateProductDTO)
  newProducts: AGENT_COMPACT_CreateProductDTO[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sku?: string
}

export class CORE_TransformProductsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString() // TODO fix data type
  txTimestamp: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransformationEventDetailsDTO)
  eventVC: CORE_TransformationEventDetailsDTO

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TransformProductSuccessorDTO)
  productSuccessors: TransformProductSuccessorDTO[]
}

export class AGENT_TransformProductsDTO extends CORE_TransformProductsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransformationEventDetailsDTO)
  eventVC: AGENT_TransformationEventDetailsDTO

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  productParents: string[] // array of uuid

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AGENT_TransformationEventCredentialSubjectDTO)
  eventCredentialSubject: AGENT_TransformationEventCredentialSubjectDTO
}