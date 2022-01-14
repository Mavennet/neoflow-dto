import { IsNotEmpty, IsOptional, IsString, IsLatitude, IsLongitude } from 'class-validator'

export class AddressDTO{
  @IsNotEmpty()
  @IsString()
  address: string

  @IsOptional()
  @IsString()
  type?: string

  //Was not in the org-agent, but some files still required latitude and longitude
  //So instead of creating a seperate CORE version, these values are set as optional
  @IsOptional()
  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @IsOptional()
  @IsNotEmpty()
  @IsLongitude()
  longitude: string
}
