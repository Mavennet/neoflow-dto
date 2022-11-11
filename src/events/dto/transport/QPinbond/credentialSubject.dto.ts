import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmptyObject,
  IsOptional,
  IsNumberString,
  IsString,
  IsEnum,
  ValidateNested,
  Matches,
  Validate,
  IsArray,
  ArrayNotEmpty,
  IsNotEmpty,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import { ParcelDeliveryDTO, PlaceDTO, EntityDTO } from '../../../../general/dto'
import { JSON_TYPE } from '../../../../general/constants'
import { ProductDTO } from '../../../../products/dto/product.dto'
import { IN_BOND_TYPE } from '../../../constants'

export class QPInbondCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.INBOND])
  type: JSON_TYPE[]

  @ApiProperty()
  @ValidateIf((o) => !o.ftzNo && !o.entryId)
  @IsNotEmpty()
  @IsString()
  inBondNumber: string // the old qpInBondId

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  irsNumber?: string

  @ApiProperty()
  @ValidateIf((o) => !o.ftzNo && !o.inBondNumber)
  @IsNotEmpty()
  @IsString()
  entryId: string

  @ApiProperty()
  @ValidateIf((o) => !o.entryId && !o.inBondNumber)
  @IsNotEmpty()
  @IsString()
  ftzNo: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(IN_BOND_TYPE)
  inBondType?: IN_BOND_TYPE

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry?: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination?: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfArrival?: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntityDTO)
  carrier: EntityDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntityDTO)
  recipient: EntityDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  shipment: ParcelDeliveryDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  billOfLadingNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  expectedDeliveryDate?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  valuePerItem?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  totalOrderValue?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO
}
