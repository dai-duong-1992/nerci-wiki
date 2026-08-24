import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links?: Record<string, string>
}

export default ((opts?: Options) => {
  const CustomFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {
      "🌿 Viện Dinh Dưỡng NERCI": "https://nerci.goccuaduong.com",
      "📊 Kiểm toán Pancake (PCA)": "https://nerci.goccuaduong.com/Pancake-Audit/",
      "🏛️ Chiến Lược & Kế Hoạch": "https://nerci.goccuaduong.com/Brand-Strategy/",
    }

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {year} <strong>Viện Dinh Dưỡng NERCI & H&H Nutrition</strong> — Hệ thống Intelligence & Báo cáo Vận hành Tự động.
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
