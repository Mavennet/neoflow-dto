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
import { AddressDTO } from '../../../general'

export class TransferOwnershipConfirmationDTO {
  @IsNotEmpty()
  @IsNumber()
  transferOwnershipRequestId: number

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfEntry: AddressDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfDestination: AddressDTO

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
