import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from 'class-validator'

import { EnvelopedVerifiableCredential } from '../../../credentials'
import {
  COMPACT_MeasurementDTO,
  COMPACT_ObservationDTO,
  COMPACT_OrganizationDTO,
  COMPACT_PlaceDTO
} from '../../../general'
import { PRODUCT_NAME } from '../../../products'
import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto'
import { type DeliveryTicketCredentialSubjectDTO } from '../deliveryTicket'
import { type DeliveryScheduledCredentialSubjectDTO } from '../transport'

class CreateProductDTOBase {
  @IsOptional()
  @ApiProperty()
  batchNumber?: string
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

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  commodity?: string

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

  @ApiProperty({ type: () => COMPACT_ObservationDTO })
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

  // TODO: should this be a narray or a single object? it should definitely use a specified type.
  // eventCredentialSubject?: DeliveryTicketCredentialSubjectDTO | DeliveryScheduledCredentialSubjectDTO
  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @IsObject()
  eventCredentialSubject?: DeliveryTicketCredentialSubjectDTO | DeliveryScheduledCredentialSubjectDTO

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @IsObject()
  eventCredentialSubjects?: DeliveryTicketCredentialSubjectDTO[]
}

class CreateEventDTO {
  @IsOptional()
  @ApiProperty()
  @IsUUID()
  eventId?: string

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @IsObject()
  eventVC?: EnvelopedVerifiableCredential
}

export class CORE_CreateProductDTO extends CreateProductDTOBase {
  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  productVC: EnvelopedVerifiableCredential

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productVCHash: string

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateEventDTO)
  events?: CreateEventDTO[]
}
