import { Icon } from "@/components/icons/Icon";
import { trustItems } from "@/data/site";

/** Trust bar: 5 item, berada di dalam hero dan menempel ke dasarnya. */
export function TrustBar() {
  return (
    <div className="trust">
      <div className="container trust-grid">
        {trustItems.map((item) => (
          <div className="trust-item" key={item.title}>
            <Icon name={item.icon} />
            <div>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
