import { Layout, Menu } from "antd";
import { useAppSelector } from "../../../redux/app/hook";
import { useCurrnetUser } from "../../../redux/features/auth/authSlice";
import { SidebarGenarator } from "./SidebarGenarator";
import { AdminRoute } from "../../../Route/Admin.Route";
import { UserRoute } from "../../../Route/User.Route";

const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const user = useAppSelector(useCurrnetUser);

  let SideberItems;
  switch (user?.role) {
    case userRole.ADMIN:
      SideberItems = SidebarGenarator(AdminRoute, userRole.ADMIN);
      break;
    case userRole.USER:
      SideberItems = SidebarGenarator(UserRoute, userRole.USER);
      break;
  }

  return (
    <div>
      <Sider
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical " />
        <div>
          <h1
            style={{
              fontSize: "20px",
              color: "white",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            {user?.name}
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={SideberItems}
          className="min-h-screen"
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
