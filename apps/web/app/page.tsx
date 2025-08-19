import Link from "next/link";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <Navbar/>

      
      <section className="flex flex-col items-center text-center mt-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website 🚀</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          This is a simple homepage built with <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind CSS</span>.
        </p>
        
        <Link href="/events">
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </Link>
      </section>

      <Footer/>
    </main>
  );
}
