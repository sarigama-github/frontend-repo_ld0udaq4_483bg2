import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/60 border-b border-slate-800/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 to-blue-600 ring-1 ring-sky-300/40" />
            <span className="font-semibold text-white">GlacierCharge X7</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#compare" className="hover:text-white">Compare</a>
            <a href="#order" className="hover:text-white">Order</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Benefits />
        <Features />
        <div id="reviews"><Reviews /></div>
        <div id="compare"><Comparison /></div>
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} GlacierCharge. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
