import { Type } from 'class-transformer'
import { Equals, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'
import { DocumentDTO, ParcelDeliveryDTO } from '../../../../general/dto'

class BillOfLadingCredentialSubjectDTOBase {
  @IsString()
  @Equals(JSON_TYPE.BILL_OF_LADING)
  type: JSON_TYPE.BILL_OF_LADING

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
