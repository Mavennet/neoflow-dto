import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateQPInbondDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  revokeEventId: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  inBondNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  entryId?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ftzNo?: string
}
