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
  COMPACT_PlaceDTO,
  WrappedEnvelopedVCDTO
} from '../../../general'
import { PRODUCT_NAME } from '../../../products'
import { type ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto'
import { type DeliveryTicketCredentialSubjectDTO } from '../deliveryTicket'
import { type TransportEventCredentialSubjectDTO, type DeliveryScheduledCredentialSubjectDTO } from '../transport'

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

export class AGENT_CreateProductDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsArray()
  credentialSubjects: Array<
    | DeliveryScheduledCredentialSubjectDTO
    | DeliveryTicketCredentialSubjectDTO
    | ProductCredentialSubjectDTO
    | TransportEventCredentialSubjectDTO
  >
}

export class CORE_CreateProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty({ type: [WrappedEnvelopedVCDTO], description: 'List of wrapped verifiable credentials' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WrappedEnvelopedVCDTO)
  @IsNotEmpty()
  vcs: WrappedEnvelopedVCDTO[]
}
