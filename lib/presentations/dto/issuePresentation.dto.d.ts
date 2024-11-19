import { PresentationDTO as PresentationBase } from './presentation.dto';
import { PresentationOptionsDTO } from './presentationOptions.dto';
declare class Presentation extends PresentationBase {
    id: string;
}
export declare class IssuePresentationDTO {
    presentation: Presentation;
    options?: PresentationOptionsDTO;
}
export {};
