import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEnum, IsString, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE_NF } from '../../../general'

class LocationDTO {
  @ApiProperty()
  @IsString()
  type: string

  @ApiProperty()
  @IsString()
  street: string

  @ApiProperty()
  @IsString()
  locality: string

  @ApiProperty()
  @IsString()
  region: string

  @ApiProperty()
  @IsString()
  postalCode: string

  @ApiProperty()
  @IsString()
  country: string
}

export class TransportEventCredentialSubjectDTO {
  @ApiProperty({ enum: JSON_TYPE_NF })
  @IsNotEmpty()
  @IsEnum(JSON_TYPE_NF)
  type: JSON_TYPE_NF

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  epcList: string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bizStep: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  action: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  disposition: string

  @ApiProperty({ type: [LocationDTO] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationDTO)
  sourceList: LocationDTO[]

  @ApiProperty({ type: [LocationDTO] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationDTO)
  destinationList: LocationDTO[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventTime: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventId: string
}
