import { IsNotEmpty, IsOptional, IsString, IsLatitude, IsLongitude } from 'class-validator'

export class AddressDTO {
  @IsNotEmpty()
  @IsString()
  address: string

  @IsOptional()
  @IsString()
  type?: string

  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @IsNotEmpty()
  @IsLongitude()
  longitude: string
}
