import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'

export class ProductsByBatchDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  batchNumber: string

  @ApiProperty()
  @IsArray()
  ticketNumber: string[]

  @ApiProperty()
  @IsArray()
  pipelineTicketNumber: string[]

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  nominationMonth: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  commodity: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pipeline: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  status: string
}
