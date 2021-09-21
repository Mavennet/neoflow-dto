import { IsNotEmpty, IsEnum, IsLatitude, IsLongitude, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'

export class GeoCoordinatesDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.GEO_COORDINATES])
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @IsNotEmpty()
  @IsLongitude()
  longitude: string
}
