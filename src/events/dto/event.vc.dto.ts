import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsEnum,
    IsDateString,
    IsNumber,
    IsLongitude,
    IsLatitude
  } from 'class-validator'
  import { EVENT_TYPE } from './entities/Event.entity'
  
  export class EventDetailsDTO {
    @IsOptional()
    @IsString()
    identifier: string
  
    @IsNotEmpty()
    @IsEnum(EVENT_TYPE)
    eventName: EVENT_TYPE
  
    @IsOptional()
    @IsDateString()
    timestamp: string
  
    @IsNotEmpty()
    @IsLatitude()
    latitude: string
  
    @IsNotEmpty()
    @IsLongitude()
    longitude: string
  
    @IsNotEmpty()
    @IsString()
    address: string
  
    @IsOptional()
    @IsNumber()
    volume: number
  
    @IsOptional()
    @IsNumber()
    price: number
  
    @IsOptional()
    @IsString()
    transportType: string
  
    @IsOptional()
    @IsString()
    batchNo: string
  
    @IsOptional()
    @IsString()
    scn: string
  
    @IsOptional()
    @IsString()
    bol: string
  
    @IsOptional()
    @IsString()
    deliveryTicketId: string
  
    @IsOptional()
    @IsString()
    txHash: string
  
    @IsNotEmpty()
    @IsString()
    eventSubmitter: string
  
    @IsOptional()
    @IsString()
    recipient: string
  }
  