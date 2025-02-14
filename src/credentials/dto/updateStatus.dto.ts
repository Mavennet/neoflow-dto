import { ApiProperty } from '@nestjs/swagger'
import { Equals, IsString, IsNotEmpty, IsArray, ArrayMinSize, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

class credentialStatusType {
  @ApiProperty()
  @IsString()
  @Equals('BitstringStatusListEntry')
  type: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string
}

export class UpdateStatusDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  credentialId: string

  @ApiProperty({ isArray: true, type: () => credentialStatusType })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => credentialStatusType)
  credentialStatus: credentialStatusType[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  productId?: string
}
