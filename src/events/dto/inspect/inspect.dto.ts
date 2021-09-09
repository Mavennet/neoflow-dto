import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsArray,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { InspectVCDTO } from './event.vc.dto'
import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_ObservationDTO } from '../../../general'
import {
  AGENT_InspectCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { ProductBrief } from '../../../products'
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
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductBrief)
  product: ProductBrief

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => COMPACT_ObservationDTO)
  observation: COMPACT_ObservationDTO[]
}

export class AGENT_InspectDTO {
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
  @Type(() => AGENT_InspectCredentialSubjectDTO)
  inspectCredentialSubject: AGENT_InspectCredentialSubjectDTO
}

export class CORE_InspectDTO {
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
  @Type(() => InspectVCDTO)
  eventVC: InspectVCDTO

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
