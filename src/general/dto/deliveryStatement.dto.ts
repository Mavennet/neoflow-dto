import { ObservationDTO } from '@mavennet/traceability-dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { Equals, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { JSON_TYPE_NF } from '../constants'
import { MeasurementDTO } from './measurement.dto'

export abstract class DeliveryStatementDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.DELIVERY_STATEMENT)
  type: JSON_TYPE_NF.DELIVERY_STATEMENT

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
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.MONTHLY_DELIVERY_STATEMENTS)
  type: JSON_TYPE_NF.MONTHLY_DELIVERY_STATEMENTS

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
