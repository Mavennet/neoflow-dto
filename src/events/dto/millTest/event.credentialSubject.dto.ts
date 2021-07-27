import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsString,
  IsUrl,
  IsEnum,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { EVENT_TYPE } from '../../constants'
import {
  OrganizationDTO,
  ParcelDeliveryDTO
} from '../../../general'
import { SteelProductDTO } from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_MillTestCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  @Validate(o => o.eventType === EVENT_TYPE.MILL_TEST_REPORT)
  eventType: EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  certifier: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  manufacturer: OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => SteelProductDTO)
  product: SteelProductDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  shipment: ParcelDeliveryDTO
}

export class CORE_MillTestCredentialSubjectDTO extends AGENT_MillTestCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  eventId: string
}
