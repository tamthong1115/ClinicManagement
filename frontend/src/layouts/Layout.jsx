// frontend/src/layouts/Layout.jsx
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-indigo-400 pb-12">
        <div className="container mx-auto py-4">
          <Header />
        </div>
        <Hero />
      </header>

      <main className="container mx-auto flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
