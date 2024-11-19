import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
  ValidateNested
} from 'class-validator'
import { OrganizationDTO, type VerifiableCredentialDTO } from '../..'
import { Type } from 'class-transformer'

export abstract class PresentationDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2'))
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  abstract id: string

  @ApiProperty()
  @IsString({ each: true })
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @IsArray()
  verifiableCredential: Array<VerifiableCredentialDTO<any>>

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => OrganizationDTO)
  holder: OrganizationDTO
}
