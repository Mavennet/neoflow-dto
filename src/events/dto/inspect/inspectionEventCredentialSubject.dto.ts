import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsUrl,
  IsString,
  ValidateNested,
  ValidateIf,
  Matches,
  IsEnum
} from 'class-validator'
import { Type } from 'class-transformer'

import { AddressDTO, ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../../general/dto'
import { HTS_CODE, PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class CORE_InspectionEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== "development"})
  @ValidateIf((o) => o.productId.startsWith('http://neo-flow.com/credentials/'))
  productId: string

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
  @IsString()
  @Matches(/^did:/)
  producer: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  certifier: string

  @IsNotEmpty()
  @IsString()
  category: string

  @IsNotEmpty()
  @IsEnum(HTS_CODE)
  hsCode: string

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

export class AGENT_InspectionEventCredentialSubjectDTO extends CORE_InspectionEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  eventId: string
}
