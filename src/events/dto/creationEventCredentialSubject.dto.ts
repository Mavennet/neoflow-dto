import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsUUID, IsString, ValidateNested, Matches } from 'class-validator'
import { Type } from 'class-transformer'
// import { AddressDTO } from '../../general/dto/address.dto'
import { PlaceDTO } from '../../general/dto/place.dto'

export class CreationEventCredentialSubjectDTO {
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
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string
}
