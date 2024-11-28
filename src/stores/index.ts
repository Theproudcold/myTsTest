// stores/index.js
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('GlobalState', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    add() {
      this.count++
    },
    sub(){
      this.count--
    }
  },
  getters: {
    double(state){
      return state.count * 2;
    }
  }
})
