import { ApiProperty } from '@nestjs/swagger'
import {
  IsEnum,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsNotEmpty,
  IsString
} from 'class-validator'
import { JSON_TYPE_NF } from '../../../general'

export class PriceSpecificationCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  priceCurrency: string
}
