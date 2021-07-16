import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO } from '../../../general'

export class TransferOwnershipConfirmationDTO {
  @IsNotEmpty()
  @IsNumber()
  transferOwnershipRequestId: number

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @IsNotEmpty()
  @IsBoolean()
  confirmationStatus: boolean

  @IsOptional()
  @IsString()
  comment?: string

  @ValidateIf(o => o.confirmationStatus === false)
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
