import { IsNotEmpty, IsEnum, IsUUID, Equals } from 'class-validator'
import { JSON_TYPE } from '../../general/constants'

export class SimpleProductDTO {
  @IsNotEmpty()
  @IsEnum(JSON_TYPE)
  @Equals(JSON_TYPE.PRODUCT)
  type: JSON_TYPE

  @IsNotEmpty()
  @IsUUID()
  identifier: string
}
