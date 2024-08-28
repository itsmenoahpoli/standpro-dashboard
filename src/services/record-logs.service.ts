import { BaseService } from "./base.service";

export class RecordLogsService extends BaseService {
	public async getRecordLogsList() {
		return await this.http.get('')
	}
}
