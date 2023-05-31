<template>
  <View :class="styles.root">
    <NavBar>
      <template #left>
        <nut-searchbar placeholder="输入商品名称搜索" v-model="productName" clearable>
          <template v-slot:leftin>
            <Search2 />
          </template>
        </nut-searchbar>
      </template>
    </NavBar>
    <View>分类</View>
  </View>
</template>

<script setup lang="ts">
import styles from './index.module.scss'
import { View } from '@tarojs/components';
import { Search2 } from '@nutui/icons-vue-taro';
import NavBar from '@/components/NavBar/index.vue'
import { ref } from 'vue';

const productName = ref('')

</script>

<style lang="scss" scoped></style>