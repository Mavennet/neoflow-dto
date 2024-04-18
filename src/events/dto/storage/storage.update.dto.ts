import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsUUID, ValidateIf, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ChemicalSpecsDTO, GasSpecsDTO, PhysicalSpecsDTO } from '../../../general/dto'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class AGENT_UpdateStorageProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  revokeEventId: string

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => PhysicalSpecsDTO)
  @ValidateIf((o) => o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  physicalSpecs?: PhysicalSpecsDTO

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
