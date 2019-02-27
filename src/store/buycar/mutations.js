//数据的修改者
import { SYNC_UPDATE } from "./const"


export default {
   [SYNC_UPDATE](state , newcars){
       //更新数据
       state.cars = newcars
   }
}