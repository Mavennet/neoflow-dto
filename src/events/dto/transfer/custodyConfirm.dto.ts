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

export class TransferCustodyConfirmationDTO {
  @IsNotEmpty()
  @IsNumber()
  transferCustodyRequestId: number

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
