import { ApiProperty } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsDateString, IsEnum, IsNotEmpty } from 'class-validator'
import { JSON_TYPE, JSON_TYPE_NF, type MeasurementDTO, type OrganizationDTO, type PlaceDTO } from '../general'

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
    portOfArrival: PlaceDTO
    portOfDestination: PlaceDTO
    transporter: OrganizationDTO
    deliveryLocation: string
    receiptLocation: string
    sumOfScheduledDeliveries: MeasurementDTO[]
    numberOfBatches: string
    countOfShippers: number
  }>
}
