import { ApiProperty } from '@nestjs/swagger'
import { Equals, IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator'
import { type DeliveryTicketCredentialSubjectDTO } from '../events/dto/deliveryTicket'
import { JSON_TYPE_NF } from '../general'

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
