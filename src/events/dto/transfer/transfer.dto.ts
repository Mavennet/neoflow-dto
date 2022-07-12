import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsNotEmptyObject,
  ValidateNested,
  IsOptional,
  Matches,
  IsArray,
  ArrayMinSize
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { PlaceDTO, OrganizationDTO } from '../../../general'
import { Type } from 'class-transformer'
import { CORE_TransferEventDetailsDTO } from './event.vc.dto'
import { ProductDTO } from '../../../products'

export class CORE_TransferProductDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  requestId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CORE_TransferEventDetailsDTO)
  eventVC: CORE_TransferEventDetailsDTO
}

export class AGENT_TransferProductDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  requestId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry?: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfArrival?: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination?: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  receiptLocation?: PlaceDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsOptional()
  @IsString()
  price: string

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  products: ProductDTO[]

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  actor: OrganizationDTO[]
}
