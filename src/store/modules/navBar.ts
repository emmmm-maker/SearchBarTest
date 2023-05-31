import { defineStore } from 'pinia'

const useNavBarStore = defineStore('navBar', {
  state: () => {
    return {
      naviBarTop: 0,
    }
  },
  getters: {},
  actions: {},
})

export default useNavBarStore
