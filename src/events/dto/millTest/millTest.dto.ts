import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsArray,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { MillTestVCDTO } from './event.vc.dto'
import { AGENT_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto'
import { ApiProperty } from '@nestjs/swagger'
import { FLAT_OrganizationDTO, FLAT_ObservationDTO, FLAT_PlaceDTO } from '../../../general'

export class AGENT_FLAT_MillTestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  certifier: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_OrganizationDTO)
  manufacturer: FLAT_OrganizationDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  specification: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  originalCountryOfMeltAndPour: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_PlaceDTO)
  place: FLAT_PlaceDTO

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FLAT_ObservationDTO)
  observation: FLAT_ObservationDTO[]
}

export class AGENT_MillTestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_MillTestCredentialSubjectDTO)
  millTestCredentialSubject: AGENT_MillTestCredentialSubjectDTO
}

export class CORE_MillTestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MillTestVCDTO)
  millTestVC: MillTestVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txTimestamp: string
}
