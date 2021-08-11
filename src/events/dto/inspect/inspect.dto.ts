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
import { Organization, Place, Observation } from '../../../general'
import {
  AGENT_InspectCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { ProductBrief } from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class Inspection {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  initiator: Organization

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Place)
  place: Place

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductBrief)
  product: ProductBrief

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Observation)
  observation: Observation[]
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
