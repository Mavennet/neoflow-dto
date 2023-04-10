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
  IsEnum
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { PlaceDTO } from '../../../general'
import { Type } from 'class-transformer'
import { JSON_TYPE, JSON_TYPE_NF } from '../../../general/constants'
import { OrganizationDTO, ProofDTO } from '../../../general/dto'
import { CommodityDTO } from '../../../general/dto/commodity.dto'
import { ObservationDTO, MeasurementDTO } from '@mavennet/traceability-dto'

export class AGENT_DeliveryScheduledDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

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
  @Matches(/^did:/)
  receiver?: string

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
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  injectionVolume?: MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  injectionDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deliveryDate?: string | Date

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

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AGENT_DeliveryScheduledDTO)
  credentialSubject: AGENT_DeliveryScheduledDTO

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

export class CORE_DeliveryScheduledDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

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
