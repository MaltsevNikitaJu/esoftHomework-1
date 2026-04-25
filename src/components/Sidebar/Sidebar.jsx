import Filters from "./Filters/Filters";
import SpecialDeal from "./SpecialDeal/SpecialDeal";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div>
      <Filters />
      <SpecialDeal />
    </div>
  );
}
