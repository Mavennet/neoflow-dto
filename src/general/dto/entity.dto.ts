import {
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsString,
  IsEmail,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { OrganizationDTO } from './'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class EntityDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type.includes(JSON_TYPE.ENTITY))
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  entityType: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  phoneNumber?: string

  @ApiPropertyOptional({ type: () => OrganizationDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  worksFor?: OrganizationDTO
}
