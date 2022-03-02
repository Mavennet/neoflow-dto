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
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOTrace } from '@mavennet/traceability-dto'


class ProductCredentialSubjectDTOBase extends ProductCredentialSubjectDTOTrace{
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  @Validate((o) => o.type === [JSON_TYPE_NF.CRUDE_OIL_PRODUCT] || o.type === [JSON_TYPE_NF.NATURAL_GAS_PRODUCT])
  @ApiProperty({ enum: JSON_TYPE_NF, isArray: true })
  type: JSON_TYPE_NF[]

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

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
}
