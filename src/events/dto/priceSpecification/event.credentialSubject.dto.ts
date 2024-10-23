import { ApiProperty } from '@nestjs/swagger'
import { Equals, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { JSON_TYPE_NF } from '../../../general'

export class PriceSpecificationCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.PRICE_SPECIFICATION)
  type: JSON_TYPE_NF.PRICE_SPECIFICATION

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  priceCurrency: string
}
