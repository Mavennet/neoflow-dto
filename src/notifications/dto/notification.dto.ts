import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsUUID,
  IsString,
  IsDateString,
  IsEnum,
  IsBoolean,
  Matches,
  IsArray
} from 'class-validator'
import { NOTIFICATION_TYPE } from '../constants'

interface SummaryProduct {
  id: string
  batchNumber: string
}

export abstract class NotificationDTO {
  @IsNotEmpty()
  @IsNumber()
  notificationId: number

  @IsNotEmpty()
  @IsEnum(NOTIFICATION_TYPE)
  notificationType: NOTIFICATION_TYPE

  @IsOptional()
  @IsUUID()
  productId: string

  @IsOptional()
  @IsString()
  batchNumber: string

  @IsOptional()
  @IsNumber()
  contractId: number

  @IsOptional()
  @IsNumber()
  transferRequestId: number

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @IsNotEmpty()
  @IsString()
  senderName: string

  @IsNotEmpty()
  @IsBoolean()
  read: boolean

  @IsNotEmpty()
  @IsDateString()
  createdAt: Date

  @IsOptional()
  @IsArray()
  summaryProducts: SummaryProduct[]
}
