import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsArray, IsDateString, IsNotEmpty, ArrayNotEmpty, IsString, Validate, Equals } from 'class-validator'
import { JSON_TYPE, JSON_TYPE_NF } from '../general'
import { type DeliveryTicketCredentialSubjectDTO } from '../events/dto/deliveryTicket'

export class MonthlyDeliveryStatementsCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.MONTHLY_DELIVERY_STATEMENTS)
  type: JSON_TYPE_NF.MONTHLY_DELIVERY_STATEMENTS

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  date: string

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  deliveryStatements: DeliveryTicketCredentialSubjectDTO[]
}
