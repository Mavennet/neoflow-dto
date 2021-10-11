import { JsonLdContext } from '../../../json-ld.context'
import { Equals, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { AGENT_TransferEventDTO } from './event.dto'

export class AGENT_TransferProductCustodyDTO extends JsonLdContext {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  productId: number

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AGENT_TransferEventDTO)
  eventDetails: AGENT_TransferEventDTO

  @IsNotEmpty()
  @Equals('TransferProductAction')
  '@type': string
}
