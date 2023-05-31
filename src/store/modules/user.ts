import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      navBarText: '',
    }
  },
  getters: {},
  actions: {},
})

export default useUserStore
