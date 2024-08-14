import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Table } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import FILES_LOGO from "@/assets/files-logo.jpeg";

const FilesIncomingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="container pt-5 mx-auto">
        <Link to="/dashboard/overview" className="text-blue-800 underline">
          Back to home
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 text-center mt-10">
        <h1 className="text-[48px] font-bold">INCOMING COMMUNICATION PANEL</h1>
        <h1 className="text-2xl font-medium">RECORD LOG SHEET FOR INCOMMING COMMUNICATION</h1>
      </div>

      <div className="container flex flex-col gap-y-5 mx-auto">
        <div className="flex flex-row justify-between items-center">
          <Button color="light" className="rounded-full border border-gray-600">
            <FiPlusCircle size={20} /> &nbsp; ADD NEW
          </Button>

          <div className="p-10">
            <img src={FILES_LOGO} alt="files-logo.jpeg" />
          </div>

          <input type="text" className="w-[300px] text-sm rounded-full" placeholder="Search" />
        </div>

        <Card>
          <Table className="w-full">
            <Table.Head>
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>DATE RECEIVED</Table.HeadCell>
              <Table.HeadCell>TIME RELEASE</Table.HeadCell>
              <Table.HeadCell>DATE LETTER</Table.HeadCell>
              <Table.HeadCell>SUBJECT</Table.HeadCell>
              <Table.HeadCell>FROM</Table.HeadCell>
              <Table.HeadCell>AGENCY</Table.HeadCell>
              <Table.HeadCell>PERSON WHO RECEIVED THE COMMUNICATION</Table.HeadCell>
              <Table.HeadCell>NAME OF FOLDER</Table.HeadCell>
            </Table.Head>
            <Table.Body></Table.Body>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default FilesIncomingPage;
