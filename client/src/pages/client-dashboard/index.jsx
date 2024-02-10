import { useState } from "react";
import ClientDashboardComponent from "../../components/client-dashboard-component";

const mockRows = [
  {
    id: 1,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 2,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 3,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 4,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 5,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 6,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 7,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 8,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 9,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 10,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 11,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 12,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 13,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 14,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 15,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 16,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 17,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 18,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 19,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 20,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 21,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 22,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 23,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 24,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 1,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 25,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 26,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Emily Gazo",
  },
  {
    id: 27,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "Grant h",
  },
  {
    id: 28,
    name: "First Last",
    phone: "+1 111 111 1111",
    email: "email@email.com",
    status: "Active",
    dateUpdated: "1/1/2022",
    owner: "atff fantano",
  },
];

function ClientDashboard() {
  // eslint-disable-next-line no-unused-vars
  const [clientData, setClientData] = useState(mockRows);

  return <ClientDashboardComponent clientData={clientData} />;
}

export default ClientDashboard;