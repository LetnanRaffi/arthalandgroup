import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/data/site";

export function Stats() {
  const [headingLine1, headingLine2] = stats.heading.split("\n");

  return (
    <section className="stats" id="tentang" style={{ padding: "34px 0" }}>
      <div className="container stats-grid">
        <Reveal as="h2" delayMs={0}>
          {headingLine1}
          <br />
          {headingLine2}
        </Reveal>
        {stats.items.map((stat, i) => (
          <Reveal className={`stat${stat.last ? " last" : ""}`} delayMs={(i + 1) * 70} key={stat.value}>
            <Icon name={stat.icon} />
            <div>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
