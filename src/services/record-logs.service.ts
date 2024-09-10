import { BaseService } from "./base.service";
import { RecordLog } from "@/types/models";

export class RecordLogsService extends BaseService {
  public async getRecordLogsList(type: RecordLog["type"]) {
    return await this.http
      .get("/admin/record-logs?raw=true&type=" + type)
      .then((response) => response.data)
      .catch((error) => this.handleError(error));
  }

  public async createRecordLog(payload: RecordLog, resetForm: () => void) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(payload)) {
      formData.append(key, value);
    }

    formData.append("upload_folder_id", "");

    return await this.http
      .post("/admin/record-logs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Record log succesfully created/uploaded");
          resetForm();
        }
      })
      .catch((error) => this.handleError(error));
  }

  public async updateRecordLog(id: number, payload: RecordLog) {
    return await this.http
      .patch("/admin/record-logs/" + id, payload)
      .then((response) => {
        alert("Record updated");
        return response.data;
      })
      .catch((error) => this.handleError(error));
  }

  public async getRecordLog(id: number) {
    return await this.http
      .get("/admin/record-logs/" + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => this.handleError(error));
  }

  public async deleteRecordLog(id: number) {
    return await this.http
      .delete("/admin/record-logs/" + id)
      .then((response) => {
        return response.data;
        alert("Record has been deleted");
      })
      .catch((error) => this.handleError(error));
  }
}
