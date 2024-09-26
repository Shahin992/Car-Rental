// import React from "react";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/hook";
import { logoutUser } from "../../redux/features/auth/authSlice";
import Sidebar from "./Sidebar/Sidebar";
import { Header } from "antd/es/layout/layout";
import { navigation } from "../../pages/Home/Header/Header";

const { Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header>
          <div className="hidden lg:flex items-center lg:gap-x-12">
            <div className=" ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className=" font-semibold text-white  px-10  leading-6 "
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button onClick={handleLogout}>Logout</Button>{" "}
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
