import { Icon } from "@/components/icons/Icon";
import { Logo } from "@/components/Logo";
import { company, footer } from "@/data/site";

/** Ikon sosmed yang URL-nya kosong tidak ditampilkan (PRD §6). */
const visibleSocial = footer.social.links.filter((link) => link.href.trim() !== "");

export function Footer() {
  const telHref = `tel:+${company.waNumber}`;
  const mailHref = `mailto:${company.email}`;

  return (
    <footer className="site-footer" id="kontak">
      <div className="container">
        <div className="foot-grid">
          {/* Logo */}
          <div>
            <a href="#beranda" className="logo" aria-label="Artha Land Group">
              <Logo variant="footer" />
            </a>
          </div>

          {/* Informasi Perusahaan */}
          <div>
            <h4>{footer.companyInfo.heading}</h4>
            <ul>
              {footer.companyInfo.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unit Usaha */}
          <div>
            <h4>{footer.unitUsaha.heading}</h4>
            <ul className="cols-2">
              {footer.unitUsaha.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak Kami */}
          <div>
            <h4>{footer.contact.heading}</h4>
            <ul className="contact">
              <li>
                <Icon name="pin" /> {company.address}
              </li>
              <li>
                <Icon name="phone" />
                <a href={telHref}>{company.phoneDisplay}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={mailHref}>{company.email}</a>
              </li>
            </ul>
          </div>

          {/* Ikuti Kami */}
          {visibleSocial.length > 0 && (
            <div>
              <h4>{footer.social.heading}</h4>
              <div className="social">
                {visibleSocial.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Icon name={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="foot-bottom">
          <span>{footer.copyright}</span>
          {footer.legal.length > 0 && (
            <span className="foot-legal">
              {footer.legal.map((item, i) => (
                <span key={item.label}>
                  {i > 0 && (
                    <span className="sep" aria-hidden="true">
                      |
                    </span>
                  )}
                  <a href={item.href}>{item.label}</a>
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
