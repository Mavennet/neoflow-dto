import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'
import { PresentationDTO as PresentationBase } from './presentation.dto'

export class CreatePresentationDTO extends PresentationBase {
  @ApiProperty()
  @IsOptional()
  id: string
}
