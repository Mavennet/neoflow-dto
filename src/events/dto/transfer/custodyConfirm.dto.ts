import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  ValidateIf
} from 'class-validator'

export class TransferCustodyConfirmationDTO {
  @IsNotEmpty()
  @IsNumber()
  transferCustodyRequestId: number

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
