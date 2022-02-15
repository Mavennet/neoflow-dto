import { IsString, IsNotEmpty, IsNotEmptyObject, IsUrl, ValidateNested, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInBondEventVCDTO } from './event.vc.dto'

export class CreateQPInbondDTO {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  productId: string

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  eventId: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string
}
