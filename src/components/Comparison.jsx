export default function Comparison(){
  const rows = [
    { label: "Temperature limit", x7: "–40°C", standard: "0°C" },
    { label: "Capacity", x7: "26,000 mAh", standard: "10,000–20,000 mAh" },
    { label: "Ruggedness", x7: "IP69 + MIL-STD drop", standard: "Basic splash resistant" },
    { label: "Charging speed", x7: "USB‑C PD 65W", standard: "18W" },
    { label: "Solar compatibility", x7: "Integrated XT60 input", standard: "No" },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">X7 vs Standard</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-700/60">
          <table className="w-full text-left text-slate-200">
            <thead className="bg-slate-800/60">
              <tr>
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 font-semibold text-white">GlacierCharge X7</th>
                <th className="py-4 px-4 text-slate-300">Standard Power Bank</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-slate-900/60" : "bg-slate-900/30"}>
                  <td className="py-4 px-4 text-slate-300">{r.label}</td>
                  <td className="py-4 px-4 text-white font-medium">{r.x7}</td>
                  <td className="py-4 px-4 text-slate-300">{r.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
