import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './app.scss'
import Taro from '@tarojs/taro'

import useStore from './store'

const pinia = createPinia()


const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(pinia)
App.use(router)

const { navBar } = useStore()

// 获取导航栏高度
Taro.getSystemInfo({}).then((res) => {
  navBar.naviBarTop = res.statusBarHeight || 0
})
export default App
