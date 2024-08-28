import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button, Card, Table } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import { RecordLogsService } from "@/services";
import FILES_LOGO from "@/assets/files-logo.jpeg";
import { RecordLog } from "@/types/models";

const _recordLogsService = new RecordLogsService();

const FilesIncomingPage: React.FC = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["record-logs-incoming-data"],
    queryFn: async () => _recordLogsService.getRecordLogsList("incoming"),
  });

  return (
    <div className="flex flex-col gap-y-8">
      <div className="container pt-5 mx-auto">
        <Link to="/dashboard" className="text-blue-800 underline">
          Back to home
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 text-center mt-10">
        <h1 className="text-[48px] font-bold">INCOMING COMMUNICATION PANEL</h1>
        <h1 className="text-2xl font-medium">RECORD LOG SHEET FOR INCOMMING COMMUNICATION</h1>
      </div>

      <div className="container flex flex-col gap-y-5 mx-auto">
        <div className="flex flex-row justify-between items-center">
          <Link to="/dashboard/files/form?type=incoming">
            <Button color="light" className="rounded-full border border-gray-600">
              <FiPlusCircle size={20} /> &nbsp; ADD NEW
            </Button>
          </Link>

          <div className="p-10">
            <img src={FILES_LOGO} alt="files-logo.jpeg" />
          </div>

          <input type="text" className="!w-[300px] text-sm rounded-full" placeholder="Search" />
        </div>

        <Card>
          {isLoading ? (
            <p className="text-center text-lg">DATA LOADING ...</p>
          ) : (
            <Table className="w-full">
              <Table.Head>
                <Table.HeadCell>NO</Table.HeadCell>
                <Table.HeadCell>DATE RECEIVED</Table.HeadCell>
                <Table.HeadCell>TIME RELEASED</Table.HeadCell>
                <Table.HeadCell>DATE LETTER</Table.HeadCell>
                <Table.HeadCell>SUBJECT</Table.HeadCell>
                <Table.HeadCell>FROM</Table.HeadCell>
                <Table.HeadCell>AGENCY</Table.HeadCell>
                <Table.HeadCell>PERSON WHO RECEIVED THE COMMUNICATION</Table.HeadCell>
                <Table.HeadCell>NAME OF FOLDER</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {Array.isArray(data) &&
                  data.map((d: RecordLog) => (
                    <Table.Row>
                      <Table.Cell>{d.id}</Table.Cell>
                      <Table.Cell>{d.date_received}</Table.Cell>
                      <Table.Cell>{d.time_released}</Table.Cell>
                      <Table.Cell>{d.date_letter}</Table.Cell>
                      <Table.Cell>{d.subject}</Table.Cell>
                      <Table.Cell>{d.from}</Table.Cell>
                      <Table.Cell>{d.agency}</Table.Cell>
                      <Table.Cell>{d.received_by}</Table.Cell>
                      <Table.Cell>{d.name_of_folder}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          )}
        </Card>
      </div>
    </div>
  );
};

export default FilesIncomingPage;
