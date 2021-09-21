import { IsBoolean, IsNotEmpty, IsString, IsOptional, ValidateNested, Matches } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { AddressDTO } from '../../general/dto/address.dto'
import { Type } from 'class-transformer'

export class TransferCustodyRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfEntry: AddressDTO

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfArrival: AddressDTO

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfDestination: AddressDTO

  @IsOptional()
  @ApiProperty()
  @IsString()
  countryOfDestination: string

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  receiptLocation: AddressDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
