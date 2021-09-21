import { IsNotEmpty, IsUUID, IsString, IsNotEmptyObject, IsArray, ArrayMinSize, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto'
import { TransformationEventCredentialSubjectDTO } from '../../events/dto/transformationEventCredentialSubject.dto'

import { TransformationEventDetailsDTO } from '../../events/dto/transformationEvent.vc.dto'

export class TransformProductsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

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
  @IsString() // TODO fix data type
  txTimestamp: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  productParents: string[] // array of uuid

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TransformationEventDetailsDTO)
  eventVC: TransformationEventDetailsDTO

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TransformProductSuccessorDTO)
  productSuccessors: TransformProductSuccessorDTO[]

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => TransformationEventCredentialSubjectDTO)
  eventCredentialSubject: TransformationEventCredentialSubjectDTO
}
