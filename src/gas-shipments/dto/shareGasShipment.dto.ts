import {
  IsNotEmpty,
  IsUUID,
  IsNumber
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ShareGasShipmentDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  orgId: number
}
