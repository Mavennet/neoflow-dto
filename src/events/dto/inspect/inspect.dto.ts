import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsArray,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_ObservationDTO } from '../../../general'
import { Type } from 'class-transformer'
import { AGENT_InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { InspectionEventDetailsDTO } from './event.vc.dto'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_COMPACT_InspectionDTO {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  initiator: COMPACT_OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  place: COMPACT_PlaceDTO

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => COMPACT_ObservationDTO)
  observation: COMPACT_ObservationDTO[]
}

export class CORE_InspectProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InspectionEventDetailsDTO)
  eventVC: InspectionEventDetailsDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @IsNotEmpty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @IsString() // TODO fix data type
  txTimestamp: string
}

export class AGENT_InspectProductDTO extends CORE_InspectProductDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_InspectionEventCredentialSubjectDTO)
  inspectCredentialSubject: AGENT_InspectionEventCredentialSubjectDTO
}
