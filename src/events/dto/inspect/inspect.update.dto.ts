import { IsNotEmpty, IsUUID } from 'class-validator'
import { AGENT_InspectProductDTO } from './inspect.dto'

export class AGENT_UpdateInspectProductDTO extends AGENT_InspectProductDTO {
  @IsNotEmpty()
  @IsUUID()
  revokeEventId: string
}
