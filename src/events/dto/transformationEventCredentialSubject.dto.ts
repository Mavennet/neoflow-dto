import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsUUID,
  IsEnum,
  IsString,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../general/dto/address.dto'
import { TRANSFORMATION_EVENT_TYPE } from '../constants/transformationEventType'

export class TransformationEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsEnum(TRANSFORMATION_EVENT_TYPE)
  eventType: TRANSFORMATION_EVENT_TYPE

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

  @IsArray()
  @ArrayMinSize(1)
  productPredecessors: string[]

  @IsArray()
  @ArrayMinSize(1)
  productSuccessors: string[]
}
