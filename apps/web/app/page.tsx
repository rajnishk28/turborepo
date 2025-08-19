import HeroPage from "./components/heroPage";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <Navbar />
      <HeroPage />
      <Footer />
    </main>
  );
}
