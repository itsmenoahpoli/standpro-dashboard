import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import { useAuthStore } from "@/store";
import FILES_LOGO from "@/assets/files-logo.jpeg";

const menuButtons = [
  {
    label: "INCOMING",
    url: "/dashboard/files/incoming",
  },
  {
    label: "OUTGOING",
    url: "/dashboard/files/outgoing",
  },
  {
    label: "REPORTS",
    url: "/dashboard/files/reports",
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { RESET_AUTH } = useAuthStore();

  const handleRedirect = (url: string) => {
    return navigate(url);
  };

  const handleLogout = () => {
    RESET_AUTH();

    window.location.href = "/auth/login";
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-3">
      <Card className="w-1/3 rounded-2xl shadow-md p-10">
        <h1 className="text-2xl text-center font-bold mb-3">USER PANEL</h1>

        {menuButtons.map((button) => (
          <Button
            key={`btn-${button.label}`}
            color="light"
            className="w-full py-3 font-bold text-2xl border-2 border-gray-500"
            onClick={() => handleRedirect(button.url)}
          >
            {button.label}
          </Button>
        ))}

        <Button className="w-2/3 mx-auto" onClick={handleLogout}>
          Logout
        </Button>

        <div className="p-10">
          <img src={FILES_LOGO} alt="files-logo.jpeg" />
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
