import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsUUID,
  IsString,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../general'

export class EventCreateCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsOptional()
  @IsString()
  description: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string
}
