import { IsArray, IsString, IsObject, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

class CoordinatesDto {
  @IsString()
  lat: string

  @IsString()
  lng: string
}

class PostalAddressDto {
  @IsString()
  streetAddress: string

  @IsString()
  addressLocality: string

  @IsString()
  addressRegion: string

  @IsString()
  postalCode: string

  @IsString()
  addressCountry: string
}

class DetailsDto {
  @IsString()
  address: string

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto

  @ValidateNested()
  @Type(() => PostalAddressDto)
  postalAddress: PostalAddressDto
}

export class LocationDto {
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
}
