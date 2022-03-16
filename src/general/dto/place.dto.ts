import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsLatitude,
  IsLongitude,
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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class PlaceDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.PLACE])
  type: JSON_TYPE[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  globalLocationNumber?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => GeoCoordinatesDTO)
  geo: GeoCoordinatesDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  address: PostalAddressDTO
}

export abstract class COMPACT_PlaceDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  globalLocationNumber?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLongitude()
  longitude: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  organizationName?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  streetAddress?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressLocality: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressRegion: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  postalCode?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressCountry: string
}
