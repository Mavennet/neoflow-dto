import { IsNotEmpty, IsOptional, IsString, Matches, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../../general/dto/address.dto'

class CertifierDTOBase {
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  did: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  title: string

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO
}

export class CertifierDTO extends CertifierDTOBase {
}