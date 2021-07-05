import {
  IsUUID,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'

import { CarbonFootprintDetailsDTO } from './'

export class AddCarbonFootprintDetailsDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CarbonFootprintDetailsDTO)
  carbonFootprintDetails: CarbonFootprintDetailsDTO
}
