import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsArray, ArrayNotEmpty, IsOptional, IsString, IsNotEmpty } from 'class-validator'
import { JSON_TYPE_NF } from '../constants'

export class CommodityDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  commodityCode?: string

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  commodityCodeType?: string

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string
}
