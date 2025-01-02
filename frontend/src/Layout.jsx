import Header from "./component/Header";
import TopMenu from "./component/TopMenu";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
const Layout=()=>{
  return(
    <>
        <Header/>
        <TopMenu/>
        <div id="container">
        <Outlet/>

        </div>
        <Footer/>
    </>
  )
}

export default Layout;