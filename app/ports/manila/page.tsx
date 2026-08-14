import PortDashboard from "../../components/PortDashboard";
import { manilaPort } from "../../data/manilaPort";

export default function ManilaPortPage() {
  return <PortDashboard port={manilaPort} />;
}