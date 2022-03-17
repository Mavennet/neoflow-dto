import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsEnum,
  IsString,
  IsArray,
  ValidateNested,
  Matches,
  Validate,
  ArrayNotEmpty
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { PlaceDTO, ObservationDTO } from '../../general/dto'
import { JSON_TYPE_NF } from '../../general/constants'
import { ProductDTO } from './product.dto'
import { HTS_CODE } from '../constants'

class ProductCredentialSubjectDTOBase {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  @Validate((o) => o.type === [JSON_TYPE_NF.CRUDE_OIL_PRODUCT] || o.type === [JSON_TYPE_NF.NATURAL_GAS_PRODUCT])
  @ApiProperty({ enum: JSON_TYPE_NF, isArray: true })
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
  @ApiProperty({ isArray: true })
  observation: ObservationDTO[]
}

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
}
