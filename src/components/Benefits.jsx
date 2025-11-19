import { Snowflake, BatteryCharging, Sun, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Snowflake,
    title: "Performs down to –40°C",
    desc: "Proprietary low-temp cell chemistry keeps power flowing in sub-zero extremes.",
  },
  {
    icon: BatteryCharging,
    title: "26,000 mAh + 65W fast charging",
    desc: "Charge laptops, cameras, and radios simultaneously with USB-C PD.",
  },
  {
    icon: Sun,
    title: "Solar + IP69 ruggedness",
    desc: "Top up via solar in the field. Dustproof, waterproof, and shock-resistant.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why X7</h2>
          <p className="text-slate-300 mt-3">Three reasons it outlasts the cold</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 backdrop-blur hover:bg-slate-800/60 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-slate-700/50 border border-slate-600/60">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Micro features row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-300/80 text-sm">
          <span className="inline-flex items-center gap-2"><Shield className="w-4 h-4"/> IP69 Rated</span>
          <span className="inline-flex items-center gap-2"><Zap className="w-4 h-4"/> USB-C PD 65W</span>
          <span className="inline-flex items-center gap-2"><Sun className="w-4 h-4"/> Solar Ready</span>
        </div>
      </div>
    </section>
  );
}
