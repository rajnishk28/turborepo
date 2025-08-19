import HeroPage from "./components/heroPage";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <Navbar />
      <HeroPage />
      <Footer />
    </div>
  );
}
