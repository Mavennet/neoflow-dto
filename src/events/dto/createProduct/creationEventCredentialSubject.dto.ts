import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsUrl, IsUUID, IsString, ValidateNested, Matches } from 'class-validator'
import { Type } from 'class-transformer'
// import { AddressDTO } from '../../general/dto/address.dto'
import { PlaceDTO } from '../../../general/dto/place.dto'
import { ApiProperty } from '@nestjs/swagger'

class CreationEventCredentialSubjectDTOBase {
  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string
}

export class AGENT_CreationEventCredentialSubjectDTO extends CreationEventCredentialSubjectDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string
}

export class CORE_CreationEventCredentialSubjectDTO extends CreationEventCredentialSubjectDTOBase {
  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  productId: string
}