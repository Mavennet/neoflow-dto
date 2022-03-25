import { AddressDTO as AddressDTOBase } from '@mavennet/traceability-dto'
import { IsOptional, IsString } from 'class-validator'

export class AddressDTO extends AddressDTOBase{
  @IsOptional()
  @IsString()
  type?: string
}
