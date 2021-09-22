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
  ArrayNotEmpty
} from 'class-validator'
import { Type } from 'class-transformer'
import { ParcelDeliveryDTO, OrganizationDTO } from '../../../../general/dto'
import { JSON_TYPE } from '../../../../general/constants'
import { ProductDTO } from '../../../../products/dto/product.dto'
import { IN_BOND_TYPE } from '../../../constants'

export class QPInbondCredentialSubjectDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.INBOND])
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  entryId: string

  @IsOptional()
  @IsString()
  inBondNumber: string // the old qpInBondId

  @IsOptional()
  @IsString()
  irsNumber: string

  @IsOptional()
  @IsString()
  ftzNo: string

  @IsOptional()
  @IsEnum(IN_BOND_TYPE)
  inBondType: IN_BOND_TYPE

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  carrier: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  recipient: OrganizationDTO

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
