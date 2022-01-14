import { IsNotEmpty, IsOptional, IsString, IsLatitude, IsLongitude } from 'class-validator'

export class AGENT_AddressDTO{
  @IsNotEmpty()
  @IsString()
  address: string

  @IsOptional()
  @IsString()
  type?: string
}
export class CORE_AddressDTO extends AGENT_AddressDTO{

  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @IsNotEmpty()
  @IsLongitude()
  longitude: string
}
