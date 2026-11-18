import { Icon } from "@/components/icons/Icon";
import { waUrl } from "@/data/site";

/** Tombol bulat hijau WhatsApp, fixed di kanan bawah. */
export function FloatingWhatsApp() {
  return (
    <a className="wa-float" href={waUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp">
      <Icon name="whatsapp" />
    </a>
  );
}
