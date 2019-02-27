import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

const headfoot = {
  state,actions,mutations,getters
}

export default headfoot
