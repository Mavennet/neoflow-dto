import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsNumberString,
  IsOptional,
  Matches
} from 'class-validator'

export class TransferOwnershipRequestDTO {
  @IsNotEmpty()
  @IsString()
  productId: string

  @IsOptional()
  @IsNumber()
  contractId?: number

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
