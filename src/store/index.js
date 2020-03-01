import Vue from 'vue'
import Vuex from 'vuex'

import alerts from './alerts'
import global from './global'
import receipts from './receipts'
import clients from './clients'
import installments from './installments'
import inventory from './inventory'
import balance from './balance'
import suppliers from './suppliers'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      alerts, receipts, clients, installments, inventory, balance, suppliers, global
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
