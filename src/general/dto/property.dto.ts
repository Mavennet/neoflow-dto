import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator'
import { MECHANICAL_PROPERTY_TYPE, CHEMICAL_PROPERTY_TYPE, GAS_PROPERTY_TYPE } from '../constants'
import { PropertyDTO as PropertyDTOBase } from '@mavennet/traceability-dto'

export class PropertyDTO extends PropertyDTOBase{


  @IsOptional()
  @IsString()
  identifier: string

  @IsNotEmpty()
  @IsEnum({
    ...MECHANICAL_PROPERTY_TYPE,
    ...CHEMICAL_PROPERTY_TYPE,
    ...GAS_PROPERTY_TYPE
  })
  name: MECHANICAL_PROPERTY_TYPE | CHEMICAL_PROPERTY_TYPE | GAS_PROPERTY_TYPE

  @IsOptional()
  @IsString()
  description: string
}
