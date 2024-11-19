import { IsOptional, IsNotEmpty, IsString, IsLatitude, IsLongitude } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class AddressDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLongitude()
  longitude: string

  @IsOptional()
  @IsString()
  type?: string
}
