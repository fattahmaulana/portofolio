'use client';
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";
import dynamic from "next/dynamic"; // Import dynamic untuk komponen browser-only
import CardSection from "@/components/card/CardSection";

// Gunakan dynamic import untuk App karena kemungkinan besar mengakses `document`
const App = dynamic(() => import("@/components/band/App"), { ssr: false });

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      {/* App Component (Browser-only) */}
      <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "black" }}>
        <App />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl">
        <Grid />
        <CardSection />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
