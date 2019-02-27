//动作的触发者
//引用const.js两种方式
//1.
import {
  HEAD_FLAG_CHANGE,
  FOOT_FLAG_CHANGE,
} from './const.js'
//2.
import * as type from './const.js'
console.log( type )
// let type = { HEAD_FLAG_CHANGE }
let actions = {
  // key: value  ---> key: fn  vue强调key一般建议写成常量
  //常量稳定
  [HEAD_FLAG_CHANGE]: ({commit,state},payload) => {
    commit(HEAD_FLAG_CHANGE,payload)//to  --> mutations
  },
  [FOOT_FLAG_CHANGE]: ({commit,state},payload) => {
    commit(FOOT_FLAG_CHANGE,payload)//to  --> mutations
  },
}

export default actions


// var a = 'a'
//
// var b = {
//   a: 'a'
// }
//
// b.a    b['a']  b[a]
