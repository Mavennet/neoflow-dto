import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE_NF, ObservationDTO, OrganizationDTO, PlaceDTO } from '../../../general'
import { ProductDTO } from '../../../products'

export class DeliveryTicketCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  createdDate: string | Date

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  openDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  closeDate?: string | Date

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  carrier: OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  consignor: OrganizationDTO

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  consignee?: OrganizationDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ticketControlNumber?: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  batchNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notificationOfShipment?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nominationMonth?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  destination: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProductDTO)
  product?: ProductDTO

  @ApiProperty({ isArray: true, type: () => ObservationDTO })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]

  @ApiProperty()
  @IsString()
  carrierCode?: string
}
