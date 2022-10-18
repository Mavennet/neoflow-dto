import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, ValidateNested, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInBondEventVCDTO } from './event.vc.dto'
import { QPInbondCredentialSubjectDTO } from '.'

export class CreateQPInbondDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO
}
