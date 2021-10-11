import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto'
import { AGENT_CreationEventCredentialSubjectDTO } from './event.credentialSubject'

import { ProductVCDTO } from '../../../products/dto/product.vc.dto'
import { CreationEventDetailsDTO } from './event.vc.dto'

class CreateProductDTOBase {
  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  productId: string
}

export class AGENT_CreateProductDTO extends CreateProductDTOBase {
  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AGENT_CreationEventCredentialSubjectDTO)
  eventCredentialSubject: AGENT_CreationEventCredentialSubjectDTO
}

export class CORE_CreateProductDTO extends CreateProductDTOBase {
  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productVCHash: string

  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreationEventDetailsDTO)
  eventVC: CreationEventDetailsDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  eventVCHash: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString() // TODO fix data type
  txTimestamp: string
}
