import PortDashboard from "../../components/PortDashboard";
import { cebuPort } from "../../data/cebuPort";

export default function CebuPortPage() {
  return <PortDashboard port={cebuPort} />;
}