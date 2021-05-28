import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsNumberString,
  IsOptional
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
