import { ORIGIN_CRITERION } from '../../../products/constants';
import { CertifierDTO } from './certifier.dto';
export declare class CertifyProductDTO {
    productId: string;
    certifier: CertifierDTO;
    exporter: CertifierDTO;
    producer: CertifierDTO;
    importer: CertifierDTO;
    htsCode: string;
    originCriterion: ORIGIN_CRITERION;
    blanketPeriod: boolean;
    authName: string;
    authDate: Date;
}
