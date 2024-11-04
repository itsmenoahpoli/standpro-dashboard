import React from "react";
import { useNavigate } from "react-router-dom";
import { FcOpenedFolder } from "react-icons/fc";
import { Card, Button } from "flowbite-react";
import FILES_LOGO from "@/assets/files-logo.jpeg";

const menuButtons = [
  {
    label: "DAILY",
    url: "/dashboard/files-reports?type=daily",
  },
  {
    label: "MONTHLY",
    url: "/dashboard/files-reports?type=monthly",
  },
  {
    label: "YEARLY",
    url: "/dashboard/files-reports?type=yearly",
  },
];

const FilesReportsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = (url: string) => {
    return navigate(url);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-3">
      <Card className="w-1/3 flex flex-col items-center rounded-2xl shadow-md p-10">
        <h1 className="text-2xl text-center font-bold mb-3">REPORT PANEL</h1>

        <div className="w-1/2 flex flex-col mx-auto">
          {menuButtons.map((button) => (
            <Button
              key={`btn-${button.label}`}
              color="light"
              className="w-full py-3 font-bold text-2xl border-0 flex flex-row justify-between"
              onClick={() => handleRedirect(button.url)}
            >
              <div className="flex flex-row items-center gap-7">
                <FcOpenedFolder size={72} /> {button.label}
              </div>
            </Button>
          ))}
        </div>

        <div className="p-10">
          <img src={FILES_LOGO} alt="files-logo.jpeg" />
        </div>
      </Card>
    </div>
  );
};

export default FilesReportsPage;
