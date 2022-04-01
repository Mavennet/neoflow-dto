import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from 'class-validator'
import {
  COMPACT_MeasurementDTO,
  COMPACT_ObservationDTO,
  COMPACT_OrganizationDTO,
  COMPACT_PlaceDTO
} from '../../../general'
import { ProductVCDTO, PRODUCT_NAME } from '../../../products'
import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto'
import { AGENT_CreationEventCredentialSubjectDTO } from './event.credentialSubject'
import { CreationEventDetailsDTO } from './event.vc.dto'

class CreateProductDTOBase {
  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  batchNumber: string
}

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

  @ApiProperty({ type: [COMPACT_ObservationDTO] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => COMPACT_ObservationDTO)
  observation: COMPACT_ObservationDTO[]
}

export class AGENT_CreateProductDTO extends CreateProductDTOBase {
  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AGENT_CreationEventCredentialSubjectDTO)
  eventCredentialSubject: AGENT_CreationEventCredentialSubjectDTO
}

export class CORE_CreateProductDTO extends CreateProductDTOBase {
  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreationEventDetailsDTO)
  eventVC: CreationEventDetailsDTO
}
