import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links?: Record<string, string>
}

export default ((opts?: Options) => {
  const CustomFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {
      "🛏️ Thế Giới Nệm": "https://thegioinem.goccuaduong.com",
      "📊 Báo cáo PMA": "https://thegioinem.goccuaduong.com/Nem/PMA-Price-Monitoring/",
      "📣 Báo cáo ASA": "https://thegioinem.goccuaduong.com/Nem/ASA-Ads-Scraper/",
    }

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {year} <strong>Thế Giới Nệm</strong> — Hệ thống Giám sát & Báo cáo Thị trường Tự động.
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  CustomFooter.css = `
  footer {
    text-align: left;
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    opacity: 0.85;
    font-size: 0.9rem;
    border-top: 1px solid var(--lightgray);
    padding-top: 1.5rem;
  }
  footer p {
    margin-bottom: 0.5rem;
    color: var(--darkgray);
  }
  footer ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
  footer ul li a {
    color: var(--secondary);
    text-decoration: none;
    font-weight: 500;
  }
  footer ul li a:hover {
    text-decoration: underline;
  }
  `

  return CustomFooter
}) satisfies QuartzComponentConstructor
