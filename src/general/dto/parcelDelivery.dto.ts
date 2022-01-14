import {
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { PostalAddressDTO } from './postalAddress.dto'
import { TRANSPORTATION_TYPE } from '../../events/constants'

export class ParcelDeliveryDTO{
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

export class ParcelDeliveryDTOAddress extends ParcelDeliveryDTO{
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  originAddress: PostalAddressDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  deliveryAddress: PostalAddressDTO
}
