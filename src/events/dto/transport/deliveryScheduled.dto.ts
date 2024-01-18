import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsBoolean,
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
import { PlaceDTO } from '../../../general'
import { Type } from 'class-transformer'
import { JSON_TYPE, JSON_TYPE_NF } from '../../../general/constants'
import { OrganizationDTO, ProofDTO } from '../../../general/dto'
import { MeasurementDTO, CommodityDTO } from '@mavennet/traceability-dto'

export class DeliveryScheduledCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @IsOptional()
  @ApiProperty()
  @IsString()
  transporter?: OrganizationDTO

  @IsOptional()
  @ApiProperty()
  @IsString()
  consignee?: OrganizationDTO

  @IsOptional()
  @ApiProperty()
  @IsString()
  consignor?: OrganizationDTO

  @IsOptional()
  @ApiProperty()
  @IsString()
  batchNumber?: string

  @IsOptional()
  @ApiProperty()
  @IsString()
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
  place?: PlaceDTO

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

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  hasDocuments?: boolean
}
export class DeliveryScheduled_VC_DTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayContains([JSON_TYPE.VERIFIABLE_CREDENTIAL])
  type: JSON_TYPE[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  issuer?: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => DeliveryScheduledCredentialSubjectDTO)
  credentialSubject: DeliveryScheduledCredentialSubjectDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  issuanceDate?: string | Date

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class AGENT_DeliveryScheduledDTO {
  @ApiProperty()
  @ValidateIf(o => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf(o => !o.productId || o.gasShipmentId)
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
  @ValidateIf(o => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf(o => !o.productId || o.gasShipmentId)
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
  @Type(() => DeliveryScheduled_VC_DTO)
  eventVC: DeliveryScheduled_VC_DTO
}

export type AGENT_DeliveryScheduledDTO_NO_ID = Omit<
  AGENT_DeliveryScheduledDTO,
  | 'productId'
  | 'gasShipmentId'
>
