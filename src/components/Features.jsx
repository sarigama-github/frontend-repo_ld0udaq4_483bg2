import { motion } from "framer-motion";

const specs = [
  { k: "Durability", v: "IP69 sealed, MIL-STD drop protection" },
  { k: "Battery", v: "26,000 mAh Li-ion, low-temp chemistry" },
  { k: "Weight", v: "580 g" },
  { k: "Ports", v: "2x USB-C (65W/30W), 1x USB-A (18W)" },
  { k: "Recharge", v: "USB-C PD, Solar (XT60), DC input" },
];

export default function Features() {
  return (
    <section id="specs" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="rounded-3xl border border-slate-700/60 bg-slate-800/40 p-6 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
              alt="GlacierCharge X7 product shot"
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">GlacierCharge X7</h2>
          <p className="text-slate-300 mb-6">
            Built for expeditions. From basecamp to summit pushes, X7 delivers dependable power in brutal cold where others shut down.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((s) => (
              <div key={s.k} className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-4">
                <div className="text-slate-400 text-xs uppercase tracking-wider">{s.k}</div>
                <div className="text-white mt-1 font-medium">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
