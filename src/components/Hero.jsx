import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Cold gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-950/95" />

      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/50 px-3 py-1 mb-6 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-sm text-slate-200/80">New — GlacierCharge X7</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Power That Never Freezes.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl">
            A power bank engineered for expeditions, mountains, and polar conditions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-900 font-semibold px-6 py-3 transition-colors"
            >
              Order X7
            </a>
            <a
              href="#specs"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600/70 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 transition-colors"
            >
              Technical Specs
            </a>
          </div>
        </motion.div>
      </div>

      {/* Foreground image accent */}
      <motion.img
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1800&auto=format&fit=crop"
        alt="Explorer in harsh weather"
        className="hidden lg:block absolute right-0 bottom-0 w-[45%] max-w-[720px] object-cover opacity-80 mix-blend-screen"
      />
    </section>
  );
}
