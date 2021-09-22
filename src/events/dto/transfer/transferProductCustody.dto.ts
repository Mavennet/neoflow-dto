import { JsonLdContext } from '../../../json-ld.context'
import { Equals, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { TransferEventDTO } from './transferEvent.dto'

export class TransferProductCustodyDTO extends JsonLdContext {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  productId: number

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => TransferEventDTO)
  eventDetails: TransferEventDTO

  @IsNotEmpty()
  @Equals('TransferProductAction')
  '@type': string
}
