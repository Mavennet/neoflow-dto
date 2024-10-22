import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsArray, IsDateString, IsNotEmpty, ArrayNotEmpty, IsString } from 'class-validator'
import { JSON_TYPE, JSON_TYPE_NF, type MeasurementDTO, type PlaceDTO, type OrganizationDTO } from '../general'

export class AdvanceManifestCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: JSON_TYPE_NF.MONTHLY_ADVANCE_MANIFEST

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
