import {
	UPLOAD_TYPE as UPLOAD_TYPE_BASE
} from 'mavennet-dto'

const enum UPLOAD_TYPE_EXTEND {
}

export type UPLOAD_TYPE = UPLOAD_TYPE_BASE | UPLOAD_TYPE_EXTEND
