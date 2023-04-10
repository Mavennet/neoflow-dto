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
  @IsString()
  commodityCode?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  commodityCodeType?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string
}
