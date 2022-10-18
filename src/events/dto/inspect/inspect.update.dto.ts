import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID } from 'class-validator'
import { AGENT_InspectProductDTO } from './inspect.dto'

export class AGENT_UpdateInspectProductDTO extends AGENT_InspectProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  revokeEventId: string
}
