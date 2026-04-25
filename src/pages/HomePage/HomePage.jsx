import Sidebar from "../../components/Sidebar/Sidebar";
import Products from '../../components/Products/Products'
import "./HomePage.css";
export default function HomePage() {
  return (
    <div>
      <div className="content-container">
        <div className="content-left">
          <Sidebar />
        </div>
        <div className="content-right">
          <Products/>
        </div>
      </div>
    </div>
  );
}
