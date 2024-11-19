import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { PresentationDTO as PresentationBase } from './presentation.dto'
import { PresentationOptionsDTO } from './presentationOptions.dto'

class Presentation extends PresentationBase {
  @ApiProperty()
  @IsOptional()
  id: string
}

export class IssuePresentationDTO {
  @ApiProperty()
  @ValidateNested()
  @IsNotEmpty()
  @Type(() => Presentation)
  presentation: Presentation

  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => PresentationOptionsDTO)
  options?: PresentationOptionsDTO
}
