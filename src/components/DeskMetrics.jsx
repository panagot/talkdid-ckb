/** Clearpool-style trust strip — dense status, not marketing cards. */
export default function DeskMetrics({ items, label = "Desk status" }) {
  return (
    <section className="desk-metrics" aria-label={label}>
      {items.map((item) => (
        <article key={item.label} className="desk-metric">
          <span className="desk-metric-label">{item.label}</span>
          <strong className="desk-metric-value">{item.value}</strong>
          {item.sub ? <span className="desk-metric-sub">{item.sub}</span> : null}
        </article>
      ))}
    </section>
  );
}
