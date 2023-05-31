<template>
  <view :class="styles.root">
    <NavBar bg-color="linear-gradient(to right, #9866F0, #EB4D50)">
      <template #left>
        <text class="leftTitle">SearchBar</text>
      </template>
    </NavBar>
    <nut-searchbar :style="{ position: 'sticky', top: `${naviBarTop + 44}px`, 'z-index': 2 }" class="search"
      v-model="productName" background="linear-gradient(to right, #9866F0, #EB4D50)">
      <template v-slot:leftin>
        <Search2 />
      </template>
    </nut-searchbar>
    <nut-swiper :init-page="state.page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item v-for="item in state.list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper>
  </view>
</template>

<script  lang="ts" setup>
import { Search2 } from '@nutui/icons-vue-taro';
import { reactive, ref, } from 'vue'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar/index.vue'
import useStore from '@/store/index';
import { storeToRefs } from 'pinia';


const { navBar } = useStore()
const { naviBarTop } = storeToRefs(navBar)
console.log('naviBarTop', naviBarTop.value);



const productName = ref('')
type Swiperstate = {
  page: number
  list: string[]
}
const state = reactive<Swiperstate>({
  page: 0,
  list: [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
});
</script>

<style lang="scss" scoped></style>