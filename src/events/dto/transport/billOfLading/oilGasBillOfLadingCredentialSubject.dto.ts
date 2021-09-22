import {
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
import { BillOfLadingCredentialSubjectDTO } from './billOfLadingCredentialSubject.dto'
import { ObservationDTO } from '../../../../general/dto'
import { JSON_TYPE } from '../../../../general/constants'

export class OGBillOfLadingCredentialSubjectDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.OG_BILL_OF_LADING])
  type: JSON_TYPE[]

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BillOfLadingCredentialSubjectDTO)
  billOfLading: BillOfLadingCredentialSubjectDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  shippingDate: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  arrivalDate: string

  @IsOptional()
  @IsNumberString()
  valuePerItem: string

  @IsOptional()
  @IsNumberString()
  totalOrderValue: string

  @IsOptional()
  @IsString()
  freightChargeTerms: string

  @IsOptional()
  @IsString()
  batchNumber: string

  @IsNotEmpty()
  @IsNumberString()
  openingVolume: string

  @IsNotEmpty()
  @IsNumberString()
  closingVolume: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
