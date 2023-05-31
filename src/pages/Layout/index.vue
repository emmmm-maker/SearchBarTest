<template>
  <router-view></router-view>
  <nut-tabbar @tab-switch="tabSwitch" bottom placeholder safe-area-inset-bottom>
    <nut-tabbar-item tab-title="首页" href="/home" :icon="Home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" href="/classify" :icon="Category"> </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup lang="ts">
import { Home, Category } from '@nutui/icons-vue-taro';
import { useRouter } from 'vue-router';

const router = useRouter()

const tabSwitch = (item) => {
  router.push(item.href)
}
</script>

<style lang="scss" scoped></style>