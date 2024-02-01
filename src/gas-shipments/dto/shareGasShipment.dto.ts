import {
  IsNotEmpty,
  IsUUID,
  IsString
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ShareGasShipmentDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  orgId: string
}
