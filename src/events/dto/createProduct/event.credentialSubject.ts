import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsUUID, IsString, ValidateNested, Matches } from 'class-validator'
import { Type } from 'class-transformer'
// import { AddressDTO } from '../../general/dto/address.dto'
import { PlaceDTO } from '../../../general/dto/place.dto'
import { ApiProperty } from '@nestjs/swagger'

export class CORE_CreationEventCredentialSubjectDTO {
  @IsNotEmpty()
  productId: string

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

export class AGENT_CreationEventCredentialSubjectDTO extends CORE_CreationEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string
}
