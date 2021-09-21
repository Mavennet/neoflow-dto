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
import { GeoCoordinatesDTO } from './geoCoordinates.dto'
import { PostalAddressDTO } from './postalAddress.dto'

export class PlaceDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.PLACE])
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  globalLocationNumber: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => GeoCoordinatesDTO)
  geo: GeoCoordinatesDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  address: PostalAddressDTO
}
