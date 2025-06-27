export declare enum PIPELINE_TYPE {
    ENBRIDGE = "ENBRIDGE",
    EXPRESS = "EXPRESS",
    KEYSTONE = "KEYSTONE"
}
export declare class PipelinePostArrivalRecord {
    pipeline: PIPELINE_TYPE;
    shipper: string;
    destination: string;
    ticket_number: string;
    batch_name?: string;
    density?: string;
    api?: string;
    commodity?: string;
    gsv_m3?: string;
    nsv_m3?: string;
    consignee?: string;
    gsv_bbl?: string;
    nsv_bbl?: string;
    productId?: string;
    workflowId?: string;
    open_date?: string;
    nominationMonth?: string;
}
export declare class PipelinePostArrivalDto_AGENT {
    records: PipelinePostArrivalRecord[];
}
export declare class PipelinePostArrivalResponseDto {
    records: PipelinePostArrivalRecord[];
    errors: string[];
}
