import Navbar from "./components/common/Navbar";
import Hero from "./page/Hero";
import Verify from "./page/Verify";
import Efficient from "./page/Efficient";
import GiftCard from "./page/GiftCard";
import Buy from "./page/Buy";
import Testimony from "./page/Testimony";
import Footer from "./components/common/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white mx-auto">
      <main className="relative overflow-hidden ">
        <Navbar />
        <Hero />
        <Verify />
        <Efficient />
        <GiftCard />
        <Buy />
        <Testimony />
        <Footer />
      </main>
    </div>
  );
}
