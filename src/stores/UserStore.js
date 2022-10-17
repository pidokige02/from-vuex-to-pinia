import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
    // shorthand for below statement
    // state() {
    //     return {
    //       user: 'Ben Hong'
    //     }
    // }
    state: () => ({
      user: 'Ben Hong'
    }),
    getters: {
      firstName() {
        return this.user.split(' ')[0]
      }
    }
})