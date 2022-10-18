import { ApiProperty } from '@nestjs/swagger'
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

  @IsOptional()
  @IsString()
  irsNumber: string

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

  @IsOptional()
  @IsEnum(IN_BOND_TYPE)
  inBondType: IN_BOND_TYPE

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfArrival: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntityDTO)
  carrier: EntityDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntityDTO)
  recipient: EntityDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  shipment: ParcelDeliveryDTO

  @IsOptional()
  @IsString()
  billOfLadingNumber: string

  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  expectedDeliveryDate: string

  @IsOptional()
  @IsNumberString()
  valuePerItem: string

  @IsOptional()
  @IsNumberString()
  totalOrderValue: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO
}
