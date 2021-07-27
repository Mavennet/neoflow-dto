import {
  IsUUID,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'

import { CarbonFootprintDetailsDTO } from './'
import { ApiProperty } from '@nestjs/swagger'

export class AddCarbonFootprintDetailsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  // @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CarbonFootprintDetailsDTO)
  carbonFootprintDetails: CarbonFootprintDetailsDTO
}
