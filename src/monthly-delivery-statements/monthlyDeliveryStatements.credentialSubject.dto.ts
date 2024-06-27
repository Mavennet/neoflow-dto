import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsArray, IsDateString, IsNotEmpty, ArrayNotEmpty } from 'class-validator'
import { JSON_TYPE, JSON_TYPE_NF } from '../general'
import { type DeliveryTicketCredentialSubjectDTO } from '../events/dto/deliveryTicket'

export class MonthlyDeliveryStatementsCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(
    {
      ...JSON_TYPE,
      ...JSON_TYPE_NF
    },
    { each: true }
  )
  type: Array<JSON_TYPE | JSON_TYPE_NF>

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  date: string

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  deliveryStatements: DeliveryTicketCredentialSubjectDTO[]
}
