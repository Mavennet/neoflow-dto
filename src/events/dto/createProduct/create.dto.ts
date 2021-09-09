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
  COMPACT_PlaceDTO,
  COMPACT_OrganizationDTO,
  COMPACT_MeasurementDTO,
  COMPACT_ObservationDTO
} from '../../../general'

export class AGENT_COMPACT_CreateProductDTO {
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
  @Type(() => COMPACT_PlaceDTO)
  facility: COMPACT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  manufacturer: COMPACT_OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_MeasurementDTO)
  weight: COMPACT_MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => COMPACT_MeasurementDTO)
  width?: COMPACT_MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => COMPACT_MeasurementDTO)
  length?: COMPACT_MeasurementDTO

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => COMPACT_ObservationDTO)
  observation: COMPACT_ObservationDTO[]
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
