import {
  IsOptional,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { UpdateContractDTO as UpdateContractDTOBase } from '@mavennet/traceability-dto'
import { UpdateSubContractDTO } from './updateSubContract.dto'

export class UpdateContractDTO extends UpdateContractDTOBase {
  @ApiPropertyOptional()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => UpdateSubContractDTO)
  updateSubContracts?: UpdateSubContractDTO[]
}
