import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import CustomFooter from "./quartz/components/CustomFooter"

const config = await loadQuartzConfig()
export default config

const customFooterInstance = CustomFooter({
  links: {
    "🛏️ Thế Giới Nệm": "https://thegioinem.goccuaduong.com",
    "📊 Báo cáo PMA": "https://thegioinem.goccuaduong.com/Nem/PMA-Price-Monitoring/",
    "📣 Báo cáo ASA": "https://thegioinem.goccuaduong.com/Nem/ASA-Ads-Scraper/",
  },
})

export const layout = await loadQuartzLayout({
  defaults: {
    footer: [customFooterInstance],
  },
})

