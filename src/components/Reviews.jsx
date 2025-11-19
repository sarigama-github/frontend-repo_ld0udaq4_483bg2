import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We ran comms through a week-long whiteout. The X7 was the only unit that never throttled in the -35°C windchill.",
    author: "North Ridge Expedition Team",
  },
  {
    quote:
      "Reliable power above 6,000m. Our drone batteries and sat phone were always ready.",
    author: "Aconcagua Guide Collective",
  },
  {
    quote:
      "If you work in polar research, this is the field standard now.",
    author: "Arctic 2024 Survey Crew",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
            ))}
          </div>
          <div className="text-white text-2xl font-semibold">4.9 / 5</div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-slate-200/90">
            Tested in the Arctic 2024
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 text-slate-200"
            >
              <p className="leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-slate-400 text-sm">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
