import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  IsDateString
} from 'class-validator'

export class AnalyticsDTO {
  @IsNotEmpty()
  @IsNumber()
  currentMillis: number

  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsDateString()
  eventCreatedAt: Date

  @IsNotEmpty()
  @IsString()
  eventType: string

  @IsNotEmpty()
  @IsDateString()
  productCreatedAt: Date

  @IsNotEmpty()
  @IsString()
  productionMonth: string

  @IsString()
  aging?: string

  @IsNotEmpty()
  @IsString()
  buyerName: string

  @IsString()
  qpInBond?: string

  @IsString()
  entryId?: string

  @IsString()
  ftzNo?: string

  @IsNotEmpty()
  @IsString()
  origin: string

  @IsString()
  portOfEntry?: string

  @IsNotEmpty()
  @IsString()
  streamType: string

  @IsString()
  startTransportMonth?: string

  @IsString()
  refineryName?: string

  @IsNumber()
  sulphur?: number

  @IsNumber()
  density?: number

  @IsNumber()
  tan?: number

  @IsNumber()
  price?: number

  @IsNotEmpty()
  @IsNumber()
  volume: number
}
