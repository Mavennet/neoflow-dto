import {IsOptional, IsString } from 'class-validator'
import { AddressDTO as AddressDTOBase } from '@mavennet/traceability-dto'

export class AddressDTO extends AddressDTOBase{
  @IsOptional()
  @IsString()
  type?: string
}
