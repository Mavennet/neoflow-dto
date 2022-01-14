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

export class AGENT_NotificationDTO {
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
  @IsBoolean()
  read: boolean

  @IsNotEmpty()
  @ApiProperty()
  @IsDateString()
  createdAt: Date
}

export class CORE_NotificationDTO extends AGENT_NotificationDTO{
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  senderName: string
}
