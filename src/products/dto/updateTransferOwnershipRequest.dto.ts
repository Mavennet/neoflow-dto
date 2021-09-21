import { IsBoolean, IsNotEmpty, IsString, IsNumber, Matches, IsNumberString, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateTransferOwnershipRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  requestId: number

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  contractId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @ApiProperty()
  @IsNumberString()
  price: number

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  hasDocuments: boolean
}
