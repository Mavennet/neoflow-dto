import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString, Validate } from 'class-validator'

export class WorkflowDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ each: true })
  @Validate((o) => o.includes('Workflow'))
  type: string[]

  instance: string[]
  definition: string[]
}
