import { ApiProperty } from '@nestjs/swagger'
import {
  ValidateNested,
  IsEnum,
  IsArray,
  IsDateString,
  IsNotEmpty,
  ArrayNotEmpty,
  IsNotEmptyObject,
  IsString
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  OrganizationDTO,
  PlaceDTO,
  ObservationDTO,
  JSON_TYPE,
  JSON_TYPE_NF
} from '../../../general'
import { ProductDTO } from '../../../products'

export class DeliveryTicketCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum({
    ...JSON_TYPE,
    ...JSON_TYPE_NF
  }, { each: true })
  type: (JSON_TYPE | JSON_TYPE_NF)[]

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  createdDate: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  openDate: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  closeDate: string | Date

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
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  consignee: OrganizationDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ticketControlNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  batchNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nosMonth: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  destination: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @ApiProperty({ isArray: true, type: () => ObservationDTO })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
