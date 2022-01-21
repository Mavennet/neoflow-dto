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
import { JSON_TYPE } from '../../general/constants'
import { ProductDTO } from './product.dto'
import { HTS_CODE } from '../constants'
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase } from '@mavennet/traceability-dto'

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase{
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.CRUDE_OIL_PRODUCT] || o.type === [JSON_TYPE.NATURAL_GAS_PRODUCT])
  @ApiProperty({ enum: JSON_TYPE, isArray: true })
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  UWI: string

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