import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsUUID,
  IsUrl,
  IsString,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../general'

class EventCreateCredentialSubjectDTOBase {
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

export class AGENT_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUUID()
  productId: string
}

export class CORE_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @IsNotEmpty()
  @IsUrl()
  productId: string
}