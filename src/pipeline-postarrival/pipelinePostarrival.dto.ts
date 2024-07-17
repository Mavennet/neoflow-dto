import { IsNotEmpty, IsString, IsOptional, IsEnum, IsArray } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export enum PIPELINE_TYPE {
  ENBRIDGE = 'ENBRIDGE',
  EXPRESS = 'EXPRESS',
  KEYSTONE = 'KEYSTONE'
}

export class PipelinePostArrivalRecord {
  @IsNotEmpty()
  @ApiProperty({ enum: PIPELINE_TYPE })
  @IsEnum(PIPELINE_TYPE)
  pipeline: PIPELINE_TYPE

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  shipper: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  destination: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  ticket_number: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  batch_name?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  density?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  api?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  commodity?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  gsv_m3?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  nsv_m3?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  consignee?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  gsv_bbl?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  nsv_bbl?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  productId?: string

  @IsOptional()
  @ApiProperty({ required: false })
  @IsString()
  open_date?: string
}

export class PipelinePostArrivalDto_AGENT {
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ type: [PipelinePostArrivalRecord] })
  records: PipelinePostArrivalRecord[]
}

export class PipelinePostArrivalResponseDto {
  @IsNotEmpty()
  @ApiProperty({ type: [PipelinePostArrivalRecord] })
  records: PipelinePostArrivalRecord[]

  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  errors: string[]
}
