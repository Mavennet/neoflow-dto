import {
  IsNotEmpty,
  IsOptional,
  IsArray,
  ArrayMinSize,
  IsEnum,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { TRANSFORM_TYPE } from '../../constants'
import {
  ProductVCDTO,
  ProductCredentialSubjectDTO,
  ProductBrief
} from '../../../products'
import { AGENT_COMPACT_CreateProductDTO } from '../createProduct'
import { TransformEventVCDTO } from './event.vc.dto'
import {
  AGENT_TransformEventCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class AGENT_COMPACT_TransformProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSFORM_TYPE)
  eventType: TRANSFORM_TYPE

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AGENT_COMPACT_CreateProductDTO)
  newProducts: AGENT_COMPACT_CreateProductDTO[]

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductBrief)
  consumedProducts: ProductBrief[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sku?: string
}

export class AGENT_TransformOutputProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO
}

export class AGENT_TransformProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  inputProductIds: string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AGENT_TransformOutputProductDTO)
  outputProducts: AGENT_TransformOutputProductDTO[]

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransformEventCredentialSubjectDTO)
  eventCredentialSubject: AGENT_TransformEventCredentialSubjectDTO
}

export class CORE_TransformOutputProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productVCHash: string
}

export class CORE_TransformProductDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CORE_TransformOutputProductDTO)
  outputProducts: CORE_TransformOutputProductDTO[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TransformEventVCDTO)
  eventVC: TransformEventVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string
}
