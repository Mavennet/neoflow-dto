import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayContains,
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE_NF } from '../../general/constants'
import { ObservationDTO, PlaceDTO } from '../../general/dto'
import { HTS_CODE } from '../constants'
import { ProductDTO } from './product.dto'

class ProductCredentialSubjectDTOBase {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  @ArrayContains([JSON_TYPE_NF.OIL_AND_GAS_PRODUCT])
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

  @IsOptional()
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
