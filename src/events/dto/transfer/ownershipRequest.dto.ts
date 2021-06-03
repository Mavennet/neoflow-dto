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
  contractId: number

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @IsNumberString()
  price: number

  @IsNotEmpty()
  @IsNumberString()
  weight: number

  @IsNotEmpty()
  @IsString()
  unit: string

  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
