import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../../../../general/constants'
import { DocumentDTO, ParcelDeliveryDTO } from '../../../../general/dto'

class BillOfLadingCredentialSubjectDTOBase {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === JSON_TYPE.BILL_OF_LADING)
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  billOfLadingNumber?: string

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => DocumentDTO)
  relatedDocuments?: DocumentDTO[]

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  freight: ParcelDeliveryDTO
}

export class BillOfLadingCredentialSubjectDTO extends BillOfLadingCredentialSubjectDTOBase {}
