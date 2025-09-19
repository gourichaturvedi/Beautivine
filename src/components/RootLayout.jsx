import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="relative">
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}
