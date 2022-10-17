import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
    // shorthand for below statement
    state: () => ({
      user: 'Ben Hong'
    })
    // state() {
    //     return {
    //       user: 'Ben Hong'
    //     }
    // }
})