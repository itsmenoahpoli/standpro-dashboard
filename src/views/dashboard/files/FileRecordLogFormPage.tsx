import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "flowbite-react";
import { RecordLogForm } from "@/components/app";
import FILES_LOGO from "@/assets/files-logo.jpeg";

const FilesRecordLogFormPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const formType = params.get("type") as "incoming" | "outgoing";

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
          <RecordLogForm type={formType} />
        </Card>
      </div>
    </div>
  );
};

export default FilesRecordLogFormPage;
