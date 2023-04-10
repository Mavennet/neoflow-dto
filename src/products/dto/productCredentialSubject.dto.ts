import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  Matches,
  Validate,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE_NF } from '../../general/constants'
import { ObservationDTO, PlaceDTO } from '../../general/dto'
import { HTS_CODE } from '../constants'
import { ProductDTO } from './product.dto'

class ProductCredentialSubjectDTOBase {
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE_NF.CRUDE_OIL_PRODUCT) || o.type.includes(JSON_TYPE_NF.NATURAL_GAS_PRODUCT))
  @ApiProperty()
  type: JSON_TYPE_NF[]

  @IsOptional()
  @IsEnum(HTS_CODE)
  @ApiProperty()
  @IsString()
  HSCode?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  UWI?: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  @ApiProperty()
  productionDate: string

  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  @ApiProperty()
  facility?: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  @ApiProperty()
  product: ProductDTO

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  @ApiProperty({ isArray: true, type: ObservationDTO })
  observation?: ObservationDTO[]
}

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {}
