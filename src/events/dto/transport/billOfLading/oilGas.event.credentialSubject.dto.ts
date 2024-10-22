import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  Equals,
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
  Validate,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE_NF } from '../../../../general/constants'
import { MeasurementDTO, ObservationDTO } from '../../../../general/dto'
import { BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto'

export class OGBillOfLadingCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.OG_BILL_OF_LADING)
  type: JSON_TYPE_NF.OG_BILL_OF_LADING

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => BillOfLadingCredentialSubjectDTO)
  billOfLading: BillOfLadingCredentialSubjectDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  shippingDate: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  arrivalDate: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  valuePerItem?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  totalOrderValue?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  freightChargeTerms?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  batchNumber?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  openingVolume: MeasurementDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  closingVolume: MeasurementDTO

  @ApiPropertyOptional({ isArray: true, type: () => ObservationDTO })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
