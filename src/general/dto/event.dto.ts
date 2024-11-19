import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
  IsArray,
  ArrayMinSize,
  IsUUID,
  IsDateString
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { PlaceDTO, OrganizationDTO } from './'
import { Type } from 'class-transformer'

export abstract class EventDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  abstract eventType: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsDateString()
  eventTime: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  actor: OrganizationDTO[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  products: string[]
}
