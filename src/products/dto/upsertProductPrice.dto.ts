import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { VALUE_TYPE } from '../constants'

export class UpsertProductPriceDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(VALUE_TYPE)
  valueType: VALUE_TYPE

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  total: number

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  unitPrice: number
}
