import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'
import { DocumentDTO, ParcelDeliveryDTO } from '../../../../general/dto'

class BillOfLadingCredentialSubjectDTOBase {
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.BILL_OF_LADING))
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
