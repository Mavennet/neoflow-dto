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
  price: number

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
  hasDocuments: boolean
}
