import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import 'element-plus/lib/theme-chalk/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import messages from '../utils/i18n'
import * as icons from '@element-plus/icons' // 导入及注册全局el-icon组件(step1)

const i18n = createI18n({
  locale: localeZH.name,
  fallbackLocale: localeEN.name,
  messages,
})

export default (app) => {
  app.use(ElementPlus, { locale:localeZH })
  app.use(i18n)
  Object.keys(icons).forEach(key => { // 导入及注册全局el-icon组件(step2)
      app.component(key, icons[key])
  })
}
