import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDateString
} from 'class-validator'
import {
  AnalyticsDTO as AnalyticsDTOBase
} from 'mavennet-dto'

export class AnalyticsDTO extends AnalyticsDTOBase {
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

  @IsNotEmpty()
  @IsString()
  buyerName: string

  @IsNotEmpty()
  @IsString()
  origin: string

  @IsNumber()
  price?: number

  @IsNotEmpty()
  @IsNumber()
  volume: number

  @IsString()
  aging?: string

  @IsString()
  qpInBond?: string

  @IsString()
  entryId?: string

  @IsString()
  ftzNo?: string

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
}
