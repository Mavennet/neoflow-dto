import { IsBoolean, IsNotEmpty, IsString, IsNumber, Matches, IsNumberString, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class UpdateTransferOwnershipRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  requestId: number

  @IsOptional()
  @ApiPropertyOptional()
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
  price: string

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  hasDocuments: boolean
}
