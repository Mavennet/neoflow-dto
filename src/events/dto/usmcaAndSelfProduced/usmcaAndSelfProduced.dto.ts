import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class AGENT_USMCAAndSelfProducedVCDTO {
  @ApiProperty()
  @IsNotEmpty()
  usmca: boolean

  @ApiProperty()
  @IsNotEmpty()
  selfProduced: boolean
}
