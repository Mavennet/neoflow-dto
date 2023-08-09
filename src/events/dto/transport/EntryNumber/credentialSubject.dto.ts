import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
  Validate,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'
import { OrganizationDTO, ParcelDeliveryDTO, PlaceDTO } from '../../../../general/dto'
import { ProductDTO } from '../../../../products/dto/product.dto'
import { IN_BOND_TYPE } from '../../../constants'

export class EntryNumberCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.ENTRY_NUMBER))
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  entryNumber: string
}
