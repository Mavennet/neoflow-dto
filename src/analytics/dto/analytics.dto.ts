import { IsNotEmpty, IsOptional, IsNumber, IsString, IsUUID, IsDateString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { AnalyticsDTO as AnalyticsDTOBase } from 'mavennet-dto'

export class AnalyticsDTO extends AnalyticsDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  entryId?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventType?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  eventCreatedAt?: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  productCreatedAt: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productionMonth: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  startTransportMonth?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  buyerName: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  refineryName?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  qpInBond?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  ftzNo?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  origin: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  portOfEntry?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  streamType: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  aging?: string

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sulphur?: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  density?: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tan?: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price?: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  volume: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  currentMillis: number
}
