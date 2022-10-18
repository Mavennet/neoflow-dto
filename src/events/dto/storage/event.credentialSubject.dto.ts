import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  IsUUID,
  ValidateNested,
  Matches,
  IsNumberString,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'

import { AddressDTO, ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../../general/dto'
import { STORAGE_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class CORE_StorageEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STORAGE_EVENT_TYPE)
  eventType: STORAGE_EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  volume: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateIf((o) => o.eventType === STORAGE_EVENT_TYPE.START)
  @IsString()
  uom: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  tankLocation: AddressDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PhysicalSpecsDTO)
  @ValidateIf((o) => o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  physicalSpecs: PhysicalSpecsDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ChemicalSpecsDTO)
  @ValidateIf((o) => o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  chemicalSpecs: ChemicalSpecsDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => GasSpecsDTO)
  @ValidateIf((o) => o.category === PRODUCT_CATEGORY_TYPE.GAS)
  gasSpecs: GasSpecsDTO
}

export class AGENT_StorageEventCredentialSubjectDTO extends CORE_StorageEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string
}
