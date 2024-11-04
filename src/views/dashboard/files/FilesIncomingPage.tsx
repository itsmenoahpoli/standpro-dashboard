import React from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button, Card, Table, Modal } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import { RecordLogsService } from "@/services";
import { RecordLog } from "@/types/models";
import FILES_LOGO from "@/assets/files-logo.jpeg";

const _recordLogsService = new RecordLogsService();

const FilesIncomingPage: React.FC = () => {
  const [list, setList] = React.useState<any>([]);
  const [search, setSearch] = React.useState<string>("");
  const [viewData, setViewData] = React.useState<any>({
    isOpen: false,
    data: null,
  });

  const { isLoading, refetch } = useQuery({
    queryKey: ["record-logs-incoming-data"],
    queryFn: async () => {
      return _recordLogsService.getRecordLogsList("incoming").then((data) => {
        setList(data);
        return data;
      });
    },
  });

  const handleDelete = async (id: number) => {
    if (confirm("Confirm to delete this record?")) {
      await _recordLogsService.deleteRecordLog(id).then(() => refetch());
    }
  };

  const handleSearch = (searchVal: string) => {
    setSearch(searchVal);

    if (!searchVal) {
      return refetch();
    }

    const filteredList = list.filter((item: any) => {
      return item.subject.toLowerCase().includes(searchVal.toLowerCase());
    });

    setList(filteredList);
  };

  const handleView = (isOpen: boolean, data: any) => {
    setViewData({ isOpen, data });
  };

  const renderViewDetails = (data: any) => {
    if (!data) return <p>No Data</p>;

    // @ts-ignore
    return Object.keys(data).map((k) => (
      <p key={k}>
        {_.startCase(k)} &mdash; {data[k] ?? "N/A"}
      </p>
    ));
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div className="container pt-5 mx-auto">
        <Link to="/dashboard" className="text-blue-800 underline">
          Back to home
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 text-center mt-10">
        {/* <h1 className="text-[48px] font-bold">INCOMING COMMUNICATION PANEL</h1> */}
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

          <input
            type="text"
            className="!w-[300px] text-sm rounded-full"
            placeholder="Name of subject"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <Modal show={viewData.isOpen} onClose={() => handleView(false, null)}>
          <Modal.Header>View Details</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">{renderViewDetails(viewData?.data)}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={() => handleView(false, null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Card>
          {isLoading ? (
            <p className="text-center text-lg">DATA LOADING ...</p>
          ) : (
            <Table className="w-full">
              <Table.Head>
                <Table.HeadCell>DATE RECEIVED</Table.HeadCell>
                <Table.HeadCell>TIME RELEASED</Table.HeadCell>
                <Table.HeadCell>DATE LETTER</Table.HeadCell>
                <Table.HeadCell>SUBJECT</Table.HeadCell>
                <Table.HeadCell>FROM</Table.HeadCell>
                <Table.HeadCell>AGENCY</Table.HeadCell>
                <Table.HeadCell>PERSON WHO RECEIVED THE COMMUNICATION</Table.HeadCell>
                <Table.HeadCell>NAME OF FOLDER</Table.HeadCell>
                <Table.HeadCell>ACTIONS</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {!list.length ? (
                  <Table.Row>
                    <Table.Cell colSpan={10}>No Data Available</Table.Cell>
                  </Table.Row>
                ) : (
                  list.map((d: RecordLog) => (
                    <Table.Row>
                      <Table.Cell>{d.date_received}</Table.Cell>
                      <Table.Cell>{d.time_released}</Table.Cell>
                      <Table.Cell>{d.date_letter}</Table.Cell>
                      <Table.Cell>{d.subject}</Table.Cell>
                      <Table.Cell>{d.from}</Table.Cell>
                      <Table.Cell>{d.agency}</Table.Cell>
                      <Table.Cell>{d.received_by}</Table.Cell>
                      <Table.Cell>{d.name_of_folder}</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-row gap-x-3">
                          <Link to={`/dashboard/files/form/${d.id}/edit?type=incoming`}>
                            <button className="text-xs border rounded-md p-2">Update</button>
                          </Link>
                          <button className="text-xs text-white bg-blue-700 border rounded-md p-2" onClick={() => handleView(true, d)}>
                            View
                          </button>
                          <button className="text-xs text-white bg-red-700 border rounded-md p-2" onClick={() => handleDelete(d.id)}>
                            Delete
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                )}
              </Table.Body>
            </Table>
          )}
        </Card>
      </div>
    </div>
  );
};

export default FilesIncomingPage;
