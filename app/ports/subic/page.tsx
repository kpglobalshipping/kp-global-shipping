import PortDashboard from "../../components/PortDashboard";
import { subicPort } from "../../data/subicPort";

export default function SubicPortPage() {
  return <PortDashboard port={subicPort} />;
}