import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNumber, IsArray, ArrayNotEmpty, IsNotEmpty, IsString, Equals } from 'class-validator'
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
