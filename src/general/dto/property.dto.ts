// import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator'
// import { MECHANICAL_PROPERTY_TYPE, CHEMICAL_PROPERTY_TYPE, GAS_PROPERTY_TYPE } from '../constants'
// import { PropertyDTO as PropertyDTOBase } from '@mavennet/traceability-dto'

// export class PropertyDTO extends PropertyDTOBase{


//   @IsOptional()
//   @IsString()
//   identifier: string

//   @IsNotEmpty()
//   @IsEnum({
//     ...MECHANICAL_PROPERTY_TYPE,
//     ...CHEMICAL_PROPERTY_TYPE,
//     ...GAS_PROPERTY_TYPE
//   })
//   name: MECHANICAL_PROPERTY_TYPE | CHEMICAL_PROPERTY_TYPE | GAS_PROPERTY_TYPE

//   @IsOptional()
//   @IsString()
//   description: string
// }

import { IsNotEmpty, IsOptional, IsString, IsEnum, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE_NF as JSON_TYPE, MECHANICAL_PROPERTY_TYPE, CHEMICAL_PROPERTY_TYPE, GAS_PROPERTY_TYPE } from '../constants'

export class PropertyDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(
    (o) =>
      o.type === [JSON_TYPE.MECHANICAL_PROPERTY] ||
      o.type === [JSON_TYPE.CHEMICAL_PROPERTY] ||
      o.type === [JSON_TYPE.GAS_PROPERTY]
  )
  type: JSON_TYPE[]

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
