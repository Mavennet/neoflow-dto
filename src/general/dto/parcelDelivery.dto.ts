import { IsOptional, IsEnum, IsString, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { TRANSPORTATION_TYPE } from '../../events/constants'

export class ParcelDeliveryDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.PARCEL_DELIVERY])
  type: JSON_TYPE

  @IsOptional()
  @IsEnum(TRANSPORTATION_TYPE)
  deliveryMethod: TRANSPORTATION_TYPE

  @IsOptional()
  @IsString()
  trackingNumber: string
}
