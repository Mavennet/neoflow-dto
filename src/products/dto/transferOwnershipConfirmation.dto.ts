import { IsNotEmpty, IsOptional, IsNumber, IsString, IsBoolean, ValidateIf, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { AddressDTO } from '../../general/dto/address.dto'
import { Type } from 'class-transformer'

export class TransferOwnershipConfirmationDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  transferOwnershipRequestId: number

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

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  confirmationStatus: boolean

  @IsOptional()
  @ApiProperty()
  @IsString()
  comment: string

  @ValidateIf((o) => o.confirmationStatus === false)
  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  hasDocuments: boolean
}
