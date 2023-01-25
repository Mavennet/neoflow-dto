import {
  IsNotEmptyObject,
  IsArray,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ContractDTO, SubContractDTO } from './'

export class CreateTakeOrPayContractDTO {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ContractDTO)
  contract: ContractDTO

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => SubContractDTO)
  subContracts: SubContractDTO[]
}
