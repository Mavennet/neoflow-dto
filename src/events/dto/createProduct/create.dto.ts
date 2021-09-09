import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  IsNumberString,
  IsUUID,
  IsEnum,
  IsArray,
  ValidateNested,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  PRODUCT_NAME,
  ProductVCDTO,
  ProductCredentialSubjectDTO
} from '../../../products'
import { EventCreateVCDTO } from './event.vc.dto'
import {
  AGENT_EventCreateCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  Place,
  Organization,
  Measurement,
  Observation
} from '../../../general'

export class CreateProduct {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PRODUCT_NAME)
  productName: PRODUCT_NAME

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.productName !== PRODUCT_NAME.HEAT)
  hsCode: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.productName === PRODUCT_NAME.HEAT)
  heatNumber: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  grade?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sku?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Place)
  facility: Place

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  manufacturer: Organization

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Measurement)
  weight: Measurement

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => Measurement)
  width?: Measurement

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => Measurement)
  length?: Measurement

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Observation)
  observation: Observation[]
}

export class AGENT_CreateProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_EventCreateCredentialSubjectDTO)
  eventCredentialSubject: AGENT_EventCreateCredentialSubjectDTO
}

export class CORE_CreateProductDTO {
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

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EventCreateVCDTO)
  eventVC: EventCreateVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string
}
