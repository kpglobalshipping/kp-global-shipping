import PortDashboard from "../../components/PortDashboard";
import { bacolodPort } from "../../data/bacolodPort";

export default function BacolodPortPage() {
  return <PortDashboard port={bacolodPort} />;
}