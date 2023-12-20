import {
  IsNotEmpty,
  IsString
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateGasShipmentDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  shipmentMonth: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pipeline: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  receiptLocation: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  portEntry: string
}
