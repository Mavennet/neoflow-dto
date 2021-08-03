import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ArrayMinSize
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { MeasurementDTO } from 'mavennet-dto'

interface Events {
  event: string
  co2eProduced: MeasurementDTO
}

export class CarbonFootprintEventsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  co2eEmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  events: Events[]
}
