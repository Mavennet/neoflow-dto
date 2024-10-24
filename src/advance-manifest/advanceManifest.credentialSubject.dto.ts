import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator'
import { JSON_TYPE_NF, type MeasurementDTO, type OrganizationDTO, type PlaceDTO } from '../general'

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
