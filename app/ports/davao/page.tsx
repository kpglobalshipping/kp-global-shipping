import PortDashboard from "../../components/PortDashboard";
import { davaoPort } from "../../data/davaoPort";

export default function DavaoPortPage() {
  return <PortDashboard port={davaoPort} />;
}