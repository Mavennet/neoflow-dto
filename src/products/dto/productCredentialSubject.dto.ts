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
import { Type } from 'class-transformer'
import { PlaceDTO, ObservationDTO } from '../../general/dto'
import { JSON_TYPE } from '../../general/constants'
import { ProductDTO } from './product.dto'
import { HTS_CODE } from '../constants'

export class ProductCredentialSubjectDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.CRUDE_OIL_PRODUCT] || o.type === [JSON_TYPE.NATURAL_GAS_PRODUCT])
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsEnum(HTS_CODE)
  HSCode: string

  @IsNotEmpty()
  @IsString()
  UWI: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  productionDate: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  facility: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
