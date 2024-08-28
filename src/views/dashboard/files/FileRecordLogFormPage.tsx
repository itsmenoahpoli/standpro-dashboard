import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import FILES_LOGO from "@/assets/files-logo.jpeg";

const FilesRecordLogFormPage: React.FC = () => {
  const { handleSubmit, register } = useForm();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const formType = params.get("type") as "incoming" | "outgoing";

  console.log("form-type", params.get("type"));
  const handleFormSubmit = handleSubmit(() => {
    console.log("form submitted");
  });

  return (
    <div className="flex flex-col gap-y-8 pb-[50px]">
      <div className="container pt-5 mx-auto">
        <Link to="/dashboard" className="text-blue-800 underline">
          Back to home
        </Link>
      </div>
      <div className="flex flex-col items-center text-center mt-10">
        <h1 className="text-2xl font-medium uppercase">{formType} RECORD LOG SHEET FORM</h1>

        <div className="p-10">
          <img src={FILES_LOGO} alt="files-logo.jpeg" className="h-[120px] w-[300px]" />
        </div>
      </div>

      <div className="container flex justify-center gap-y-5 mx-auto">
        <Card className="w-1/2">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-3">
            <input placeholder="Date Received" {...register("date_received")} />
            <input placeholder="Time Released" {...register("time_released")} />
            <input placeholder="Date Letter" {...register("date_letter")} />
            <input placeholder="Subject" {...register("subject")} />
            <input placeholder="From" {...register("from")} />
            <input placeholder="Agency" {...register("agency")} />
            <input placeholder="Person Who Received the Communication" {...register("received_by")} />
            <input placeholder="Name of Folder" {...register("name_of_folder")} />

            <div className="border border-gray-200 rounded-md p-3">
              <p className="mb-2">File to be uploaded:</p>
              <input type="file" required />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default FilesRecordLogFormPage;
