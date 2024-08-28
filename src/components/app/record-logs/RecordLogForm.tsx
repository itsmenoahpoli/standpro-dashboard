import React from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Button } from "flowbite-react";
import { RecordLogsService } from "@/services";
import type { RecordLog } from "@/types/models";

type Props = {
  type: "incoming" | "outgoing";
};

const _recordLogsService = new RecordLogsService();

export const RecordLogForm: React.FC<Props> = (props) => {
  const { handleSubmit, register } = useForm<RecordLog>();

  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);

  const resetForm = () => {
    document.querySelector("form")?.reset();
  };

  const handleFormSubmit = handleSubmit(async (formData) => {
    formData.type = props.type;
    formData.file = uploadedFile;

    return await _recordLogsService.createRecordLog(formData, resetForm);
  });

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-3">
      <input type="date" placeholder="Date Received" {...register("date_received")} required />
      <input type="time" placeholder="Time Released" defaultValue={format(new Date(), "HH:mm")} {...register("time_released")} required />
      <input placeholder="Date Letter" {...register("date_letter")} required />
      <input placeholder="Subject" {...register("subject")} required />
      <input placeholder="From" {...register("from")} required />
      <input placeholder="Agency" {...register("agency")} required />
      <input placeholder="Person Who Received the Communication" {...register("received_by")} required />
      <input placeholder="Name of Folder" {...register("name_of_folder")} required />

      <div className="border border-gray-200 rounded-md p-3">
        <p className="mb-2">File to be uploaded:</p>
        <input type="file" onChange={(event) => handleFileUpload(event.target.files![0])} required />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};
