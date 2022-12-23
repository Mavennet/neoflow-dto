import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNotEmptyObject, ValidateNested, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInBondEventVCDTO } from './event.vc.dto'
import { QPInbondCredentialSubjectDTO } from '.'

export class CreateQPInbondDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventId: string
}

export class CreateQPInbondDTO extends CreateQPInbondDTOBase {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO
}

export class CORE_CreateQPInbondDTO extends CreateQPInbondDTOBase {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO
}
