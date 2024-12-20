import { IsArray, IsString, IsObject, IsBoolean, ValidateNested, IsNumber, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

class CoordinatesDto {
  @IsString()
  lat: string

  @IsString()
  lng: string
}

class PostalAddressDto {
  @IsOptional()
  @IsString()
  streetAddress?: string

  @IsString()
  addressLocality: string

  @IsString()
  addressRegion: string

  @IsOptional()
  @IsString()
  postalCode?: string

  @IsString()
  addressCountry: string
}

class DetailsDto {
  @IsString()
  address: string

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto

  @IsObject()
  postalAddress: PostalAddressDto
}

export class LocationDto {
  @IsNumber()
  id: number

  @IsString()
  value: string

  @IsString()
  label: string

  @IsString({ each: true })
  alias: string[]

  @IsString()
  firmsCode: string

  @IsString()
  portCode: string

  @IsObject()
  details: DetailsDto

  @IsBoolean()
  isOil: boolean

  @IsBoolean()
  isGas: boolean
}

export class XBorderDto {
  @IsNumber()
  receiptLocationId: number

  @IsNumber()
  deliveryFacilityId: number
}

export class LocationsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationDto)
  deliveryFacilities: LocationDto[]

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationDto)
  receiptLocations: LocationDto[]

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationDto)
  ports: LocationDto[]

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => XBorderDto)
  xborderMappings: XBorderDto[]
}
