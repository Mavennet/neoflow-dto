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
import { PostalAddressDTO } from '../../../general'

export class TransferCustodyRequestDTO {
  @IsNotEmpty()
  @IsString()
  productId: string

  @IsOptional()
  @IsString()
  countryOfDestination: string

  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  portOfEntry: PostalAddressDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  portOfDestination: PostalAddressDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  receiptLocation: PostalAddressDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
