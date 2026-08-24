import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import CustomFooter from "./quartz/components/CustomFooter"

const config = await loadQuartzConfig()
export default config

const customFooterInstance = CustomFooter({
  links: {
    "🌿 Viện Dinh Dưỡng NERCI": "https://nerci.goccuaduong.com",
    "📊 Kiểm toán Pancake (PCA)": "https://nerci.goccuaduong.com/Pancake-Audit/",
    "🏛️ Chiến Lược & Kế Hoạch": "https://nerci.goccuaduong.com/Brand-Strategy/",
  },
})

export const layout = await loadQuartzLayout({
  defaults: {
    footer: [customFooterInstance],
  },
})

