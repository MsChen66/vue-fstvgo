//数据的修改者
import {
  HEAD_FLAG_CHANGE,
  FOOT_FLAG_CHANGE,
} from './const.js'
let mutations = {
  // key: value    type: fn
  [HEAD_FLAG_CHANGE]: (state,payload) => {
    state.headFlag = payload
  },
  [FOOT_FLAG_CHANGE]: (state,payload) => {
    state.footFlag = payload
  },

}


export default mutations
