import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsArray,
  IsNumberString,
  IsString,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  Validate,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import { EVENT_TYPE } from '../../constants'
import {
  PlaceDTO,
  OrganizationDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_TransferEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  @Validate(o => (
    o.eventType === EVENT_TYPE.TRANSFER_CUSTODY ||
    o.eventType === EVENT_TYPE.TRANSFER_CUSTODY
  ))
  eventType: EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  eventTime: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  receiver: OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @ApiProperty()
  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY)
  receiptLocation?: PlaceDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_OWNERSHIP)
  price?: string
}

export class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: string[]
}
