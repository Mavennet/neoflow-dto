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

export class StorageEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsEnum(STORAGE_EVENT_TYPE)
  eventType: STORAGE_EVENT_TYPE

  @IsNotEmpty()
  @IsString()
  category: string

  @IsOptional()
  @IsString()
  description: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string

  @IsNotEmpty()
  @IsNumberString()
  volume: string

  @IsNotEmpty()
  @ValidateIf((o) => o.eventType === STORAGE_EVENT_TYPE.START)
  @IsString()
  uom: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  tankLocation: AddressDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PhysicalSpecsDTO)
  @ValidateIf((o) => o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  physicalSpecs: PhysicalSpecsDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ChemicalSpecsDTO)
  @ValidateIf((o) => o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  chemicalSpecs: ChemicalSpecsDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => GasSpecsDTO)
  @ValidateIf((o) => o.category === PRODUCT_CATEGORY_TYPE.GAS)
  gasSpecs: GasSpecsDTO
}
