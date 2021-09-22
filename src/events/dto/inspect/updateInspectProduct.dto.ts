import { IsNotEmpty, IsNotEmptyObject, IsUUID, ValidateIf, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../../general/dto'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class UpdateInspectProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUUID()
  revokeEventId: string

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
