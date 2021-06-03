import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsNumberString,
  IsOptional,
  Matches,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO } from '../../../general'

export class TransferCustodyRequestDTO {
  @IsNotEmpty()
  @IsString()
  productId: string

  @IsOptional()
  @IsString()
  countryOfDestination: string

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  receiptLocation: PlaceDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

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
