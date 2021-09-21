import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'
import { CreationEventCredentialSubjectDTO } from '../../events/dto/creationEventCredentialSubject.dto'

import { ProductVCDTO } from './product.vc.dto'
import { CreationEventDetailsDTO } from '../../events/dto/creationEvent.vc.dto'

export class CreateProductDTO {
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
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productVCHash: string

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

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreationEventCredentialSubjectDTO)
  eventCredentialSubject: CreationEventCredentialSubjectDTO
}
