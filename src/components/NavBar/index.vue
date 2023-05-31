<template>
  <view :class="styles.root">
    <view :style="{ height: `${top}px`, background: props.bgColor }"></view>
    <nut-config-provider :theme-vars="themeVars">
      <nut-navbar style="height: 44px;" :title="props.title" :left-show="props.leftShow">
        <template #left>
          <slot name="left"></slot>
        </template>
        <template #right>
          <slot name="right"></slot>
        </template>
      </nut-navbar>
    </nut-config-provider>
  </view>
</template>

<script lang="ts" setup>
import styles from './index.module.scss'
import useStore from '@/store/index';
import { ref } from 'vue';

type ThemeVars = {
  navbarBackground?: string
}


const props = withDefaults(defineProps<{
  title?: string //navbar标题
  leftShow?: boolean //是否显示左侧返回
  bgColor?: string
}>(), {
  bgColor: '#fff'
})

const themeVars = ref<ThemeVars>({
  navbarBackground: props.bgColor,
})

const { navBar } = useStore()

const top = ref(0)
top.value = navBar.naviBarTop

</script>

<style lang="scss" scoped></style>