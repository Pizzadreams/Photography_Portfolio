import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
        <Navbar />
        {/* Whatever page you're on */}
        <main className="pt-14">
            <Outlet />
        </main>

        <Footer />
    </>
  );
}

export default MainLayout;