import { IsNotEmpty, IsOptional, IsString, Matches, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../../general/dto/address.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

class CertifierDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  did: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo?: AddressDTO
}

export class CertifierDTO extends CertifierDTOBase {
}
