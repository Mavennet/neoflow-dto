import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmptyObject,
  IsNotEmpty,
  IsOptional,
  IsNumberString,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  Matches,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto'
import { ObservationDTO, MeasurementDTO } from '../../../../general/dto'
import { JSON_TYPE_NF } from '../../../../general/constants'

export class OGBillOfLadingCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  @Validate((o) => o.type === JSON_TYPE_NF.OG_BILL_OF_LADING)
  type: JSON_TYPE_NF[]

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
