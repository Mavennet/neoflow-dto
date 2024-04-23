import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator'
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

  @IsOptional()
  @ApiPropertyOptional()
  @IsNumber()
  total?: number

  @IsOptional()
  @ApiPropertyOptional()
  @IsNumber()
  unitPrice?: number
}
