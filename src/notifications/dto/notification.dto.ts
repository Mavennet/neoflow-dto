import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsUUID,
  IsString,
  IsDateString,
  IsEnum,
  IsBoolean,
  Matches
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { NOTIFICATION_TYPE } from '../constants/notificationType'

export class NotificationDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  notificationId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(NOTIFICATION_TYPE)
  notificationType: NOTIFICATION_TYPE

  @IsOptional()
  @ApiProperty()
  @IsUUID()
  productId: string

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  contractId: number

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  transferRequestId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  senderName: string

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  read: boolean

  @IsNotEmpty()
  @ApiProperty()
  @IsDateString()
  createdAt: Date
}
