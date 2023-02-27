import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
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
  @IsEnum(JSON_TYPE_NF, { each: true })
  @Validate(
    (o) =>
      o.type === JSON_TYPE_NF.CRUDE_OIL_PRODUCT ||
      o.type === JSON_TYPE_NF.NATURAL_GAS_PRODUCT
  )
  @ApiProperty()
  type: JSON_TYPE_NF[]

  @IsNotEmpty()
  @IsEnum(HTS_CODE)
  @ApiProperty()
  @IsString()
  HSCode: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  UWI: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  @ApiProperty()
  productionDate: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  @ApiProperty()
  facility: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  @ApiProperty()
  product: ProductDTO

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  @ApiProperty({ isArray: true, type: ObservationDTO })
  observation: ObservationDTO[]
}

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {}
