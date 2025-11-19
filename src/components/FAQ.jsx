export default function FAQ(){
  const faqs = [
    { q: "Is the solar panel included?", a: "The X7 is solar-ready with an XT60 input. Panels are sold separately to match your expedition needs." },
    { q: "How long does it take to charge fully?", a: "About 2 hours via 65W USB‑C PD from mains. Solar times vary based on panel and conditions." },
    { q: "Is it compatible with drones or satellite phones?", a: "Yes. The 65W USB‑C and included adapters support most drones, sat phones, and field radios." },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="divide-y divide-slate-700/60 rounded-2xl border border-slate-700/60 overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-slate-800/40 open:bg-slate-800/60">
              <summary className="cursor-pointer list-none px-6 py-5 text-white font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-slate-400 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
