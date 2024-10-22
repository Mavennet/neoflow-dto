import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  ValidateNested,
  IsEnum,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  ArrayNotEmpty,
  IsNotEmptyObject,
  IsString,
  Validate,
  Equals
} from 'class-validator'
import { Type } from 'class-transformer'
import { OrganizationDTO, PlaceDTO, ObservationDTO, JSON_TYPE, JSON_TYPE_NF } from '../../../general'
import { ProductDTO } from '../../../products'

export class DeliveryStatementCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.DELIVERY_STATEMENT)
  type: JSON_TYPE_NF.DELIVERY_STATEMENT

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
  StatementControlNumber?: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  batchNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notificationOfShipment?: string

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
}
