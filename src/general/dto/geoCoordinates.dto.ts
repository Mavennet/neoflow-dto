import { ApiProperty } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsLatitude, IsLongitude, IsNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class GeoCoordinatesDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.GEO_COORDINATES))
  type: JSON_TYPE[]

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }]
  })
  @IsNotEmpty()
  @IsLatitude()
  latitude: string | number

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }]
  })
  @IsNotEmpty()
  @IsLongitude()
  longitude: string | number
}
