import {
  IsNotEmpty,
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

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsOptional()
  @IsString()
  countryOfDestination: string

  @IsNotEmpty()
  @IsBoolean()
  confirmationStatus: boolean

  @IsOptional()
  @IsString()
  comment: string

  @ValidateIf(o => o.confirmationStatus === false)
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
