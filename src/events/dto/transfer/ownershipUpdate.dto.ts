import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
  Matches
} from 'class-validator'

export class TransferOwnershipUpdateDTO {
  @IsNotEmpty()
  @IsString()
  requestId: string

  @IsOptional()
  @IsNumberString()
  contractId?: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @IsNumberString()
  price: string

  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
