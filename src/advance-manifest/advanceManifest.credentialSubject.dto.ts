import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsArray, IsDateString, IsNotEmpty, ArrayNotEmpty } from 'class-validator'
import { JSON_TYPE, JSON_TYPE_NF, type MeasurementDTO } from '../general'

export class AdvanceManifestCredentialSubjectDTO {
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
  scheduledDeliveries?: Array<{
    portCode: string
    deliveryLocation: string
    sumOfScheduledDeliveries: MeasurementDTO[]
    numberOfBatches: string
  }>
}
