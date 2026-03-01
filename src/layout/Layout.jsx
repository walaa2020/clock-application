import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom"
import Drawer from "../components/Drawer"
const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Drawer/>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout