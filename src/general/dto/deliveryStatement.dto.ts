import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, ValidateNested, IsArray, ArrayNotEmpty, IsOptional, IsString, IsNotEmpty } from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE_NF } from '../constants'
import { MeasurementDTO } from './measurement.dto'
import { ObservationDTO } from '@mavennet/traceability-dto'

export abstract class DeliveryStatementDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  deliveredDate: string

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => MeasurementDTO)
  deliveredVolume: MeasurementDTO

  @ApiPropertyOptional({ isArray: true, type: () => ObservationDTO })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}

export class MonthlyDeliveryStatementDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  statementMonth: string

  @ValidateNested()
  @IsArray()
  @Type(() => DeliveryStatementDTO)
  @ApiProperty()
  itemsDelivered: DeliveryStatementDTO[]
}
