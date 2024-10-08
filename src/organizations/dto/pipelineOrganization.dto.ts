import { IsArray, IsNotEmpty, IsString } from 'class-validator'

export class PipelineOrganizationDTO {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsArray()
  alias: string[]
}
