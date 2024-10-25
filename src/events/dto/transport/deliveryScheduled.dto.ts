import { CommodityDTO, CredentialDTO, EnvelopedVerifiableCredential, MeasurementDTO } from '@mavennet/traceability-dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  Equals,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { PlaceDTO } from '../../../general'
import { JSON_TYPE_NF } from '../../../general/constants'
import { OrganizationDTO } from '../../../general/dto'

export class DeliveryScheduledCredentialSubjectDTO {
  // @ApiProperty()
  // @IsString()
  // @IsNotEmpty()
  // @Equals(JSON_TYPE_NF.DELIVERY_SCHEDULE)
  // type: JSON_TYPE_NF.DELIVERY_SCHEDULE

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  transporter?: OrganizationDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  consignee?: OrganizationDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  consignor?: OrganizationDTO

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  batchNumber?: string

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => CommodityDTO)
  commodity?: CommodityDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfArrival?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  deliveryDestination?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  countryOfDestination?: string

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  receiptLocation?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional({ isArray: true, type: () => MeasurementDTO })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasurementDTO)
  injectionVolume?: MeasurementDTO[]

  @IsOptional()
  @ApiPropertyOptional({ isArray: true, type: () => MeasurementDTO })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasurementDTO)
  scheduledVolume?: MeasurementDTO[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  injectionStartDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  injectionEndDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deliveryStartDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deliveryEndDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  nominationMonth?: string | Date

  @IsOptional()
  @ApiProperty()
  @IsString()
  scheduledDate?: string
}
export class DeliveryScheduledVCDTO extends CredentialDTO<DeliveryScheduledCredentialSubjectDTO> {
  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => DeliveryScheduledCredentialSubjectDTO)
  credentialSubject: DeliveryScheduledCredentialSubjectDTO
}

export class AGENT_DeliveryScheduledDTO {
  @ApiProperty()
  @ValidateIf((o) => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf((o) => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryScheduledCredentialSubjectDTO)
  credentialSubject: DeliveryScheduledCredentialSubjectDTO
}

export class CORE_DeliveryScheduledDTO {
  @ApiProperty()
  @ValidateIf((o) => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf((o) => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  eventId: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => DeliveryScheduledVCDTO)
  eventVC: DeliveryScheduledVCDTO
}

export class CORE_AddScheduledVolumeDTO {
  @ApiProperty()
  @ValidateIf((o) => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf((o) => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  eventVC: EnvelopedVerifiableCredential
}

export type AGENT_DeliveryScheduledDTO_NO_ID = Omit<AGENT_DeliveryScheduledDTO, 'productId' | 'gasShipmentId'>
