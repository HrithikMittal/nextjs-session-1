import Store from "./store";
import Link from "next/link";

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <div>
        <div>Sidebar</div>
      </div>
      <div>
        <div>Header</div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
